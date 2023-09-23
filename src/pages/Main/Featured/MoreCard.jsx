import React from "react";

import { FaHouse, FaAngleRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

const MoreCard = () => {
	return (
		<Link
			to="/properties"
			className="relative flex flex-col items-center justify-center flex-shrink-0 w-5/6 h-56 overflow-hidden border sm:w-full snap-center rounded-xl sm:h-80 "
		>
			<li className="flex flex-col items-center ">
				<div className="flex items-center gap-2 text-orange-300">
					<FaHouse className="w-16 h-16 p-4 text-white bg-orange-300 rounded-full" />
					<FaAngleRight className="text-2xl" />
				</div>
				<h2 className="mt-4 text-gray-400">View all of our listings</h2>
			</li>
		</Link>
	);
};

export default MoreCard;
