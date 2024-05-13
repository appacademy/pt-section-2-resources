import { useState, useEffect } from "react";
import ProductListItem from "../ProductListItem";
import ProductDetails from "../ProductDetails";
import "./ProductView.css";

function ProductView({ products }) {
	const [sideOpen, setSideOpen] = useState(
		localStorage.getItem("side") || true
	);
	const [selectedProduct, setSelectedProduct] = useState();

	useEffect(() => {
		if (selectedProduct) setSideOpen(true);
	}, [selectedProduct]);

	useEffect(() => {
		if (!sideOpen) setSelectedProduct();
	}, [sideOpen]);

	return (
		<div className="product-view">
			<div className="product-main-area">
				<h1>Products</h1>
				<div className="product-list">
					{products.map((item) => (
						<ProductListItem
							key={item.id}
							product={item}
							onClick={() => setSelectedProduct(item)}
							isSelected={
								item.id === selectedProduct?.id ? true : false
							}
						/>
					))}
				</div>
			</div>
			<div className="product-side-panel">
				<div className="product-side-panel-toggle-wrapper">
					<div
						className="product-side-panel-toggle"
						onClick={() => setSideOpen((prev) => !prev)}
					>
						{sideOpen ? ">" : "<"}
					</div>
				</div>
				<ProductDetails visible={sideOpen} product={selectedProduct} />
			</div>
		</div>
	);
}

export default ProductView;
