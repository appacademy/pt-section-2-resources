import { createSelector } from 'reselect';

//! --------------------------------------------------------------------
//*                             Action Types
//! --------------------------------------------------------------------
const GET_ALL_TWEETS = 'tweet/getAllTweets';
const POST_TWEET = 'tweet/postTweet';

//! --------------------------------------------------------------------
//*                         regular action creator
//! --------------------------------------------------------------------

const loadTweets = (tweets) => {
    return {
        type: GET_ALL_TWEETS,
        tweets,
    };
};

const postTweet = (payload) => {
    return {
        type: POST_TWEET,
        payload,
    };
};

//! --------------------------------------------------------------------
//*                          thunk action creator
//! --------------------------------------------------------------------
export const getAllTweets = () => async (dispatch) => {
    const response = await fetch('/api/tweets');

    if (response.ok) {
        const data = await response.json();
        dispatch(loadTweets(data));
        return data;
    }
};

export const postTweetThunk = (tweet) => async (dispatch) => {
    const res = await fetch('/api/tweets', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(tweet),
    });

    if (res.ok) {
        const data = await res.json();

        dispatch(postTweet(data));

        return null;
    } else {
        const err = await res.json();

        return err;
    }
};

//! --------------------------------------------------------------------
//*                              Selectors
//! --------------------------------------------------------------------

// const tweetSelector = (state) => state.tweets;

// export const getTweetList = createSelector(tweetSelector, (tweetsObj) => {
//     const tweetArray = Object.values(tweetsObj);
//     return tweetArray;
// });

export const getTweetList = createSelector(
    (state) => state.tweets,
    (tweets) => Object.values(tweets)
);

//! --------------------------------------------------------------------
//*                              Reducer
//! --------------------------------------------------------------------

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

        case POST_TWEET: {
            const newState = { ...state };

            newState[action.payload.id] = action.payload;

            return newState;
        }

        default:
            return state;
    }
};

export default tweetsReducer;
