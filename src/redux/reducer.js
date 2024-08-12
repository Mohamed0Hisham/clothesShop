import db from "../assets/all_product";

const initialState = {
	cart: [],
	total: 0,
	products: db,
};

export const reducer = (state = initialState, action) => {
	const { type, payload } = action;
	/// our cart at the moment
	let currentCart = [...state.cart];

	// check if the element exist
	const index = currentCart.findIndex((temp) => temp.id === payload.id);

	switch (type) {
		case "ADD_TO_CART": {
			if (index >= 0) {
				currentCart[index].quantity = currentCart[index].quantity + 1;
			} else {
				// currentCart= currentCart.concat({...payload,quantity:1});
				currentCart.push({...payload,quantity:1})
			}
			return {
				...state,
				cart: currentCart,
			};
		}
		case 'INCREASE_QUANTITY': {
			currentCart[index].quantity = currentCart[index].quantity + 1;
			return {
				...state,
				cart: currentCart,
			};
		}
		case 'DECREASE_QUANTITY' : {
			currentCart[index].quantity = currentCart[index].quantity - 1;
			currentCart[index].quantity <= 0? currentCart[index].quantity = 0 : currentCart[index].quantity;
			return {
				...state,
				cart: currentCart,
			};
		}
		default:
			return {...state};
	}
};
