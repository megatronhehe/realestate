import React, { useContext } from "react";

import PropertiesContext from "../../context/propertiesContext";

import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

import { FaEarthAsia, FaLocationDot, FaHouse } from "react-icons/fa6";

const Featured = () => {
	const { properties } = useContext(PropertiesContext);

	const propertiesElement = properties.map((property) => (
		<FeaturedCard key={property.id} property={property} />
	));

	return (
		<div className="flex flex-col w-full h-full max-w-4xl gap-6 p-6 pt-24 text-gray-600 bg-white">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold">Featured Listing</h1>
				<span>Find the property that fits you in our listings</span>
			</div>

			<ul className="flex gap-4">
				<li className="flex flex-col justify-between w-1/3 p-4 text-white bg-orange-400 sm:w-1/6 rounded-xl">
					<span className="flex items-center gap-4 text-2xl font-bold ">
						<FaHouse />4
					</span>
					<h2 className="text-sm">Properties Listed</h2>
				</li>

				<li className="flex flex-col justify-between w-1/3 p-4 text-white bg-gray-600 sm:w-1/5 rounded-xl">
					<span className="flex items-center gap-4 text-2xl font-bold ">
						<FaEarthAsia />3
					</span>
					<h2 className="text-sm">Different Provinces</h2>
				</li>

				<li className="flex flex-col justify-between w-1/3 p-4 text-white bg-gray-800 sm:w-1/4 rounded-xl">
					<span className="flex items-center gap-4 text-2xl font-bold ">
						<FaLocationDot />4
					</span>
					<h2 className="text-sm">Different Cities</h2>
				</li>
			</ul>

			<ul className="flex gap-4 overflow-auto sm:gap-8 sm:grid sm:grid-cols-2 snap-mandatory snap-x">
				{propertiesElement}
			</ul>

			<Link
				to="/properties"
				className="self-center px-4 py-2 text-white bg-orange-400 rounded-xl"
			>
				view all
			</Link>
		</div>
	);
};

export default Featured;
