# Creating Custom Selectors

## How do I know if I need a custom selector?

Technically, none of your components **_need_** a custom selector.

However, some components benefit from having one. You should use one if:

- Your redux state is an object
- Your component needs the state in an array

## How to use `reselect`

In your `frontend` directory

```zsh
npm i reselect
```

In the reducer file for the specific state, i.e. `tweetReducer.js`

```js
// Import at the top of your reducer file
import { createSelector } from "reselect";

// Create a "standard" react selector
const tweetSelector = (store) => store.tweets;

// Create and export your custom selector using `createSelector`
// Your "standard" selector is the first arg
// The second arg is a callback to convert your state into an array
export const selectAllTweets = createSelector(
  tweetSelector, // Your "standard" selector
  (tweets) => Object.values(tweets) // Conversion into an array
);
```

This is what your component would have had instead

```js
// Notice how it looks like "tweetSelector" from above!
const tweets = Object.values(useSelector((store) => store.tweets));
// or
const tweets = useSelector((store) => Object.values(store.tweets));
```

This is what your component should have now

```js
// Make sure not to invoke your selector!
const tweets = useSelector(selectAllTweets);
```
