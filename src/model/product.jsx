import { MdOutlineAddShoppingCart } from "react-icons/md";

const Product = (props) => {
    const {id,name,image,new_price,old_price} = props;
	return (
		<div className="w-80 rounded-t-md">
			<div>
                <img src={image} alt={name} className="rounded-t-md"/>
            </div>
            <p className="sm:text-xl font-bold text-wrap">{name}</p>
            <div className=" flex justify-between items-center text-wrap text-lg font-bold">
                <div className="flex flex-col">
                    <span className=" line-through" >{old_price}$</span>
                    <span>{new_price}$</span>
                </div>
                <button className='text-4xl bg-sky-400 p-3 rounded-xl text-white'>
					<MdOutlineAddShoppingCart />
				</button>
            </div>
		</div>
	);
};

export default Product;
