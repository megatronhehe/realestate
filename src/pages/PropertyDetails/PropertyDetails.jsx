import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";

import { AnimatePresence, motion } from "framer-motion";

import { useResponsive } from "../../hooks/useResponsive";

import {
	FaLocationDot,
	FaSquare,
	FaHouse,
	FaAngleLeft,
	FaExpand,
	FaLayerGroup,
	FaCircleNotch,
} from "react-icons/fa6";

const PropertyDetails = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [thisProperty, setThisProperty] = useState({});

	const { isMobileMode } = useResponsive();

	const nav = useNavigate();

	const { id } = useParams();

	useEffect(() => {
		setError("");
		setIsLoading(true);
		fetch(`http://localhost:8000/propertiesData/${id}`)
			.then((res) => {
				if (!res.ok) {
					setError(`${res.status} ${res.statusText}`);
				} else {
					return res.json();
				}
			})
			.then((data) => setThisProperty(data))
			.finally(() => setIsLoading(false));
	}, []);

	const isErrorExist = error.length > 0;

	const displayIcon =
		thisProperty.type === "House" ? <FaHouse /> : <FaSquare />;

	const simplifyPrice = (price) => {
		return price / 1000000;
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex justify-center"
		>
			<div className="flex flex-col w-full h-full max-w-4xl gap-6 p-6 text-gray-600 bg-white sm:flex-row ">
				<AnimatePresence>
					{isLoading ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center w-full gap-4 mt-24 text-xl"
						>
							<FaCircleNotch className="animate-spin" />
							<span>Loading...</span>
						</motion.div>
					) : isErrorExist ? (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex flex-col items-center justify-center w-full gap-4 mt-24 text-xl"
						>
							<FaCircleNotch className="animate-spin" />
							<span>{error}</span>
						</motion.div>
					) : (
						<>
							<div className="relative w-full sm:flex sm:flex-col sm:gap-6 sm:w-1/2">
								<button
									onClick={() => nav(-1)}
									className="absolute flex items-center self-start justify-center w-8 h-8 text-sm text-gray-400 duration-200 bg-white rounded-full sm:border sm:static bg-opacity-80 top-2 left-2 backdrop-filter backdrop-blur-sm hover:text-white hover:bg-orange-400 hover:border-orange-400"
								>
									<FaAngleLeft />
								</button>
								<img
									src={`../${thisProperty.images[0]}`}
									className="object-contain w-full rounded-xl "
								/>
							</div>

							<div className="flex flex-col gap-4 sm:gap-6 sm:w-1/2 sm:border-l sm:pl-6">
								<div>
									<h1 className="text-xl">
										<span className="font-semibold text-orange-400">
											{thisProperty.type}
										</span>{" "}
										at {thisProperty.location.city},{" "}
										<span className="text-sm">
											{thisProperty.location.province}
										</span>
									</h1>
									<span className="flex items-center gap-2">
										<FaLocationDot />
										{thisProperty.location.address}
									</span>
								</div>

								<ul className="flex gap-2 ">
									<li className="flex flex-col items-center justify-center w-1/4 h-24 gap-2 text-sm bg-gray-100 rounded-xl">
										<div className="p-2 text-2xl text-orange-300 bg-white rounded-full">
											{displayIcon}
										</div>
										{thisProperty.type}
									</li>
									<li className="flex flex-col items-center justify-center w-1/4 h-24 gap-2 text-sm bg-gray-100 rounded-xl">
										<div className="p-2 text-2xl text-gray-600 bg-white rounded-full">
											<FaExpand />
										</div>
										{thisProperty.size} m2
									</li>
									<li className="flex flex-col items-center justify-center w-1/4 h-24 gap-2 text-sm bg-gray-100 rounded-xl">
										<div className="p-2 text-2xl text-green-300 bg-white rounded-full">
											<FaLayerGroup />
										</div>
										{simplifyPrice(thisProperty.priceBySize)} jt/m2
									</li>
									<li className="flex flex-col items-center justify-center w-1/4 h-24 gap-2 text-sm bg-gray-100 rounded-xl">
										<div className="p-2 text-2xl text-red-400 bg-white rounded-full">
											<FaLocationDot />
										</div>
										{thisProperty.location.city}
									</li>
								</ul>

								{!isMobileMode && <div className="sm:border-b "></div>}

								<div>
									<h2 className="font-semibold">Description</h2>
									<p className="mt-4 text-sm">{thisProperty.description} </p>
								</div>

								{!isMobileMode && <div className="sm:border-b "></div>}

								<div className="flex items-center justify-between">
									<h3 className="text-2xl font-bold text-orange-400">
										Rp.{thisProperty.price} Juta
									</h3>
									<button className="px-4 py-1 font-semibold text-white bg-orange-300 rounded-full">
										contact
									</button>
								</div>
							</div>
						</>
					)}
				</AnimatePresence>
			</div>
		</motion.section>
	);
};

export default PropertyDetails;
