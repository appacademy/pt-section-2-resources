import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./SingleArticle.css";

const SingleArticle = () => {
	const { id } = useParams();
	const { entries, isLoading } = useSelector((state) => state.articleState);
	const article = entries[id];

	return !isLoading ? (
		<div className="singleArticle">
			<h1>{article.title}</h1>
			<img src={article.imageUrl} alt="home" />
			<p>{article.body}</p>
		</div>
	) : (
		<div>
			<h1>Loading...</h1>
		</div>
	);
};

export default SingleArticle;
