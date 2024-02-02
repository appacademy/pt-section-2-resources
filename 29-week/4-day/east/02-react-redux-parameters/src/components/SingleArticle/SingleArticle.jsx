import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { articleByIdSelector } from "../../store/articleReducer"; 
import "./SingleArticle.css";

const SingleArticle = () => {
  const { id } = useParams();
  const article = useSelector(articleByIdSelector(id)
    // (state) =>
    // state.articleState.entries.find((el) => el.id === id)
  );

  return (
    <div className="singleArticle">
      {article && (
        <>
          <h1>{article?.title}</h1>
          <img src={article?.imageUrl} alt="Image" />
          <p>{article?.body}</p>
        </>
      )}
      {/* <h1>Why Am I At Home</h1>
      <img
        src='https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Frobcain%2Ffiles%2F2017%2F10%2FKevin-Home-Alone.jpg'
        alt='home'
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex esse
        laboriosam officia accusantium veritatis fugiat exercitationem vero
        autem nihil aliquid ullam recusandae, quis odit odio voluptates
        explicabo nobis! Consequuntur, aliquam?
      </p> */}
    </div>
  );
};

export default SingleArticle;
