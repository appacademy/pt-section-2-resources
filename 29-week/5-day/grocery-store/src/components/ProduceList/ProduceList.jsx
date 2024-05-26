import { populateProduce } from "../../store/produce";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ProduceDetails from "./ProduceDetails";
import "./ProduceList.css";

function ProduceList() {
	// Establish a dispatch variable for dispatching our action
	const dispatch = useDispatch();
	// Use selector listens for changes in the produce state
	const produce = useSelector((state) => state.produce);

	// One time useEffect for dispatching our action which will
	// load produce into the state
	useEffect(() => {
		dispatch(populateProduce());
	}, [dispatch]);

	const produceArr = Object.values(produce);

	return (
		<>
			<h2>All produce</h2>
			{!produceArr.length && <span>No produce available right now.</span>}
			<ul className="produce-list">
				{produceArr.map((produce) => (
					<ProduceDetails key={produce.id} produce={produce} />
				))}
			</ul>
		</>
	);
}

export default ProduceList;
