import { Link } from "react-router-dom";
import "./ArtImageTile.css";

const ArtImageTile = ({ art }) => {
	return art.images[0] ? (
		<Link to={`art/${art.id}`}>
			<div className="art-card">
				<img
					src={`${art.images[0].baseimageurl}`}
					className="image-tile"
				/>
			</div>
		</Link>
	) : (
		<Link to={`art/${art.id}`}>
			<div className="art-card">
				<div>{art.title}</div>
				<div>No Images to Display</div>
			</div>
		</Link>
	);
};

export default ArtImageTile;
