import React from "react";

import heroImage from "../../assets/heroImage.jpg";

const Hero = () => {
	return (
		<div className="h-full">
			<img src={heroImage} className="object-cover h-full" />
			<div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-6 bg-black bg-opacity-60">
				<div className="flex flex-col gap-8 ">
					<h2 className="text-4xl">Invest in Your Tomorrow</h2>
					<span className="text-lg">Affordable Properties Options Today</span>

					<div className="flex flex-col self-end w-2/3 gap-8 p-4 border-l sm:w-2/5">
						<p className="text-justify ">
							Here you can discover our humble listing of property such as
							houses and lands spread across Indonesia
						</p>
						<button className="px-4 py-1 text-sm font-semibold text-gray-600 duration-200 bg-white rounded-full hover:bg-orange-400 hover:text-white">
							check our listing
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
