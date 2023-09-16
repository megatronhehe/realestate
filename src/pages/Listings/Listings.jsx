import React, { useContext, useState, useEffect } from "react";

import PropertiesContext from "../../context/propertiesContext";

import PropertyCard from "./PropertyCard";
import LocationFilter from "./LocationFIlter";
import TypeFilter from "./TypeFilter";

const Listings = ({ curSectionIndicator, setCurSectionIndicator }) => {
	const { properties, isLoading } = useContext(PropertiesContext);

	const [filter, setFilter] = useState({
		province: "",
		type: "",
	});

	useEffect(() => {
		setCurSectionIndicator("");
	}, [curSectionIndicator]);

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
		<div className="flex flex-col w-full h-full max-w-4xl gap-6 p-6 pt-24 text-gray-600 bg-white">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold">Find your opportunity</h1>
				<span>Find the property that fits you in our listings</span>
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
				<ul className="flex gap-4 overflow-auto sm:grid sm:grid-cols-3">
					{isLoading.fetching ? "loading..." : propertiesCardElement}
				</ul>
			</div>
		</div>
	);
};

export default Listings;
