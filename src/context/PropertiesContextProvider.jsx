import React, { useEffect, useState } from "react";

import PropertiesContext from "./propertiesContext";

const PropertiesContextProvider = ({ children }) => {
	const [properties, setProperties] = useState([]);
	const [isLoading, setIsLoading] = useState({
		fetching: false,
	});

	useEffect(() => {
		setIsLoading((prev) => ({ ...prev, fetching: true }));
		fetch("http://localhost:8000/propertiesData")
			.then((res) => res.json())
			.then((data) => setProperties(data))
			.finally(() => {
				setIsLoading((prev) => ({ ...prev, fetching: false }));
			});
	}, []);

	const isPropertiesExist = properties.length > 0;

	return (
		<PropertiesContext.Provider value={{ properties, isLoading }}>
			{children}
		</PropertiesContext.Provider>
	);
};

export default PropertiesContextProvider;
