import Footer from "../components/footer";
import Landing from "../components/landing";
import NewCollection from "../components/newCollection";
import PopularGallary from "../components/popularGallary/popularGallary";
import SpecialOffer from "../components/specialOffer";

const Index = () => {
	return (
		<>
			<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
				<Landing />
				<PopularGallary />
				<SpecialOffer />
				<NewCollection />
				<Footer />
			</section>
		</>
	);
};

export default Index;
