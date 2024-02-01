import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";
const DELETE_ARTICLES = "article/deleteArticles";

export const loadArticles = () => {
    return {
        type: LOAD_ARTICLES,
        articles
    }
};

const deleteArticles = (idx) => {
    return {
        type: DELETE_ARTICLES,
        idx
    }
}

const initialState = {entries: [], isLoading: true};

const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ARTICLES:
            return {...state, entries: [...action.articles]}
        case DELETE_ARTICLES:
            const entries = [...state.entries];
            entries.splice(action.idx, 1);
            return {...state, entries: entries}
        default:
            return state;
    }
};

export default articleReducer;