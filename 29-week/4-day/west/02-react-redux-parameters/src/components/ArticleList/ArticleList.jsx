import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { loadArticles, allArticlesSelector } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(allArticlesSelector);

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <div>
      <h1>Article List</h1>
      <ol>
        {articles.map(({ id, title }) => (
          <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
        ))}
      </ol>
    </div>
  );
};

export default ArticleList;
