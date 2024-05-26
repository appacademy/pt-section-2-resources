import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTweets } from "../../store/tweets";
import "./TweetList.css";

const TweetList = () => {
	const tweets = useSelector((state) => state.tweets);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTweets());
	}, [dispatch]);

	return (
		<main>
			<h1>Tweet List</h1>
			{Object.values(tweets).map((tweet) => (
				<div key={tweet.id} style={{ border: "2px solid black" }}>
					<div>{tweet.User.username}</div>
					<p>{tweet.body}</p>
				</div>
			))}
		</main>
	);
};

export default TweetList;
