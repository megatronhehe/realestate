import React from "react";

import {
	FaRegThumbsUp,
	FaRegHandshake,
	FaScaleBalanced,
	FaHeart,
} from "react-icons/fa6";

const Whyus = () => {
	return (
		<div className="h-full text-gray-600 bg-gray-400  items-center justify-center flex flex-col gap-6 p-6">
			<h1 className="text-2xl text-white">Why us?</h1>
			<ul className="w-full flex flex-col gap-2">
				<li className="bg-white px-4 py-2 w-full  items-center flex gap-2 rounded-xl justify-between">
					<div className="flex flex-col w-1/4 items-center gap-2">
						<FaRegThumbsUp className="w-12 h-12 bg-gray-100 rounded-full p-2" />
						<h2 className="font-semibold">Reliable</h2>
					</div>
					<p className="text-sm text-center p-2 w-full">
						We pride ourselves on delivering consistent and dependable solutions
						to our clients.
					</p>
				</li>

				<li className="bg-white px-4 py-2 w-full  items-center flex gap-2 rounded-xl justify-between">
					<div className="flex flex-col w-1/4 items-center gap-2">
						<FaRegHandshake className="w-12 h-12 bg-gray-100 rounded-full p-2" />
						<h2 className="font-semibold">P2P</h2>
					</div>
					<p className="text-sm text-center p-2 w-full">
						Our peer-to-peer approach fosters trust and allows for personalized
						interactions between parties.
					</p>
				</li>

				<li className="bg-white px-4 py-2 w-full  items-center flex gap-2 rounded-xl justify-between">
					<div className="flex flex-col w-1/4 items-center gap-2">
						<FaScaleBalanced className="w-12 h-12 bg-gray-100 rounded-full p-2" />
						<h2 className="font-semibold">Legal</h2>
					</div>
					<p className="text-sm text-center p-2 w-full">
						We operate within the bounds of the law, adhering to all relevant
						regulations and guidelines.
					</p>
				</li>

				<li className="bg-white px-4 py-2 w-full  items-center flex gap-2 rounded-xl justify-between">
					<div className="flex flex-col w-1/4 items-center gap-2">
						<FaHeart className="w-12 h-12 bg-gray-100 rounded-full p-2" />
						<h2 className="font-semibold">Trusted</h2>
					</div>
					<p className="text-sm text-center p-2 w-full">
						we operate in transparent processes, honest communication, and
						ethical practices.
					</p>
				</li>
			</ul>
		</div>
	);
};

// <h2>Peer to peer</h2>
// 					<h2>Legal</h2>
// 					<h2>Trusted</h2>

export default Whyus;
