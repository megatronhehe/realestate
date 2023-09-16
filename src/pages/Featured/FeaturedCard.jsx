import React, { useState } from "react";

import { FaLocationDot, FaSquare, FaHouse } from "react-icons/fa6";

import heroImage from "../../assets/heroImage.jpg";

import { Link } from "react-router-dom";

const FeaturedCard = ({ property }) => {
	const { id, location, type, images, price } = property;

	const [isHover, setIsHover] = useState(false);

	const displayIcon = type === "House" ? <FaHouse /> : <FaSquare />;

	return (
		<li
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			className="relative flex flex-col justify-between flex-shrink-0 w-full h-56 overflow-hidden bg-gray-100 snap-center sm:w-full rounded-xl"
		>
			<img
				src={heroImage}
				className="absolute top-0 left-0 object-cover h-full"
			/>

			<div
				className={`z-20 flex h-full p-3 duration-200 text-white bg-opacity-60 flex-col justify-end ${
					isHover ? "bg-black" : "bg-none"
				}`}
			>
				{isHover && (
					<div className="flex flex-col items-center h-full">
						<h3>starting</h3>
						<span className="font-semibold">Rp.{price},-</span>
						<Link
							to={`/property/${id}`}
							className="flex justify-center w-full mt-12 duration-200 hover:font-semibold"
						>
							view property
						</Link>
					</div>
				)}

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
						<div className="flex items-center self-end gap-2 text-sm text-gray-200 bottom">
							{type}
							{displayIcon}
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};

export default FeaturedCard;
