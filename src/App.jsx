import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Shop from "./pages/shop";
import Index from "./pages/Index";
import Men from "./pages/men";
import Women from "./pages/women";
import Kids from "./pages/kids";
import Cart from "./pages/cart";

function App() {
	return (
		<>
			<MainHeader />
			<main className="">
				<Routes>
					<Route index element={<Index />}></Route>
					<Route path="/shop" element={<Shop />}></Route>
					<Route path="/men" element={<Men />}></Route>
					<Route path="/women" element={<Women />}></Route>
					<Route path="/kids" element={<Kids />}></Route>
					<Route path="/cart" element={<Cart />}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
