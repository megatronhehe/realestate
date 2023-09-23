import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";

import {
	FaLocationDot,
	FaRoad,
	FaSquare,
	FaHouse,
	FaAngleLeft,
	FaExpand,
	FaLayerGroup,
} from "react-icons/fa6";

const PropertyDetails = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [thisProperty, setThisProperty] = useState({});

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
		<section className="flex justify-center">
			<div className="flex flex-col w-full h-full max-w-4xl gap-4 p-4 text-gray-600 bg-white ">
				{isLoading ? (
					"loading..."
				) : isErrorExist ? (
					error
				) : (
					<>
						<div className="relative">
							<img
								src={`../${thisProperty.images[0]}`}
								className="object-contain rounded-xl sm:h-1/2"
							/>
							<button
								onClick={() => nav(-1)}
								className="absolute flex items-center self-start justify-center w-8 h-8 text-sm text-orange-400 duration-200 bg-white rounded-full bg-opacity-80 top-2 left-2 backdrop-filter backdrop-blur-sm"
							>
								<FaAngleLeft />
							</button>
						</div>

						<h1 className="text-xl font-normal tracking-wide">
							<span className="font-bold text-orange-400">
								{thisProperty.type}
							</span>{" "}
							at {thisProperty.location.city}, {thisProperty.location.province}
						</h1>

						<ul className="flex gap-2">
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

						<div>
							<h2 className="font-semibold">Description</h2>
							<p className="mt-4 text-sm">{thisProperty.description} </p>
						</div>

						<div className="flex items-center justify-between">
							<h3 className="text-2xl font-bold text-orange-400">
								Rp.{thisProperty.price} Juta
							</h3>
							<button className="px-4 py-1 font-semibold text-white bg-orange-300 rounded-full">
								contact
							</button>
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default PropertyDetails;
