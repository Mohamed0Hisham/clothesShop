import db from "../assets/all_product";

const initialState = {
	cart: [],
	total: 0,
	products: db,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case "ADD_TO_CART": {
			return payload;
		}
		default:
			return state;
	}
};
