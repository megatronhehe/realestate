import React, { useContext, useEffect } from "react";

import PropertiesContext from "../../../context/propertiesContext";

import PropertyCard from "../../../components/PropertyCard";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";
import MoreCard from "./MoreCard";
import { useResponsive } from "../../../hooks/useResponsive";

const Featured = () => {
	const { isMobileMode } = useResponsive();

	const { properties } = useContext(PropertiesContext);

	const first3properties = properties.slice(0, 3);

	const propertiesElement = first3properties.map((property) => (
		<PropertyCard key={property.id} property={property} />
	));

	return (
		<section className="flex justify-center mt-20">
			<div className="flex flex-col w-full max-w-4xl gap-6 p-6 text-gray-600 bg-white">
				<div className="flex flex-col gap-6">
					<h1 className="text-3xl font-semibold tracking-wide">
						<span className="font-bold text-orange-400">Featured</span>{" "}
						Properties
					</h1>
					<p className="text-sm">
						Discover handpicked city properties for your lifestyle and
						investments. Find prime locations, luxury living, and investment
						opportunities. Here are some of our featured properties.
					</p>
				</div>

				<ul className="relative flex items-center gap-4 overflow-auto sm:grid sm:grid-cols-3 snap-mandatory snap-x">
					{propertiesElement}
					{isMobileMode && <MoreCard />}
				</ul>

				<Link
					to="/properties"
					className="flex items-center self-center gap-2 px-3 py-1 text-orange-400 duration-200 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-white hover:scale-110"
				>
					view all <FaAngleRight />
				</Link>
			</div>
		</section>
	);
};

export default Featured;
