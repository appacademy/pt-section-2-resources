import { useEffect, useState } from "react";

const ServerData = () => {
	const [serverData, setServerData] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch("https://fortnite-api.com/v2/news");
			const { data } = await res.json();
			setServerData(data.br.motds);
		})();
	}, []);

	return serverData.length ? (
		<main>
			{serverData.map((data) => (
				<div className="serverContainer" key={data.id}>
					<h1 className="title">{data.title}</h1>
					<h2 className="body">{data.body}</h2>
					<img className="img" src={data.image} alt={data.title} />
				</div>
			))}
		</main>
	) : (
		<main>
			<h1>Loading..</h1>
		</main>
	);
};

export default ServerData;
