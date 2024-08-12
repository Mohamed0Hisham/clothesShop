import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsCart } from "react-icons/bs";
import { useState } from "react";
const MainHeader = () => {
	const [page, setPage] = useState("");
	return (
		<header className="flex flex-wrap items-center sm:justify-between justify-center
		sm:h-48 sm:px-20 py-4 gap-4">
			<Link to='/' className="flex items-center justify-between gap-4 text-4xl font-bold">
				<span>
					<img src={logo} alt="logo" />
				</span>
				<span>SHOPPER</span>
			</Link>
			<ul className="flex  items-center justify-between gap-9 text-2xl ">
				<li
					className={
						page === "shop" ? 
						"border-b-2 border-light-red" :
						" "
					} >
					<Link to="/shop" onClick={() => setPage("shop")}>
						Shop
					</Link>
				</li>
				<li
					className={
						page === "men" ? "border-b-2 border-light-red" : " "
					}>
					<Link to="/men" onClick={() => setPage("men")}>
						Men
					</Link>
				</li>
				<li
					className={
						page === "women" ? "border-b-2 border-light-red" : " "
					}>
					<Link to="/women" onClick={() => setPage("women")}>
						Women
					</Link>
				</li>
				<li
					className={
						page === "kids" ? "border-b-2 border-light-red" : " "
					}>
					<Link to="/kids" onClick={() => setPage("kids")}>
						Kids
					</Link>
				</li>
			</ul>
			<div className="flex items-center justify-between gap-4 ">
				<button className=" text-lg border-black shadow-md border-solid border rounded-3xl px-8 py-4">
					Login
				</button>
				<BsCart className="font-bold text-3xl" />
			</div>
		</header>
	);
};

export default MainHeader;
