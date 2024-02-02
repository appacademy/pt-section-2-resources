import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articleState.entries);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {/* <li>Gilligan&apos;s Island. Is it true?</li>
        <li>A Baseball Moment</li>
        <li>Poke Moment</li>
        <li>Cool Cats</li>
        <li>Why Am I At Home</li> */}
        {articles.map((article) => {
          return (
            <li key={article.id}>
            <NavLink to={`/articles/${article.id}`} >
              {article.title}
            </NavLink>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default ArticleList;
