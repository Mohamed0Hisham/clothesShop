import exclusive from "../Assets/exclusive_image.png";
const SpecialOffer = () => {
	return (
		<div className="grid grid-cols-2 sm:h-fit my-24 mx-auto h-full w-fit bg-gradient-to-b from-light-pink to-light-green p-9 rounded-lg shadow-md">
			<div className=" ">
				<h1 className=" text-4xl mb-24">Exclusive</h1>
				<p className=" sm:text-4xl font-bold">
					Offers For You
					<br />
					ONLY ON BEST SELLERS PRODUCTS
				</p>
			</div>
			<div>
				<img src={exclusive} alt="heroImg" />
			</div>
			<button className="text-white bg-light-red p-4 rounded-3xl w-32">
				Check Now
			</button>
		</div>
	);
};

export default SpecialOffer;
