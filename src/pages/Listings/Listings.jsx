import React from "react";

import { FaLocationDot, FaHouse, FaSquare } from "react-icons/fa6";

const Listings = () => {
	return (
		<div className="flex flex-col justify-center w-full h-full max-w-4xl gap-6 p-6 text-gray-600 bg-white">
			<div className="flex flex-col gap-2">
				<h1 className="text-3xl font-semibold">Find your opportunity</h1>
				<span>Find your perfect land on our listings</span>
			</div>

			<div className="flex flex-col justify-between gap-6 sm:flex-row">
				<div className="flex flex-col gap-2">
					<h2>Location available:</h2>
					<ul className="flex gap-2 overflow-auto">
						<li className="flex-shrink-0 px-4 py-1 text-white bg-orange-400 rounded-full">
							all
						</li>
						<li className="flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full">
							East Java
						</li>
						<li className="flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full">
							East Borneo
						</li>
						<li className="flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full">
							Bali
						</li>
					</ul>
				</div>

				<div className="flex flex-col gap-2">
					<h2>Types available:</h2>
					<ul className="flex gap-2 overflow-auto">
						<li className="flex-shrink-0 px-4 py-1 text-white bg-orange-400 rounded-full">
							all
						</li>
						<li className="flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full">
							House
						</li>
						<li className="flex-shrink-0 px-4 py-1 bg-gray-100 rounded-full">
							Land
						</li>
					</ul>
				</div>
			</div>

			<div>
				<ul className="flex gap-4 overflow-auto sm:grid sm:grid-cols-3">
					<li className="flex flex-col justify-between flex-shrink-0 w-56 h-64 p-3 bg-gray-100 sm:w-full rounded-xl">
						<div>
							<h2 className="text-2xl">Balikpapan</h2>
							<span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
								<div className="flex items-center justify-center w-6 h-6 text-orange-300 bg-white rounded-full">
									<FaLocationDot />
								</div>
								East Borneo
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Land <FaSquare />
							</span>
							<button className="px-3 py-1 text-sm text-white bg-gray-600 rounded-xl">
								view property
							</button>
						</div>
					</li>

					<li className="flex flex-col justify-between flex-shrink-0 w-56 h-64 p-3 bg-gray-100 sm:w-full rounded-xl">
						<div>
							<h2 className="text-2xl">Malang</h2>
							<span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
								<div className="flex items-center justify-center w-6 h-6 text-orange-300 bg-white rounded-full">
									<FaLocationDot />
								</div>
								East Java
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Land <FaSquare />
							</span>
							<button className="px-3 py-1 text-sm text-white bg-gray-600 rounded-xl">
								view property
							</button>
						</div>
					</li>

					<li className="flex flex-col justify-between flex-shrink-0 w-56 h-64 p-3 bg-gray-100 sm:w-full rounded-xl">
						<div>
							<h2 className="text-2xl">Denpasar</h2>
							<span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
								<div className="flex items-center justify-center w-6 h-6 text-orange-300 bg-white rounded-full">
									<FaLocationDot />
								</div>
								Bali
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Home <FaHouse />
							</span>
							<button className="px-3 py-1 text-sm text-white bg-gray-600 rounded-xl">
								view property
							</button>
						</div>
					</li>

					<li className="flex flex-col justify-between flex-shrink-0 w-56 h-64 p-3 bg-gray-100 sm:w-full rounded-xl">
						<div>
							<h2 className="text-2xl">Bontang</h2>
							<span className="flex items-center gap-2 text-sm tracking-wide text-gray-400">
								<div className="flex items-center justify-center w-6 h-6 text-orange-300 bg-white rounded-full">
									<FaLocationDot />
								</div>
								East Borneo
							</span>
						</div>

						<div className="flex flex-col gap-2">
							<span className="flex items-center self-end gap-2 text-sm">
								Home <FaHouse />
							</span>
							<button className="px-3 py-1 text-sm text-white bg-gray-600 rounded-xl">
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
