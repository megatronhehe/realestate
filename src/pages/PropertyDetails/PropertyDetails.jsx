import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import { useParams } from "react-router";

import { FaLocationDot, FaRoad, FaSquare, FaHouse } from "react-icons/fa6";

const PropertyDetails = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const [thisProperty, setThisProperty] = useState({});
	const [selectedSubSection, setSelectedSubSection] = useState("description");

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

	return (
		<div className="relative flex flex-col w-full h-full max-w-4xl gap-4 p-6 pt-20 text-gray-600 bg-white">
			<button
				onClick={() => nav(-1)}
				className="self-start text-sm text-gray-400"
			>
				back
			</button>
			{isLoading ? (
				"loading..."
			) : isErrorExist ? (
				error
			) : (
				<>
					<img
						src={`../${thisProperty.images[0]}`}
						className="object-contain rounded-xl sm:h-1/2"
					/>

					<div className="flex gap-4 pb-2 border-b">
						<div className="w-1/2">
							<h2 className="text-2xl font-semibold text-orange-400">
								{thisProperty.location.city}
							</h2>
							<span>{thisProperty.location.province}</span>
						</div>

						<div className="flex flex-col items-end w-1/2">
							<h2 className="text-2xl font-semibold">
								Rp.{thisProperty.price},-
							</h2>
							<span className="flex items-center gap-2">
								{thisProperty.type}
								{displayIcon}
							</span>
						</div>
					</div>

					<div className="flex w-full">
						<button
							onClick={() => setSelectedSubSection("description")}
							className={`items-center w-1/2 border-b-4 ${
								selectedSubSection === "description"
									? "border-orange-400 text-orange-400"
									: "border-white"
							} pb-1`}
						>
							Description
						</button>
						<button
							onClick={() => setSelectedSubSection("details")}
							className={`items-center w-1/2 border-b-4 ${
								selectedSubSection === "details"
									? "border-orange-400 text-orange-400"
									: "border-white"
							} pb-1`}
						>
							Details
						</button>
					</div>

					{selectedSubSection === "description" ? (
						<div>
							<p>{thisProperty.description}</p>
						</div>
					) : (
						<div className="">
							<ul className="flex flex-col gap-2">
								<li className="flex items-center gap-4">
									<FaLocationDot /> {thisProperty.location.city}
									{", "}
									{thisProperty.location.province}
								</li>

								<li className="flex items-center gap-4">
									<FaRoad />
									{thisProperty.location.address}
								</li>

								<li className="flex items-center gap-4">
									{displayIcon}
									{thisProperty.type}
								</li>

								<li className="font-semibold text-orange-400 ">
									Rp.{thisProperty.price},-
								</li>
							</ul>
						</div>
					)}

					<button className="absolute px-4 py-2 text-white bg-orange-400 rounded-full bottom-6 right-6">
						contact now
					</button>
				</>
			)}
		</div>
	);
};

export default PropertyDetails;
