import all_product from "../assets/all_product";
import Footer from "../components/footer";
import List from "../model/List";

const Kids = () => {
	const kidProducts = all_product.filter((item) => item.category === "kid");
	return (
		<div>
			<section className=" container relative left-1/2  -translate-x-1/2 sm:px-8">
				<h1 className="text-4xl uppercase font-bold text-center mb-8">
					Here You can find kids products
				</h1>
				<List products={kidProducts} />
			</section>
			<Footer />
		</div>
	);
}

export default Kids