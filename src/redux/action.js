export const addToCart_Action = (item) => {
	return {
		type: "ADD_TO_CART",
		payload: item,
	};
};
export const increaseQuantity_Action = (item) => {
	return {
		type: "INCREASE_QUANTITY",
		payload: item,
	};
};
export const decreaseQuantity_Action = (item) => {
	return {
		type: "DECREASE_QUANTITY",
		payload: item,
	};
};
