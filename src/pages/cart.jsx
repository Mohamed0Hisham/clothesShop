import { useSelector } from "react-redux";
import CartList from "../model/cartList";
import Footer from "../components/footer";

const Cart = () => {
	const cart = useSelector((state) => state.cart);
	return (
		<div>
			<h1>Your Cart</h1>
			<CartList products={cart} />
			<Footer />
		</div>
	);
};

export default Cart;
