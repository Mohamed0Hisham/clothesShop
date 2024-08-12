import logo from "../assets/logo.png";
const Footer = () => {
	return (
		<footer className="flex flex-col">
			<h1 className="flex items-center text-4xl font-bold justify-center gap-x-2 my-4">
				<span>
					<img src={logo} alt="logo" />
				</span>
				<span>SHOPPER</span>
			</h1>
            <ul className="flex items-center justify-center gap-x-24 text-xl my-4">
                <li><a href="">company</a></li>
                <li><a href="">Products</a></li>
                <li><a href="">offices</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <ul className=" flex items-center justify-center gap-x-12 text-xl">
                <li><a href="">whatsapp</a></li>
                <li><a href="">facebook</a></li>
                <li><a href="">X</a></li>
            </ul>
            <hr />
            <p className=" text-center text-xl font-bold my-4">Copyright 2024 - All Right Reserved to mohamed HISHAM</p>
		</footer>
	);
};

export default Footer;
