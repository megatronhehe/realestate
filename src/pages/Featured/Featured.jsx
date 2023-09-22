import React, { useContext, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import PropertiesContext from "../../context/propertiesContext";

import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const Featured = ({ setCurSectionIndicator }) => {
	const { properties } = useContext(PropertiesContext);

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			setCurSectionIndicator("featured");
		}
	}, [inView]);

	const first3properties = properties.slice(0, 3);

	const propertiesElement = first3properties.map((property) => (
		<FeaturedCard key={property.id} property={property} />
	));

	return (
		<div
			ref={ref}
			className="flex flex-col w-full h-full max-w-4xl gap-8 p-6 pt-24 text-gray-600 bg-white"
		>
			<div className="flex flex-col gap-8">
				<h1 className="text-3xl font-semibold tracking-wide">
					<span className="font-bold text-orange-400">Featured</span> Property
				</h1>
				<p>
					Discover handpicked city properties for your lifestyle and
					investments. Find prime locations, luxury living, and investment
					opportunities. Here are some of our featured properties.
				</p>
			</div>

			<ul className="relative flex items-center gap-4 overflow-auto sm:gap-8 sm:grid sm:grid-cols-3 snap-mandatory snap-x">
				{propertiesElement}
			</ul>

			<Link
				to="/properties"
				className="flex items-center self-center gap-2 px-3 py-1 text-orange-400 duration-200 border border-orange-400 rounded-full hover:bg-orange-400 hover:text-white hover:scale-110"
			>
				view all <FaAngleRight />
			</Link>
		</div>
	);
};

export default Featured;
