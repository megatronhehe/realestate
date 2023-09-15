import React from "react";

import {
	FaRegThumbsUp,
	FaRegHandshake,
	FaScaleBalanced,
	FaHeart,
} from "react-icons/fa6";

const Whyus = () => {
	return (
		<div className="flex items-center justify-center h-full p-6 text-gray-600 bg-orange-400 ">
			<div className="flex flex-col items-center w-full max-w-4xl gap-4">
				<h1 className="text-2xl font-semibold text-white sm:mb-8">Why us?</h1>
				<ul className="flex flex-col w-full gap-4 sm:grid sm:grid-cols-2 sm:gap-8">
					<li className="flex items-center justify-between w-full gap-2 p-4 bg-white rounded-xl">
						<div className="flex flex-col items-center w-1/4 gap-2">
							<FaRegThumbsUp className="w-12 h-12 p-2 text-white bg-blue-300 rounded-full" />
							<h2 className="font-semibold">Reliable</h2>
						</div>
						<p className="w-full p-2 text-sm text-center">
							We pride ourselves on delivering consistent and dependable
							solutions to our clients.
						</p>
					</li>

					<li className="flex items-center justify-between w-full gap-2 p-4 bg-white rounded-xl">
						<div className="flex flex-col items-center w-1/4 gap-2">
							<FaRegHandshake className="w-12 h-12 p-2 text-white bg-green-300 rounded-full" />
							<h2 className="font-semibold">P2P</h2>
						</div>
						<p className="w-full p-2 text-sm text-center">
							Our peer-to-peer approach fosters trust and allows for
							personalized interactions between parties.
						</p>
					</li>

					<li className="flex items-center justify-between w-full gap-2 p-4 bg-white rounded-xl">
						<div className="flex flex-col items-center w-1/4 gap-2">
							<FaScaleBalanced className="w-12 h-12 p-2 text-white bg-purple-300 rounded-full" />
							<h2 className="font-semibold">Legal</h2>
						</div>
						<p className="w-full p-2 text-sm text-center">
							We operate within the bounds of the law, adhering to all relevant
							regulations and guidelines.
						</p>
					</li>

					<li className="flex items-center justify-between w-full gap-2 p-4 bg-white rounded-xl">
						<div className="flex flex-col items-center w-1/4 gap-2">
							<FaHeart className="w-12 h-12 p-2 text-white bg-red-300 rounded-full" />
							<h2 className="font-semibold">Trusted</h2>
						</div>
						<p className="w-full p-2 text-sm text-center">
							we operate in transparent processes, honest communication, and
							ethical practices.
						</p>
					</li>
				</ul>
			</div>
		</div>
	);
};

// <h2>Peer to peer</h2>
// 					<h2>Legal</h2>
// 					<h2>Trusted</h2>

export default Whyus;
