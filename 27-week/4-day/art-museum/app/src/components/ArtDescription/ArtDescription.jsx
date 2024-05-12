import { Link, useParams } from "react-router-dom";
import "./ArtDescription.css";

const ArtDescription = ({ galleries }) => {
	const { artId, galleryId } = useParams();

	const gallery = galleries.find((gallery) => gallery.id == galleryId);
	const art = gallery.objects.find((art) => art.id == artId);

	return (
		<>
			<section className="art-description">
				<Link to="..">Back to Gallery</Link>
				<a href={art.url}>
					<h2>{art.title}</h2>
				</a>
				<p>{art.description}</p>
			</section>
			<section className="art-ctn">
				{art.images.map((image) => (
					<div className="art-card">
						<img
							key={image.imageid}
							src={image.baseimageurl}
							alt="art image"
							className="image-tile"
						/>
					</div>
				))}
			</section>
		</>
	);
};

export default ArtDescription;
