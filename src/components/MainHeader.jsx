import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { BsCart } from "react-icons/bs";
const MainHeader = () => {
	return (
		<header className="flex items-center justify-between h-48">
			<h1 className="flex items-center justify-between gap-4 text-4xl font-bold">
				<span>
					<img src={logo} alt="logo" />
				</span>
				<span>SHOPPER</span>
			</h1>
			<ul className="flex items-center justify-between gap-6 text-lg">
				<li>
					<Link to="/shop">Shop</Link>
				</li>
				<li>
					<Link to="/men">Men</Link>
				</li>
				<li>
					<Link to="/women">Women</Link>
				</li>
				<li>
					<Link to="/kids">Kids</Link>
				</li>
			</ul>
			<div className="flex items-center justify-between gap-4 ">
				<button className=" text-lg border-black shadow-md border-solid border rounded-3xl px-8 py-4">Login</button>
				<BsCart className="font-bold text-3xl"/>
			</div>
		</header>
	);
};

export default MainHeader;
