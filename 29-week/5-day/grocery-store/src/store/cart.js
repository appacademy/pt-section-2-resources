const ADD_ITEM = "cart/addItem";
const REMOVE_ITEM = "cart/removeItem";
const INCREMENT_COUNT = "cart/incrementCount";
const DECREMENT_COUNT = "cart/decrementCount";
const EMPTY_CART = "cart/emptyCart";
const CHANGE_COUNT = "carty/changeCount";

export const addItem = (payload) => ({
	type: ADD_ITEM,
	payload,
});

export const removeItem = (payload) => ({
	type: REMOVE_ITEM,
	payload,
});

export const incrementCount = (payload) => ({
	type: INCREMENT_COUNT,
	payload,
});

export const decrementCount = (payload) => ({
	type: DECREMENT_COUNT,
	payload,
});

// Payload will be an object with a item id and count inside of it
// Example: { id: 1, count: 5 }
export const changeCount = (payload) => ({
	type: CHANGE_COUNT,
	payload,
});

// Since this action will completely reset the state we don't need to handle
// any payload data. We'll just reset the cart to it's initial state in the
// reducer
export const emptyCart = () => ({
	type: EMPTY_CART,
});

export default function cartReducer(state = {}, action) {
	switch (action.type) {
		case ADD_ITEM: {
			const id = action.payload;
			const count = state[id] ? state[id].count : 1;
			return {
				...state,
				[id]: {
					id,
					count,
				},
			};
		}
		case REMOVE_ITEM: {
			const id = action.payload;
			const newState = { ...state };
			delete newState[id];
			return { ...newState };
		}
		case INCREMENT_COUNT: {
			const id = action.payload;
			return {
				...state,
				[id]: {
					...state[id],
					count: state[id].count + 1,
				},
			};
		}
		case DECREMENT_COUNT: {
			const id = action.payload;
			return {
				...state,
				[id]: {
					...state[id],
					count: state[id].count - 1,
				},
			};
		}
		case EMPTY_CART: {
			return {};
		}
		case CHANGE_COUNT: {
			const { id, count } = action.payload;
			return {
				...state,
				[id]: {
					...state[id],
					count,
				},
			};
		}
		default:
			return state;
	}
}
