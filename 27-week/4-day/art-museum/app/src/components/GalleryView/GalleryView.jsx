import { useParams, Navigate } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import "./GalleryView.css";

const GalleryView = ({ galleries }) => {
	const { galleryId } = useParams();
	const currGallery = galleries.find((gallery) => gallery.id == galleryId);

	if (!currGallery) return <Navigate to="/" replace={true} />;

	return (
		<section>
			<h2>{currGallery.name}</h2>
			<div className="art-ctn">
				{currGallery.objects.map((obj) => (
					<ArtImageTile art={obj} key={obj.id} />
				))}
			</div>
		</section>
	);
};

export default GalleryView;
