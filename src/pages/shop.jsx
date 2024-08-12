import Footer from "../components/footer";
import Landing from "../components/landing";
import NewCollection from "../components/newCollection";
import PopularGallary from "../components/popularGallary";
import SpecialOffer from "../components/specialOffer";

const Shop = () => {
	return (
		<>
			<Landing />
			<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
					<PopularGallary />
					<SpecialOffer />
					<NewCollection />
					<Footer />
			</section>
		</>
	);
};

export default Shop;
