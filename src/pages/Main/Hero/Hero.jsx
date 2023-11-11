import React from "react";
import HeroImages from "./HeroImages";

const Hero = () => {
	return (
		<header className="flex items-center justify-center h-screen text-gray-100">
			<div className="w-full max-w-4xl p-0 sm:p-6">
				<div className="flex items-center gap-8 sm:relative">
					<div className="absolute z-10 p-6 text-white bg-black sm:bg-white sm:text-gray-800 backdrop-blur-sm sm:static bg-opacity-60">
						<h1 className="text-4xl">
							<span className="font-semibold">Invest</span> in your{" "}
							<span className="font-semibold text-orange-400">Tomorrow</span>
						</h1>

						<p className="mt-8">
							Affordable Personal Properties Options Today, Here you can
							discover our humble listing of property scuh as houses and lands
							spread across Indonesia
						</p>

						<button className="px-3 py-1 mt-8 text-white bg-orange-400 rounded-xl">
							Check our listing here
						</button>
					</div>

					<HeroImages />
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
