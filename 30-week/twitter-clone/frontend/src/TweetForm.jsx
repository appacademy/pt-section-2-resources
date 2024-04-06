import './index.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweetThunk } from './store/tweet';

export default function TweetForm() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const tweetData = {
            message,
        };

        const errorCheck = await dispatch(postTweetThunk(tweetData));

        if (errorCheck) {
            return; // handle errors here
        }

        setMessage('');
        return;
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Home</h1>
            <input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="tweet-input"
                placeholder="What's happening?"
            />
            <button disabled={!message.length} className="tweet-button">
                Tweet
            </button>
        </form>
    );
}
