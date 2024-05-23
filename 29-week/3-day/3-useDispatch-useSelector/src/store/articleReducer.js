import articles from "../data/data.json";

const LOAD_ARTICLES = "articles/loadArticles";

export const loadArticles = () => ({
	type: LOAD_ARTICLES, // "articles/loadArticles"
	payload: articles,
});

const initialState = { entries: [], isLoading: true };

const articleReducer = (state = initialState, action) => {
	// const newState = { ...state };
	switch (action.type) {
		case LOAD_ARTICLES:
			// newState.entries = action.payload;
			// return newState;
			return { ...state, entries: [...action.payload] };
		default:
			return state;
	}
};

export default articleReducer;
