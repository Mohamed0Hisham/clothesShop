import all_product from "../assets/all_product";
import Footer from "../components/footer";
import List from "../model/List";
const Men = () => {
	const menProducts = all_product.filter((item) => item.category === "men");
	return (
		<div>
			<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
				<h1 className="text-4xl uppercase font-bold text-center mb-8">
					Here You can find Men products
				</h1>
				<List products={menProducts} />
			</section>
			<Footer />
		</div>
	);
};

export default Men;
