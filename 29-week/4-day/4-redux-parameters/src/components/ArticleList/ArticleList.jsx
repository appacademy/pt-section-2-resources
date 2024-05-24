import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loadArticles } from "../../store/articleReducer";

const ArticleList = () => {
	const dispatch = useDispatch();
	const articles = useSelector((state) => state.articleState.entries);
	console.log("OBJECT:", articles);
	console.log("ARRAY: ", Object.values(articles));
	useEffect(() => {
		dispatch(loadArticles());
	}, [dispatch]);

	return (
		<div>
			<h1>Article List</h1>
			<ol>
				{Object.values(articles).map(({ id, title }) => (
					<li key={id}>
						<NavLink to={`${id}`}>{title}</NavLink>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ArticleList;
