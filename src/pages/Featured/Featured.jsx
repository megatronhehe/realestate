import React, { useContext, useEffect } from "react";

import { useInView } from "react-intersection-observer";

import PropertiesContext from "../../context/propertiesContext";

import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";

import { FaAngleRight } from "react-icons/fa6";

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
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold tracking-wide">
					<span className="font-bold text-orange-400">Featured</span> Property
				</h1>
				<p>Find the property that fits you in our listings.</p>
			</div>

			<div className="flex justify-center">
				<ul className="flex w-full max-w-xl gap-2 sm:gap-6">
					<li className="relative flex flex-col items-center justify-center w-full p-4 text-white bg-orange-400 rounded-lg">
						<h2 className="absolute flex items-center justify-center w-10 h-10 font-bold text-orange-400 bg-white border-4 border-orange-400 rounded-full -top-5">
							4
						</h2>
						<span className="pt-4 text-center">
							<span className="font-semibold ">Properties</span> listed
						</span>
					</li>

					<li className="relative flex flex-col items-center justify-center w-full p-4 text-white bg-orange-400 rounded-lg">
						<h2 className="absolute flex items-center justify-center w-10 h-10 font-bold text-orange-400 bg-white border-4 border-orange-400 rounded-full -top-5">
							3
						</h2>
						<span className="pt-4 text-center">
							Different <span className="font-semibold ">Provinces</span>
						</span>
					</li>

					<li className="relative flex flex-col items-center justify-center w-full p-4 text-white bg-orange-400 rounded-lg">
						<h2 className="absolute flex items-center justify-center w-10 h-10 font-bold text-orange-400 bg-white border-4 border-orange-400 rounded-full -top-5">
							4
						</h2>
						<span className="pt-4 text-center">
							Different <span className="font-semibold ">Cities</span>
						</span>
					</li>
				</ul>
			</div>

			<ul className="flex gap-4 overflow-auto sm:gap-8 sm:grid sm:grid-cols-3 snap-mandatory snap-x">
				{propertiesElement}
			</ul>

			<Link
				to="/properties"
				className="flex items-center self-center gap-2 px-3 py-1 text-orange-400 duration-200 rounded-full hover:bg-orange-400 hover:text-white hover:scale-110"
			>
				view all <FaAngleRight />
			</Link>
		</div>
	);
};

export default Featured;
