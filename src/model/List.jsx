
import Product from "./product";

const List = ({products}) => {
	return (
		<div className="flex flex-wrap items-center justify-center gap-y-4 gap-x-4 w-full ">
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
