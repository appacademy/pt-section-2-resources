import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import "./SingleArticle.css";

const SingleArticle = () => {
	// const [isLoading, setIsLoading] = useState(true);
	const { id } = useParams();
	const { entries, isLoading } = useSelector((state) => state.articleState);

	const singleArticle = entries.find((article) => article.id == id);

	// useEffect(() => {
	// 	if (entries.length > 0) {
	// 		setIsLoading(false);
	// 	}
	// }, [entries]);

	return !isLoading ? (
		<div className="singleArticle">
			<h1>{singleArticle.title}</h1>
			<img src={singleArticle.imageUrl} alt={singleArticle?.title} />
			<p>{singleArticle.body}</p>
		</div>
	) : (
		<div>
			<h1>Loading...</h1>
		</div>
	);
};

export default SingleArticle;
