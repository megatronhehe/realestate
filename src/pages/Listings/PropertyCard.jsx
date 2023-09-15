import React from "react";

import { FaLocationDot, FaSquare, FaHouse } from "react-icons/fa6";

const PropertyCard = ({ property }) => {
	const { location, description, type, images } = property;

	const displayIcon = type === "House" ? <FaHouse /> : <FaSquare />;

	return (
		<li className="flex flex-col justify-between flex-shrink-0 w-56 h-64 p-3 bg-gray-100 sm:w-full rounded-xl">
			<div>
				<h2 className="text-2xl">{location.city}</h2>
				<span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
					<div className="flex items-center justify-center w-6 h-6 text-orange-300 bg-white rounded-full">
						<FaLocationDot />
					</div>
					{location.province}
				</span>
			</div>

			<div className="flex flex-col gap-2">
				<span className="flex items-center self-end gap-2 text-sm">
					{type}
					{displayIcon}
				</span>
				<button className="px-3 py-1 text-sm text-white bg-gray-600 rounded-xl">
					view property
				</button>
			</div>
		</li>
	);
};

export default PropertyCard;
