const postsContainer = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
const filter = document.querySelector('.filter');

let SIZE = 5;
let PAGE = 1;

async function getPets() {
  const res = await fetch(
    `/pets?page=${PAGE}&size=${SIZE}`
  );
  const data = await res.json();
  return data["Pets"];
}


async function showPets() {
  const pets = await getPets();
  console.log(pets)

  pets.forEach((pet) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <h2 class="post-title">${pet.petName}</h2>
      <img class="post-body" src=${pet.image} />
    `;
    postsContainer.appendChild(postEl);
  });
  loader.classList.remove('show');
}

showPets();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 1) {

    loader.classList.add('show');


    setTimeout(() => {
      PAGE++;
      showPets();
    }, 500);
  }
});

// function filterPosts(e) {
//   const fitlerTerm = e.target.value.toUpperCase();

//   const posts = document.querySelectorAll('.post');

//   posts.forEach((post) => {
//     const title = post.querySelector('.post-title').textContent.toUpperCase();
//     const body = post.querySelector('.post-body').textContent.toUpperCase();

//     if (title.indexOf(fitlerTerm) > -1 || body.indexOf(fitlerTerm) > -1) {
//       post.style.display = 'flex';
//     } else {
//       post.style.display = 'none';
//     }
//   });
// }


// filter.addEventListener('input', filterPosts);
