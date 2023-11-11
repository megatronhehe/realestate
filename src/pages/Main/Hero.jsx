import React from "react";

import heroImage from "../../assets/heroImage.jpg";
import balikpapan from "../../assets/balikpapan.jpg";
import surabaya from "../../assets/surabaya.jpg";
import malang from "../../assets/malang.jpg";
import bontang from "../../assets/bontang.jpg";
import bali from "../../assets/bali.jpg";

import { FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa6";

import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<header className="flex items-center justify-center h-screen text-gray-100">
			<div className="w-full max-w-4xl p-0 sm:p-6">
				<div className="flex items-center gap-8 sm:relative">
					<div className="absolute p-8 text-white bg-black sm:bg-white sm:text-gray-800 backdrop-blur-sm sm:static bg-opacity-30">
						<h1 className="text-4xl">
							<span className="font-semibold">Invest</span> in your{" "}
							<span className="font-semibold text-orange-400">Tomorrow</span>
						</h1>

						<p className="mt-12">
							Affordable Personal Properties Options Today, Here you can
							discover our humble listing of property scuh as houses and lands
							spread across Indonesia
						</p>

						<button className="px-3 py-1 mt-12 text-white bg-orange-400 rounded-xl">
							Check our listing here
						</button>
					</div>

					<div className="flex items-center gap-3 p-4">
						<div className="flex flex-col w-1/3 gap-3">
							<div className="w-full h-44 ">
								<img
									src={heroImage}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
							<div className="w-full h-44 ">
								<img
									src={balikpapan}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
						</div>
						<div className="flex flex-col w-1/3 gap-3">
							<div className="w-full h-44 ">
								<img
									src={surabaya}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
							<div className="w-full h-44 ">
								<img
									src={malang}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
							<div className="w-full h-44 ">
								<img
									src={bontang}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
						</div>
						<div className="flex flex-col w-1/3 gap-3">
							<div className="w-full h-44 ">
								<img
									src={bali}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
							<div className="w-full h-44 ">
								<img
									src={heroImage}
									alt="hero-image"
									className="object-cover h-full rounded-xl"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="absolute flex justify-center w-full h-full text-gray-700 duration-200 group hover:backdrop-blur-sm">
				<h1 className="mt-12 text-2xl duration-500 group-hover:mt-40 group-hover:text-3xl group-hover:text-white">
					Invest in your{" "}
					<span className="font-semibold text-orange-400">Tomorrow</span>
				</h1>
			</div> */}
		</header>
	);
};

export default Hero;
