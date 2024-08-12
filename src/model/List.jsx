
import Product from "./product";

const List = ({products}) => {
	return (
		<div className=" grid grid-cols-4 gap-y-4">
			{products.map((item, i) => {
				return (
					<Product
						key={i}
						id={item.id}
						name={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
					/>
				);
			})}
		</div>
	);
};

export default List;
