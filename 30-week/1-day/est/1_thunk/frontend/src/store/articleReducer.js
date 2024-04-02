// import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const loadArticles = (articles) => {
    return {
        type: LOAD_ARTICLES,
        articles,
    };
};

export const addArticle = (article) => {
    return {
        type: ADD_ARTICLE,
        article,
    };
};

export const loadArticlesThunk = () => async (dispatch) => {
    const res = await fetch('/backend/articles');
    // const res = await fetch('/api/articles');

    console.log(res);

    const data = await res.json();

    console.log(data);

    dispatch(loadArticles(data));

    // if (res.ok) {
    //     // handle the success here
    // } else {
    //     // handle the error here
    // }
};

export const addArticleThunk = (newArticle) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(addArticle(data));
    } else {
        const error = await res.json();

        //! If there's an error, DON'T DISPATCH IT!!!!

        return error;
    }
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.articles] };
        case ADD_ARTICLE:
            return { ...state, entries: [...state.entries, action.article] };
        default:
            return state;
    }
};

export default articleReducer;
