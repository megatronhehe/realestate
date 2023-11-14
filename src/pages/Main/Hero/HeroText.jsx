import React from "react";

import { Link } from "react-router-dom";

import { FaArrowRightLong, FaDiamond } from "react-icons/fa6";

export default function HeroText() {
	return (
		<div className="absolute z-10 flex flex-col justify-center h-full gap-8 p-6 text-white bg-black sm:justify-normal sm:bg-white sm:w-3/5 sm:text-gray-600 backdrop-blur-sm sm:static bg-opacity-40">
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
				Here you can discover our humble listing of property scuh as houses and
				lands spread across Indonesia
			</p>

			<div className="flex gap-2">
				<Link
					to="/properties"
					className="flex items-center justify-center w-32 gap-2 px-4 py-2 text-white bg-orange-400 rounded-xl"
				>
					Our listing <FaArrowRightLong />
				</Link>
				<button className="flex items-center justify-center w-32 gap-2 px-4 py-2 text-white bg-gray-700 rounded-xl">
					Contact us
				</button>
			</div>
		</div>
	);
}
