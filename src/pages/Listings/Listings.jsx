import React from "react";

import { FaLocationDot, FaHouse, FaRegSquare } from "react-icons/fa6";

const Listings = () => {
	return (
		<div className="h-full p-6 bg-white text-gray-600 flex  flex-col justify-center gap-6">
			<div className="flex flex-col">
				<h1 className="font-semibold text-2xl">Find your opportunity</h1>
				<span>Find your perfect land on our listings</span>
			</div>

			<div className="flex flex-col gap-2">
				<h2>Location available:</h2>
				<ul className="flex gap-2 overflow-auto">
					<li className="bg-gray-100 px-4 py-1 rounded-full flex-shrink-0">
						all
					</li>
					<li className="bg-gray-100 px-4 py-1 rounded-full flex-shrink-0">
						East Java
					</li>
					<li className="bg-gray-100 px-4 py-1 rounded-full flex-shrink-0">
						East Borneo
					</li>
					<li className="bg-gray-100 px-4 py-1 rounded-full flex-shrink-0">
						Bali
					</li>
				</ul>
			</div>

			<div>
				<ul className="flex gap-4 overflow-auto">
					<li className="w-56 h-64 bg-gray-100 rounded-xl flex-shrink-0 p-3 flex flex-col justify-between">
						<div>
							<h2 className="text-2xl">Balikpapan</h2>
							<span className="flex items-center gap-2 text-sm">
								<FaLocationDot />
								East Borneo
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Land <FaRegSquare />
							</span>
							<button className="text-sm bg-gray-600 text-white py-1 rounded-xl px-3">
								view property
							</button>
						</div>
					</li>

					<li className="w-56 h-64 bg-gray-100 rounded-xl flex-shrink-0 p-3 flex flex-col justify-between">
						<div>
							<h2 className="text-2xl">Malang</h2>
							<span className="flex items-center gap-2 text-sm">
								<FaLocationDot />
								East Java
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Land <FaRegSquare />
							</span>
							<button className="text-sm bg-gray-600 text-white py-1 rounded-xl px-3">
								view property
							</button>
						</div>
					</li>

					<li className="w-56 h-64 bg-gray-100 rounded-xl flex-shrink-0 p-3 flex flex-col justify-between">
						<div>
							<h2 className="text-2xl">Denpasar</h2>
							<span className="flex items-center gap-2 text-sm">
								<FaLocationDot />
								Bali
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Home <FaHouse />
							</span>
							<button className="text-sm bg-gray-600 text-white py-1 rounded-xl px-3">
								view property
							</button>
						</div>
					</li>

					<li className="w-56 h-64 bg-gray-100 rounded-xl flex-shrink-0 p-3 flex flex-col justify-between">
						<div>
							<h2 className="text-2xl">Bontang</h2>
							<span className="flex items-center gap-2 text-sm">
								<FaLocationDot />
								East Borneo
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Home <FaHouse />
							</span>
							<button className="text-sm bg-gray-600 text-white py-1 rounded-xl px-3">
								view property
							</button>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Listings;
