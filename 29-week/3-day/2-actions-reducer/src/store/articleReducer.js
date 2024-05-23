import articles from "../data/data.json";

const LOAD_ARTICLES = "articles/loadArticles";

export const loadArticles = () => ({
	type: LOAD_ARTICLES, // "articles/loadArticles"
	payload: articles,
});

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ARTICLES:
			return { ...state, entries: [...action.payload] };
		default:
			return state;
	}
};

export default articleReducer;
