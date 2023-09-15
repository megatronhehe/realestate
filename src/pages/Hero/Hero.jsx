import React from "react";

import heroImage from "../../assets/heroImage.jpg";

const Hero = () => {
	return (
		<div className="h-full">
			<img src={heroImage} className="h-full object-cover" />
			<div className="absolute top-0 left-0 bg-black bg-opacity-60 h-full w-full flex items-center justify-center p-6">
				<div className="flex flex-col gap-4">
					<h2 className="text-4xl">Invest in Your Tomorrow</h2>
					<span className="text-lg">Affordable Land Options Today</span>
					<button className="bg-white px-4 py-1 text-gray-600 rounded-full w-32 font-semibold text-sm">
						our listings
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
