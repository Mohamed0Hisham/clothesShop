import { useState } from "react";
import popular from "../../assets/popular";
import Product from "../../model/product";
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import "./popularGallary.css";
const PopularGallary = () => {
	const [index, setIndex] = useState(0);
	let gallary = popular.map((item, i) => {
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
	});
	const gallaryLength = gallary.length;
	const slideRight = () => {
		if (index < gallaryLength - 3) setIndex(index + 1);
	};
	const slideLeft = () => {
		if (index > 0) setIndex(index - 1);
	};
	return (
		<>
			<span className=" w-full flex items-center justify-center">
				<h1
					className="text-4xl font-extrabold text-center m-4 
                                border-b-2 border-black p-4 w-96">
					Popular
				</h1>
			</span>
			<div className="gallary mx-auto shadow-sm p-8">
				<span
					onClick={() => slideLeft()}
					className="absolute cursor-pointer top-1/2 left-4 text-3xl">
					<FaArrowCircleLeft />
				</span>
				<div className="flex items-center gap-x-4 justify-evenly">
					<div className="card">{true && gallary[index]}</div>
					<div className="card">{true && gallary[index + 1]}</div>
					<div className="card">{true && gallary[index + 2]}</div>
				</div>
				<span
					onClick={() => slideRight()}
					className="absolute cursor-pointer top-1/2 right-4 text-3xl">
					<FaArrowCircleRight />
				</span>
			</div>
			<div className="mobile-gallary p-6">
				<span
					onClick={() => slideLeft()}
					className="absolute cursor-pointer top-1/2 left-4 text-3xl">
					<FaArrowCircleLeft />
				</span>
				<div className="flex items-center justify-evenly">
					<div className="card">{true && gallary[index]}</div>
				</div>
				<span
					onClick={() => slideRight()}
					className="absolute cursor-pointer top-1/2 right-4 text-3xl">
					<FaArrowCircleRight />
				</span>
			</div>
			<div className="ipad-gallary">
			<span
					onClick={() => slideLeft()}
					className="absolute cursor-pointer top-1/2 left-4 text-3xl">
					<FaArrowCircleLeft />
				</span>
				<div className="flex items-center justify-evenly">
					<div className="card">{true && gallary[index]}</div>
					<div className="card">{true && gallary[index+1]}</div>
				</div>
				<span
					onClick={() => slideRight()}
					className="absolute cursor-pointer top-1/2 right-4 text-3xl">
					<FaArrowCircleRight />
				</span>
			</div>
		</>
	);
};

export default PopularGallary;
