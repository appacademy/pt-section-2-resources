import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticleList = () => {
    const dispatch = useDispatch();
    const { entries } = useSelector((store) => store.articleState);

    useEffect(() => {
        dispatch(loadArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {entries.map(({ id, title }) => (
                    <li key={id}>
                        <NavLink to={`${id}`}>{title}</NavLink>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default ArticleList;
