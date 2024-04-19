const postsContainer = document.querySelector('.post-container');
const loader = document.querySelector('.loader');
const filter = document.querySelector('.filter');

let LIMIT = 10;
let PAGE = 1;

async function getPosts() {
  const res = await fetch(
    `/data?page=${PAGE}&limit=${LIMIT}`
  );
  const data = await res.json();
  return data;
}

// show posts in dom
async function showPosts() {
  const posts = await getPosts();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
    <div class="number">${post.id}</div>
    <div class="post-info">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
    </div>
    `;
    postsContainer.appendChild(postEl);
  });
  loader.classList.remove('show');
}

showPosts();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    // add loader & fetch new posts
    loader.classList.add('show');

    // setTimeout added only to show a delay between loading state and updating DOM with new data
    setTimeout(() => {
      PAGE++;
      showPosts();
    }, 500);
  }
});

function filterPosts(e) {
  const fitlerTerm = e.target.value.toUpperCase();

  const posts = document.querySelectorAll('.post');

  posts.forEach((post) => {
    const title = post.querySelector('.post-title').textContent.toUpperCase();
    const body = post.querySelector('.post-body').textContent.toUpperCase();

    if (title.indexOf(fitlerTerm) > -1 || body.indexOf(fitlerTerm) > -1) {
      post.style.display = 'flex';
    } else {
      post.style.display = 'none';
    }
  });
}

// filter posts
filter.addEventListener('input', filterPosts);
