
import CartProduct from "./cartProduct";

const CartList = ({products}) => {
	return (
		<div className=" grid grid-cols-4 gap-y-4">
			{products.map((item, i) => {
				return (
					<CartProduct
						key={i}
						id={item.id}
						name={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
						quantity={item.quantity}
					/>
				);
			})}
		</div>
	);
};

export default CartList;
