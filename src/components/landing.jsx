import handIcon from "../Assets/hand_icon.png";
import heroImg from "../Assets/hero_image.png";
import { FaLongArrowAltRight } from "react-icons/fa";
const Landing = () => {
	return (
		<div className="max-h-full h-fit w-full  bg-gradient-to-b from-light-pink to-light-green p-9 rounded-lg shadow-md">
			<h1 className=" text-4xl">NEW ARRIVALS ONLY</h1>
			<div className="grid grid-cols-2">
				<div className="flex flex-col justify-center items-center text-2xl">
					<p className=" sm:text-5xl font-bold">
						new
						<span>
							<img
								src={handIcon}
								alt="handIcon"
								className=" w-12 inline-block "
							/>
						</span>
					</p>
					<p className=" sm:text-5xl font-bold">
						collections for everyone
					</p>
				</div>
				<div>
					<img src={heroImg} alt="heroImg" />
				</div>
			</div>
			<button className="text-white bg-light-red p-4 rounded-3xl">
				See Latest Collections <FaLongArrowAltRight className="inline-block"/>
			</button>
		</div>
	);
};

export default Landing;
