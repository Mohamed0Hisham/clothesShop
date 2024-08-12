import { useDispatch } from "react-redux";
import {  decreaseQuantity_Action, increaseQuantity_Action } from "../redux/action";
import { CiCircleMinus, CiCirclePlus } from "react-icons/ci";

const CartProduct = (props) => {
	const { id, name, image, new_price, old_price, quantity } = props;
	
	const dispatch = useDispatch();
    const increaseQuantity =()=>{
        dispatch(increaseQuantity_Action({ id, name, image, new_price, old_price, quantity }))
    }
    const decreaseQuantity =()=>{
        dispatch(decreaseQuantity_Action({...props, quantity}))
    }
	return (
		<div className="w-80 rounded-t-md">
			<div>
				<img src={image} alt={name} className="rounded-t-md" />
			</div>
			<p className="sm:text-xl font-bold text-wrap">{name}</p>
			<div className=" flex justify-start  items-center text-wrap text-lg font-bold">
				<div className="flex flex-col">
					<span className=" line-through">{old_price}$</span>
					<span>{new_price}$</span>
				</div>
			</div>
				<div className="flex justify-evenly items-center text-2xl font-bold">
					<button className="increase" onClick={()=>increaseQuantity()}>
						<CiCirclePlus />
					</button>
					<span>quantity {quantity}</span>
					<button className="decrease" onClick={()=>decreaseQuantity()}>
						<CiCircleMinus />
					</button>
				</div>
		</div>
	);
};

export default CartProduct;
