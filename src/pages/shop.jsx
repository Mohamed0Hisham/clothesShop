import List from "../model/List";
import all_products from "../assets/all_product";
import Footer from "../components/footer";
const Shop = () => {
	return (
		<>
			<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
				<h1 className="text-4xl uppercase font-bold text-center mb-8">Here You can find all products</h1>
				<List products = {all_products} />
			</section>
			<Footer />
		</>
	);
};

export default Shop;
