import React from "react";

import heroImage from "../../assets/heroImage.jpg";

import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

const Hero = () => {
	return (
		<header className="h-screen text-gray-100 sm:h-96">
			<div className="relative h-full ">
				<img
					src={heroImage}
					alt="Background Image"
					className="absolute top-0 left-0 object-cover w-full h-full"
				/>
				<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-8 p-6 duration-200 bg-black bg-opacity-70 hover:bg-opacity-50">
					<h1 className="text-4xl">
						<span className="font-semibold">Invest</span> in your{" "}
						<span className="font-semibold">Tomorrow</span>
					</h1>
					<p>Affordable Personal Properties Options Today!</p>
					<p className="text-center sm:w-2/3">
						Here you can discover our humble listing of property such as houses
						and lands spread across Indonesia
					</p>
					<button className="px-5 py-2 text-sm font-semibold duration-200 bg-orange-400 rounded-full hover:scale-110">
						our listing
					</button>
				</div>

				<ul className="absolute flex gap-4 text-3xl text-gray-400 bottom-4 right-4">
					<li className="duration-200 hover:text-white hover:scale-110">
						<FaInstagram />
					</li>
					<li className="duration-200 hover:text-white hover:scale-110">
						<FaWhatsapp />
					</li>
					<li className="duration-200 hover:text-white hover:scale-110">
						<FaTiktok />
					</li>
				</ul>
			</div>
		</header>
	);
};

export default Hero;
