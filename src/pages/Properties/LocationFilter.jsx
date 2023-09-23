import React from "react";

const LocationFilter = ({ setFilter, filter }) => {
	return (
		<ul className="flex gap-2 overflow-auto text-sm">
			<li
				onClick={() => setFilter((prev) => ({ ...prev, province: "" }))}
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 rounded-full hover:bg-orange-300 hover:text-white
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
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
        hover:bg-orange-300 hover:text-white
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
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
        hover:bg-orange-300 hover:text-white
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
				onClick={() => setFilter((prev) => ({ ...prev, province: "Bali" }))}
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full
        hover:bg-orange-300 hover:text-white
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
	);
};

export default LocationFilter;
