// constant to avoid debugging typos
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const CREATE_TWEET = 'tweet/createTweet';

//regular action creator
const loadTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        tweets,
    };
};

const createTweet = (payload) => {
    return {
        type: CREATE_TWEET,
        payload,
    };
};

// thunk action creator
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch('/api/tweets');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadTweets(data));
        return data;
    }
};

export const createTweetThunk = (message) => async (dispatch) => {
    const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
    });

    const data = await res.json();

    dispatch(createTweet(data));
};

// state object
const initialState = {};

// reducer
const tweetsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TWEETS: {
            const newState = {};
            action.tweets.forEach((tweet) => (newState[tweet.id] = tweet));
            return newState;
        }
        case CREATE_TWEET: {
            const newState = { ...state };

            newState[action.payload.id] = action.payload;

            return newState;
        }
        default:
            return state;
    }
};

export default tweetsReducer;
