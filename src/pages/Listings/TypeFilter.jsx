import React from "react";

const TypeFilter = ({ setFilter, filter }) => {
	return (
		<ul className="flex gap-2 overflow-auto text-sm">
			<li
				onClick={() => setFilter((prev) => ({ ...prev, type: "" }))}
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 rounded-full
							hover:bg-orange-300 hover:text-white
							${filter.type === "" ? "text-white bg-orange-400" : "bg-gray-100 text-gray-600"}
							`}
			>
				all
			</li>
			<li
				onClick={() => setFilter((prev) => ({ ...prev, type: "House" }))}
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 rounded-full
							hover:bg-orange-300 hover:text-white
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
				className={`cursor-pointer duration-200 flex-shrink-0 px-4 py-1 rounded-full
							hover:bg-orange-300 hover:text-white
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
	);
};

export default TypeFilter;
