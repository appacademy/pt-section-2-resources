import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../store/cart";
import { likeProduce } from "../../store/produce";

function ProduceDetails({ produce }) {
	const dispatch = useDispatch();
	// Attempt to select the item from the cart using the id
	// from the produce. This will be used in the JSX for determining
	// the classes applied to elements.
	const cartItem = useSelector((state) => state.cart[produce.id]);

	// On click event listener. If we click the + button we'll dispatch
	// the addItem action. This will use the produce's id to add the
	// item to the card
	const handleAdd = () => dispatch(addItem(produce.id));

	// On click event listener. If we click the 💖 button then we dispatch our
	// likeProduce action. This action will just flip the .liked boolean for this
	// specific produce
	const handleLike = () => dispatch(likeProduce(produce.id));

	return (
		<li className="produce-details">
			<span>{produce.name}</span>
			<span>
				<button
					onClick={handleLike}
					className={
						"like-button" + (produce.liked ? " selected" : "")
					}
				>
					<i className={"fas fa-heart"} />
				</button>
				<button
					onClick={handleAdd}
					className={"plus-button" + (cartItem ? " selected" : "")}
				>
					<i className="fas fa-plus" />
				</button>
			</span>
		</li>
	);
}

export default ProduceDetails;
