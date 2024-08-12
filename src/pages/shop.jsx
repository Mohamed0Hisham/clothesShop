import Landing from "../components/landing";
import PopularGallary from "../components/popularGallary";

const Shop = () => {
	return (
		<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
			<Landing />
			<section>
				<h1>Popular</h1>
				<PopularGallary />
			</section>
		</section>
	);
};

export default Shop;
