import { useSelector } from "react-redux";
import { emptyCart } from "../../store/cart";
import { useDispatch } from "react-redux";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart() {
	const dispatch = useDispatch();
	// Use selectors to get data from the cart and produce states
	const cart = useSelector((state) => state.cart);
	const produce = useSelector((state) => state.produce);

	// This maps through the cart data and returns an array of
	// objects where each object contains the item and produce
	// data spread inside of it. Essentially just combines data
	// from both states
	const cartItems = Object.values(cart).map((item) => {
		return {
			...item,
			...produce[item.id],
		};
	});

	// If there are no cart items from the map above we display a
	// a message showing cart is empty. Since this returns the JSX down below
	// will not be rendered.
	if (!cartItems || !cartItems.length)
		return (
			<div className="cart">
				No items in the cart. Start selecting items to purchase.
			</div>
		);

	// When clicking the submit button we map through the cartItems data
	// then convert it into a string to display in a window alert. After the alert
	// is closed we then use the emptyCart action to clear out the state
	const onSubmit = (e) => {
		e.preventDefault();
		window.alert(
			"Purchased the following:\n" +
				`${cartItems
					.map((item) => `${item.count} of ${item.name}`)
					.join("\n")}`
		);
		dispatch(emptyCart());
	};

	return (
		<div className="cart">
			<ul>
				{cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
			<hr />
			<form onSubmit={onSubmit}>
				<button type="submit">Purchase</button>
			</form>
		</div>
	);
}

export default Cart;
