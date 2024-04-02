import { useDispatch } from 'react-redux';
import { createTweetThunk } from './store/tweet';

export default function CreateTweet() {
    const dispatch = useDispatch();

    return (
        <button
            onClick={() => {
                debugger;
                const hey = dispatch(createTweetThunk('Yo this project be crazyyyyyy'));
            }}
        >
            CREATE A TWEET ALREADY PLS
        </button>
    );
}
