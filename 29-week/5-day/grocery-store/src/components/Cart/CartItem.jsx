import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
	changeCount,
	decrementCount,
	incrementCount,
	removeItem,
} from "../../store/cart";

function CartItem({ item }) {
	const [count, setCount] = useState(item.count);
	const dispatch = useDispatch();

	// On click event listener. When we click the remove button we'll
	// dispatch the removeItem action and use the item's id to remove it
	// from the cart
	const handleRemove = () => dispatch(removeItem(item.id));

	// On click event listener. When we click the + button we'll
	// dispatch the incrementCount action and use the item's id to increase
	// the count associated with it
	const handleIncrement = () => dispatch(incrementCount(item.id));

	// On click event listener. When we click the - button we'll
	// dispatch the decrementCount action and use the item's id to decrease
	// the count associated with it. If the item's current count is 1 we instead dispatch
	// the removeItem to remove it from the cart;
	const handleDecrement = () => {
		if (item.count <= 1) {
			dispatch(removeItem(item.id));
		} else {
			dispatch(decrementCount(item.id));
		}
	};

	// On change event listener
	const handleChange = (e) => {
		// Save the input value
		let val = e.target.value;
		if (val === "") {
			// If the input is empty we don't update the state yet. So we set the input
			// value and return
			setCount(val);
			return;
		} else if (val <= 1) {
			// If user enters a value at 0 or less we override and change it to 1
			val = 1;
		}
		// We set the count state and then update our cart state by dispatching
		// changeCount with our payload object passed in
		setCount(val);
		dispatch(changeCount({ id: item.id, count: val }));
	};

	// useEffect listens for changes from our redux state. The primary purpose of
	// this is to cause a rerender when we increment or decrement the count in our
	// cart
	useEffect(() => {
		setCount(item.count);
	}, [item.count]);

	return (
		<li className="cart-item">
			<div className="cart-item-header">{item.name}</div>
			<div className="cart-item-menu">
				<input type="number" value={count} onChange={handleChange} />
				<button onClick={handleIncrement} className="cart-item-button">
					+
				</button>
				<button onClick={handleDecrement} className="cart-item-button">
					-
				</button>
				<button onClick={handleRemove} className="cart-item-button">
					Remove
				</button>
			</div>
		</li>
	);
}

export default CartItem;
