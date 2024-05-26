const LOAD_TWEETS = "tweets/loadTweets";

export const loadTweets = (payload) => ({
	type: LOAD_TWEETS,
	payload,
});

export const fetchTweets = () => async (dispatch) => {
	const res = await fetch("/api/tweets");

	if (res.ok) {
		const data = await res.json();
		dispatch(loadTweets(data));
	}
	return res;
};

const intialState = {};

const tweetReducer = (state = intialState, action) => {
	switch (action.type) {
		case LOAD_TWEETS:
			const newState = {};
			action.payload.forEach((tweet) => {
				newState[tweet.id] = tweet;
			});
			return { ...newState };
		default:
			return state;
	}
};

export default tweetReducer;
