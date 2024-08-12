import Product from "../model/product";
import new_collection from "./../Assets/new_collections";

const NewCollection = () => {
	return (
		<div>
			<h1 className="relative text-center text-4xl font-bold mb-12 ">
                New Collections
            <hr className="absolute left-1/2 -translate-x-1/2 w-96 text-black mt-4"/>
            </h1>
            <div className="grid grid-cols-4 gap-y-5">
				{new_collection.map((item, i) => {
					return <Product
						key={i}
						id={item.id}
						name={item.name}
						image={item.image}
						new_price={item.new_price}
						old_price={item.old_price}
					/>;
				})}
			</div>
		</div>
	);
};

export default NewCollection;
