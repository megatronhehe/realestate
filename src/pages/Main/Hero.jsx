import React from "react";

import heroImage from "../../assets/heroImage.jpg";

import { useResponsive } from "../../hooks/useResponsive";

const Hero = () => {
	const { isMobileMode } = useResponsive();

	return (
		<section className="h-screen text-gray-100 sm:h-96">
			<div className="relative h-full ">
				<img
					src={heroImage}
					alt="Background Image"
					className="absolute top-0 left-0 object-cover w-full h-full"
				/>
				<div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-8 p-6 duration-200 bg-black bg-opacity-50 hover:bg-opacity-70">
					<h1 className="text-4xl">
						<span className="font-semibold">Invest</span> in your{" "}
						<span className="font-semibold">Tomorrow</span>
					</h1>
					<p>Affordable Personal Properties Options Today!</p>
					<p className="text-center sm:w-2/3">
						Here you can discover our humble listing of property such as houses
						and lands spread across Indonesia
					</p>
					<button className="px-4 py-1 font-semibold bg-orange-400 rounded-full">
						our listing
					</button>
				</div>
			</div>
		</section>
	);
};

{
	/* <div ref={ref} className="h-full">
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
			</div>
		</div> */
}

export default Hero;
