import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const LOAD_ARTICLES_WITHOUT_DELETE_OLD_ARTICLES =
    "just an example, don't worry too much about it!";

// export const loadArticles = () => {
//     const action = {};

//     // action.articles = articles
//     action.type = LOAD_ARTICLES;
//     action.payload = articles;

//     return action;
// };

export const loadArticles = () => ({ type: LOAD_ARTICLES, payload: articles });

const initialState = {
    entries: [{ title: 'Momo has no teeth now' }],
    isLoading: true,
};

export default function articleReducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.payload] };
        case LOAD_ARTICLES_WITHOUT_DELETE_OLD_ARTICLES:
            return { ...state, entries: [...state.entries, ...action.payload] };
        default:
            return state;
    }
}
