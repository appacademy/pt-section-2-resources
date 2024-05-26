import produceData from "../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const LIKE = "produce/LIKE";

export const populateProduce = () => ({
	type: POPULATE,
	payload: produceData,
});

export const likeProduce = (payload) => ({
	type: LIKE,
	payload,
});

export default function produceReducer(state = {}, action) {
	switch (action.type) {
		case POPULATE: {
			const newState = {};
			action.payload.forEach((produce) => {
				newState[produce.id] = produce;
			});
			return newState;
		}
		case LIKE: {
			const id = action.payload;
			return {
				...state,
				[id]: {
					...state[id],
					liked: !state[id].liked,
				},
			};
		}
		default:
			return state;
	}
}
