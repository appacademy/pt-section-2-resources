import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadArticles } from "../../store/articleReducer";
import { NavLink } from "react-router-dom";

const ArticleList = () => {
	const articles = useSelector((state) => state.articleState.entries);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadArticles());
	}, [dispatch]);

	return (
		<div>
			<h1>Article List</h1>
			<ol>
				{articles.map((article) => (
					<li key={article.id}>
						<NavLink to={`/articles/${article.id}`}>
							{article.title}
						</NavLink>
					</li>
				))}
			</ol>
		</div>
	);
};

export default ArticleList;
