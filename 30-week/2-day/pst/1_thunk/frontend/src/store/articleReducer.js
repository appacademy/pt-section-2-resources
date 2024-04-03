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
    // error response === handle with if / else

    // error is THROWN

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

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES: {
            const normalizedArticleEntries = {};

            action.payload.forEach((el) => {
                normalizedArticleEntries[el.id] = { ...el };
            });

            return { ...state, entries: normalizedArticleEntries };
        }
        case ADD_ARTICLE: {
            const newData = {
                ...state.entries,
                [action.payload.id]: action.payload,
            };
            return { ...state, entries: newData };
        }
        default:
            return state;
    }
};

export default articleReducer;
