import React, { useContext } from "react";

import PropertiesContext from "../../context/propertiesContext";

import { FaCircleNotch } from "react-icons/fa6";

const Numbers = () => {
	const { properties, isLoading, error } = useContext(PropertiesContext);

	const propertiesCount = properties.length;

	const provincesCount = [
		...new Set(
			properties.map((property) => property.location.province.toLowerCase())
		),
	].length;

	const citiesCount = [
		...new Set(
			properties.map((property) => property.location.city.toLowerCase())
		),
	].length;

	return (
		<section className="flex justify-center py-2 text-white bg-gradient-to-r from-gray-700 to-gray-900">
			<ul className="flex flex-col justify-between w-full max-w-4xl gap-4 p-4 text-xl font-semibold rounded-full sm:bg-gray-800 sm:flex-row sm:gap-0 ">
				<li className="flex flex-col items-center duration-200 sm:w-1/3 hover:scale-110">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full">
						{propertiesCount}
					</h2>
					<span>Properties</span>
					<p className="text-sm text-center font-extralight">
						we have {propertiesCount} properties listed
					</p>
				</li>
				<li className="flex flex-col items-center py-4 duration-200 border-gray-500 border-y sm:w-1/3 sm:py-0 sm:border-x sm:border-none hover:scale-110">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full">
						{citiesCount}
					</h2>
					<span>Big cities</span>
					<p className="text-sm text-center font-extralight">
						our properties located in {citiesCount} big cities in indonesia
					</p>
				</li>
				<li className="flex flex-col items-center duration-200 sm:w-1/3 hover:scale-110 ">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full ">
						{provincesCount}
					</h2>
					<span>Big provinces</span>
					<p className="text-sm text-center font-extralight">
						our properties located in {provincesCount} big provinces in
						indonesia
					</p>
				</li>
			</ul>
		</section>
	);
};

export default Numbers;
