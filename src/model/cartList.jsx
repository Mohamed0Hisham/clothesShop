import CartProduct from "./cartProduct";

const CartList = ({ products }) => {
	return (
		<div className=" flex flex-wrap items-center justify-center gap-y-4 gap-x-4 w-full">
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
