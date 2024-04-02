// import articles from '../data/data.json'; //! Replacing

const LOAD_ARTICLES = 'article/loadArticles';
const ADD_ARTICLE = 'article/addArticle';

export const getArticles = (payload) => {
    return {
        type: LOAD_ARTICLES,
        payload,
    };
};

export const postArticle = (payload) => {
    return {
        type: ADD_ARTICLE,
        payload,
    };
};

export const getArticlesThunk = () => async (dispatch) => {
    const res = await fetch('/api/articles'); //! Replacing

    const data = await res.json();

    dispatch(getArticles(data));

    // if (res.ok) {
    //     // if success
    // } else {
    //     // if error
    // }
};

export const postArticleThunk = (newArticle) => async (dispatch) => {
    const res = await fetch('/api/articles', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newArticle),
    });

    if (res.ok) {
        const data = await res.json();
        dispatch(postArticle(data));
        return 'No errors!';
    } else {
        const error = await res.json();

        return error; //? This returns
    }
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.payload] };
        case ADD_ARTICLE:
            return { ...state, entries: [...state.entries, action.payload] };
        default:
            return state;
    }
};

export default articleReducer;
