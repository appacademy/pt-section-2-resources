import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";
import ArtDescription from "./components/ArtDescription";
import harvardArt from "./data/harvardArt";

const Layout = () => {
	return (
		<div className="page-ctn">
			<GalleryNavigation galleries={harvardArt.records} />
			<main className="main-ctn">
				<Outlet />
			</main>
		</div>
	);
};

const PageMissing = () => {
	return <h2>Page Not Found</h2>;
};

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{
				path: "*",
				element: <h2>Page Not Found</h2>,
			},
			{
				path: "/",
				element: (
					<>
						<h2>Harvard Art Museum</h2>
						<p>
							Look, but Don&apos;t Touch. Please select a Gallery
							in the navigation bar.
						</p>
					</>
				),
			},
			{
				path: "galleries/:galleryId",
				errorElement: <PageMissing />,

				children: [
					{
						path: "art/:artId",
						element: (
							<ArtDescription galleries={harvardArt.records} />
						),
					},
					{
						index: true,
						element: <GalleryView galleries={harvardArt.records} />,
					},
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
