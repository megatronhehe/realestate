import React, { useEffect, useState } from "react";

import PropertiesContext from "./propertiesContext";

const PropertiesContextProvider = ({ children }) => {
	const [properties, setProperties] = useState([]);
	const [isLoading, setIsLoading] = useState({
		fetching: false,
	});
	const [error, setError] = useState("");

	useEffect(() => {
		setError("");
		setIsLoading((prev) => ({ ...prev, fetching: true }));
		fetch("http://localhost:8000/propertiesData")
			.then((res) => {
				if (!res.ok) {
					setError(`${res.status} ${res.statusText}`);
				} else {
					return res.json();
				}
			})
			.then((data) => setProperties(data))
			.finally(() => {
				setIsLoading((prev) => ({ ...prev, fetching: false }));
			});
	}, []);

	const isPropertiesExist = properties.length > 0;
	const isErrorExist = error.length > 0;

	return (
		<PropertiesContext.Provider
			value={{ properties, isPropertiesExist, isLoading, error, isErrorExist }}
		>
			{children}
		</PropertiesContext.Provider>
	);
};

export default PropertiesContextProvider;
