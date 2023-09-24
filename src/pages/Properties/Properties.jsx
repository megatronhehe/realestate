import React, { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";

import PropertiesContext from "../../context/propertiesContext";

import LocationFilter from "./LocationFIlter";
import TypeFilter from "./TypeFilter";
import PropertyCard from "../../components/PropertyCard";

import { FaAngleLeft } from "react-icons/fa6";

const Properties = () => {
	const { properties, isLoading } = useContext(PropertiesContext);

	const nav = useNavigate();

	const [filter, setFilter] = useState({
		province: "",
		type: "",
	});

	const filteredProperties = properties.filter((property) => {
		const matchProvince =
			filter.province === "" || property.location.province === filter.province;
		const matchType = filter.type === "" || property.type === filter.type;

		return matchProvince && matchType;
	});

	const propertiesCardElement = filteredProperties.map((property) => (
		<PropertyCard key={property.id} property={property} />
	));

	return (
		<section className="flex justify-center">
			<div className="flex flex-col w-full h-full max-w-4xl gap-6 p-6 text-gray-600 bg-white">
				<button
					onClick={() => nav(-1)}
					className="flex items-center self-start justify-center w-8 h-8 text-sm text-gray-400 duration-200 border rounded-full hover:bg-orange-400 hover:text-white hover:border-orange-400"
				>
					<FaAngleLeft />
				</button>

				<div className="flex flex-col gap-2">
					<h1 className="text-3xl font-semibold">
						Find your{" "}
						<span className="font-bold text-orange-400">opportunity</span>
					</h1>
					<span>Find the property that fits you in our Properties</span>
				</div>

				<div className="flex flex-col justify-between gap-6 sm:flex-row">
					<div className="flex flex-col gap-2">
						<h2>Location available:</h2>
						<LocationFilter setFilter={setFilter} filter={filter} />
					</div>

					<div className="flex flex-col gap-2">
						<h2>Types available:</h2>
						<TypeFilter setFilter={setFilter} filter={filter} />
					</div>
				</div>

				<div>
					<ul className="flex gap-4 overflow-auto snap-mandatory snap-x sm:grid sm:grid-cols-3">
						{isLoading.fetching ? "loading..." : propertiesCardElement}
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Properties;
