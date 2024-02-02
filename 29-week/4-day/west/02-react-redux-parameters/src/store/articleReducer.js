import articles from "../data/data.json";

export const allArticlesSelector = (state) => state.articleState.entries;
export const articleByIdSelector = (id) => (state) =>
  state.articleState.entries.find((artObj) => artObj.id === id);

const LOAD_ARTICLES = "article/loadArticles";

export const loadArticles = () => {
  return {
    type: LOAD_ARTICLES,
    articles,
  };
};

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ARTICLES:
      return { ...state, entries: [...action.articles] };
    default:
      return state;
  }
};

export default articleReducer;
