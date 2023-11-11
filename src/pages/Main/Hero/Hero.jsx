import React from "react";
import HeroImages from "./HeroImages";

import { Link } from "react-router-dom";

import { FaArrowRightLong, FaDiamond } from "react-icons/fa6";

const Hero = () => {
	return (
		<header className="flex items-center justify-center h-screen text-gray-100">
			<div className="w-full max-w-4xl p-0 sm:-mt-20 sm:p-6">
				<div className="flex items-center gap-8 sm:relative">
					<div className="absolute z-10 flex flex-col h-full gap-8 p-6 text-white bg-black sm:bg-white sm:text-gray-600 backdrop-blur-sm sm:static bg-opacity-40">
						<FaDiamond className="text-4xl text-orange-400 animate-pulse" />
						<h1 className="pb-8 text-4xl border-b">
							<span className="font-semibold">Invest</span> in your{" "}
							<span className="font-semibold text-orange-400">Tomorrow</span>
						</h1>

						<p className="font-normal">
							{"- "}
							<span className="font-bold">Affordable</span> Personal Properties
							Options <span className="font-bold text-orange-400">Today!</span>
						</p>

						<p>
							Here you can discover our humble listing of property scuh as
							houses and lands spread across Indonesia
						</p>

						<Link
							to="/properties"
							className="flex items-center justify-center w-32 gap-2 px-4 py-2 text-white bg-orange-400 rounded-xl"
						>
							our listing <FaArrowRightLong />
						</Link>
					</div>

					<HeroImages />
				</div>
			</div>
		</header>
	);
};

export default Hero;
