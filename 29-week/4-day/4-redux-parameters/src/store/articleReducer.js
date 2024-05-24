import articles from "../data/data.json";

const LOAD_ARTICLES = "article/loadArticles";

export const loadArticles = () => {
	return {
		type: LOAD_ARTICLES,
		payload: articles,
	};
};

const initialState = { entries: {}, isLoading: true };

const articleReducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_ARTICLES:
			const normalizedData = {};
			action.payload.forEach((article) => {
				normalizedData[article.id] = article;
			});
			return { isLoading: false, entries: { ...normalizedData } };
		default:
			return state;
	}
};

export default articleReducer;
