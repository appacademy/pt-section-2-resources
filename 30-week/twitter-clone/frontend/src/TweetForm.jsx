import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTweetThunk } from './store/tweet';
import { PacmanLoader, RingLoader, RotateLoader } from 'react-spinners';

export default function TweetForm() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setShowLoading(true);

        setTimeout(async () => {
            const tweetData = {
                message,
            };

            const errorCheck = await dispatch(postTweetThunk(tweetData));

            if (errorCheck) {
                return; // handle errors here
            }

            setMessage('');
            setShowLoading(false);
        }, 3000);

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

            {showLoading && (
                <>
                    <PacmanLoader color="#36d7b7" />
                    <RingLoader color="red" />
                    <RotateLoader color="green" />
                </>
            )}
        </form>
    );
}
