import articles from '../data/data.json';

const LOAD_ARTICLES = 'article/loadArticles';
const LOAD_ARTICLES_WITHOUT_OVERWRITING_OLD_STATE =
    "this is just a random example don't worry about it";

// export const loadArticles = () => {
//     const action = {};

//     action.type = LOAD_ARTICLES;
//     action.payload = articles;
//     // action.articles = articles;

//     return action;
// };

export const loadArticles = () => ({ type: LOAD_ARTICLES, payload: articles });

const initialState = {
    entries: [{ title: 'My cat Momo no longer has teeth' }],
    isLoading: true,
};

export default function articleReducer(state = initialState, action) {
    console.log("HEY LOOK I'MA ARTICLE")

    switch (action.type) {
        case LOAD_ARTICLES:
            return { ...state, entries: [...action.payload] };

        case LOAD_ARTICLES_WITHOUT_OVERWRITING_OLD_STATE:
            // const newEntries = // filter out any duplicate entries

            return { ...state, entries: [...state.entries, ...action.payload] };

        default:
            return state;
    }
}
