import { useDispatch, useSelector } from 'react-redux';
import { loadArticles } from '../../store/articleReducer';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const ArticleList = () => {
    const dispatch = useDispatch();
    // const entries = useSelector((store) => store.articleState.entries);
    // const reduxStore = useSelector((store) => store);
    // const entries = reduxStore.articleState.entries;
    const { entries } = useSelector((store) => store.articleState);

    useEffect(() => {
        dispatch(loadArticles());
    }, [dispatch]);

    return (
        <div>
            <h1>Article List</h1>
            <ol>
                {entries.map((el) => {
                    return (
                        <li key={el.id}>
                            <NavLink to={el.id}>{el.title}</NavLink>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
};

export default ArticleList;
