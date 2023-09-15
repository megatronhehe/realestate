import React, { useContext, useState } from "react";

import PropertiesContext from "../../context/propertiesContext";

import PropertyCard from "./PropertyCard";

const Listings = () => {
	const { properties, isPropertiesExist, isLoading } =
		useContext(PropertiesContext);

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
		<div className="flex flex-col w-full h-full max-w-4xl gap-6 p-6 pt-20 text-gray-600 bg-white">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold">Find your opportunity</h1>
				<span>Find the property that fits you in our listings</span>
			</div>

			<div className="flex flex-col justify-between gap-6 sm:flex-row">
				<div className="flex flex-col gap-2">
					<h2>Location available:</h2>
					<ul className="flex gap-2 overflow-auto text-sm">
						<li
							onClick={() => setFilter((prev) => ({ ...prev, province: "" }))}
							className={`flex-shrink-0 px-4 py-1  rounded-full
							${
								filter.province === ""
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							all
						</li>

						<li
							onClick={() =>
								setFilter((prev) => ({ ...prev, province: "East Java" }))
							}
							className={`flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
							${
								filter.province === "East Java"
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							East Java
						</li>

						<li
							onClick={() =>
								setFilter((prev) => ({ ...prev, province: "East Borneo" }))
							}
							className={`flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
							${
								filter.province === "East Borneo"
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							East Borneo
						</li>

						<li
							onClick={() =>
								setFilter((prev) => ({ ...prev, province: "Bali" }))
							}
							className={`flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
							${
								filter.province === "Bali"
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							Bali
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<h2>Types available:</h2>
					<ul className="flex gap-2 overflow-auto text-sm">
						<li
							onClick={() => setFilter((prev) => ({ ...prev, type: "" }))}
							className={`flex-shrink-0 px-4 py-1 rounded-full
							${filter.type === "" ? "text-white bg-orange-400" : "bg-gray-100 text-gray-600"}
							`}
						>
							all
						</li>
						<li
							onClick={() => setFilter((prev) => ({ ...prev, type: "House" }))}
							className={`flex-shrink-0 px-4 py-1 rounded-full
							${
								filter.type === "House"
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							House
						</li>
						<li
							onClick={() => setFilter((prev) => ({ ...prev, type: "Land" }))}
							className={`flex-shrink-0 px-4 py-1 rounded-full
							${
								filter.type === "Land"
									? "text-white bg-orange-400"
									: "bg-gray-100 text-gray-600"
							}
							`}
						>
							Land
						</li>
					</ul>
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
