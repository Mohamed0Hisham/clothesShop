import List from "../model/List";
import new_collections from "./../Assets/new_collections";

const NewCollection = () => {
	return (
		<div>
			<h1 className="relative text-center text-4xl font-bold mb-12 uppercase">
				New Collections
				<hr className="absolute left-1/2 -translate-x-1/2 w-96 text-black mt-4" />
			</h1>
			<div>
				<List products={new_collections} />
			</div>
		</div>
	);
};

export default NewCollection;
