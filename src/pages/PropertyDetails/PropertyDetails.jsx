import React, { useEffect, useState } from "react";

import { useParams } from "react-router";

const PropertyDetails = () => {
	const [isLoading, setIsLoading] = useState({ fetching: false });
	const [error, setError] = useState("");
	const [thisProperty, setThisProperty] = useState([]);

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

	return (
		<div className="pt-20 text-2xl text-black bg-white">
			{isLoading.fetching
				? "loading..."
				: isErrorExist
				? error
				: thisProperty.description}
		</div>
	);
};

export default PropertyDetails;
