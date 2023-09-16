import React, { useEffect } from "react";

import heroImage from "../../assets/heroImage.jpg";

import { useInView } from "react-intersection-observer";

const Hero = ({ setCurSectionIndicator }) => {
	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			setCurSectionIndicator("home");
		}
	}, [inView]);

	return (
		<div ref={ref} className="h-full">
			<img src={heroImage} className="object-cover h-full" />
			<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full p-6 bg-black bg-opacity-60">
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

				<ul className="flex gap-8 px-4 mt-20 bg-black rounded-full backdrop-filter backdrop-blur-sm bg-opacity-40">
					<li className="px-3 py-3 font-normal border-black ">Listing</li>
					<li className="px-3 py-3 font-normal rounded-full">About</li>
					<li className="px-3 py-3 font-normal rounded-full">Contact</li>
				</ul>
			</div>
		</div>
	);
};

export default Hero;
