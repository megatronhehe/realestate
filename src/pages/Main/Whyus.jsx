import React from "react";

import {
	FaRegThumbsUp,
	FaRegHandshake,
	FaScaleBalanced,
	FaHeart,
} from "react-icons/fa6";

const Whyus = () => {
	return (
		<section className="flex justify-center text-white bg-gradient-to-r from-orange-400 to-orange-200 sm:mt-20">
			<div className="flex flex-col justify-between w-full max-w-4xl gap-6 p-6 font-semibold">
				<h1 className="text-2xl text-center">Why us?</h1>
				<ul className="flex flex-col gap-4 text-gray-600 sm:flex-row">
					<li className="flex flex-col items-center justify-center gap-2 p-4 bg-white sm:w-1/3 rounded-xl">
						<FaScaleBalanced className="w-12 h-12 p-2 text-white bg-orange-300 rounded-full" />
						<h2>Legal</h2>
						<p className="text-center font-extralight">
							We operate within the bounds of the law, adhering to all relevant
							regulations and guidelines.
						</p>
					</li>
					<li className="flex flex-col items-center justify-center gap-2 p-4 bg-white sm:w-1/3 rounded-xl">
						<FaRegHandshake className="w-12 h-12 p-2 text-white bg-orange-300 rounded-full" />
						<h2>Peer to peer</h2>
						<p className="text-center font-extralight">
							We operate within the bounds of the law, adhering to all relevant
							regulations and guidelines.
						</p>
					</li>
					<li className="flex flex-col items-center justify-center gap-2 p-4 bg-white sm:w-1/3 rounded-xl">
						<FaHeart className="w-12 h-12 p-2 text-white bg-orange-300 rounded-full" />
						<h2>Trusted</h2>
						<p className="text-center font-extralight">
							We operate within the bounds of the law, adhering to all relevant
							regulations and guidelines.
						</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Whyus;
