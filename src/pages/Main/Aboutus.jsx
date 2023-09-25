import React from "react";

import {
	FaInstagram,
	FaWhatsapp,
	FaTiktok,
	FaCircleUser,
} from "react-icons/fa6";

const Aboutus = () => {
	return (
		<section className="flex justify-center ">
			<div className="flex flex-col w-full max-w-xs gap-6 p-6 mt-20 border shadow-md sm:max-w-xl rounded-xl">
				<FaCircleUser className="self-center text-5xl" />
				<h1 className="text-3xl font-semibold text-center">
					<span className="text-orange-400">About</span> us
				</h1>
				<p className="text-sm text-center">
					we are a private property business that provide affordable properties
					spread across big cities and big provinces around Indonesia. We are
					legal, trusted, and we operate by peer to peer.
				</p>
				<ul className="flex justify-center gap-4 text-3xl text-gray-600">
					<li>
						<FaInstagram />
					</li>
					<li>
						<FaWhatsapp />
					</li>
					<li>
						<FaTiktok />
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Aboutus;
