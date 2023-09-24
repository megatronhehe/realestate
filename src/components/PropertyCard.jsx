import React from "react";

import {
	FaLocationDot,
	FaSquare,
	FaHouse,
	FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
	const { id, location, type, images, price } = property;

	const displayIcon = type === "House" ? <FaHouse /> : <FaSquare />;

	return (
		<li className="relative flex flex-col justify-between flex-shrink-0 w-5/6 h-56 overflow-hidden bg-gray-100 sm:w-full snap-center rounded-xl sm:h-80 ">
			<img
				src={`../${images[0]}`}
				className="absolute top-0 left-0 object-cover w-full h-full "
			/>

			<div className="z-20 flex flex-col justify-between h-full p-3 text-white duration-200 bg-black bg-opacity-40 hover:bg-opacity-0">
				<Link to={`/properties/${id}`} className="flex justify-end w-full">
					<span className="flex items-center gap-2 px-3 py-1 text-sm font-normal text-white duration-200 bg-orange-400 rounded-xl hover:scale-110">
						View {type}
						<FaArrowUpRightFromSquare />
					</span>
				</Link>

				<div className="w-full">
					<h2 className="mb-1 text-2xl font-semibold tracking-wide drop-shadow-lg">
						{location.city}
					</h2>
					<div className="flex items-center justify-between w-full gap-2 text-sm tracking-wide text-gray-400">
						<div className="flex items-center justify-between gap-2">
							<div className="flex items-center justify-center w-5 h-5 text-gray-100 bg-white rounded-full">
								<FaLocationDot className="text-orange-300" />
							</div>
							<span className="text-gray-200">{location.province}</span>
						</div>
						<div className="flex items-center self-end gap-1 px-2.5 bg-opacity-60 bg-black text-gray-200 py-0.5 text-sm rounded-full bottom">
							{type}
							{displayIcon}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default PropertyCard;
