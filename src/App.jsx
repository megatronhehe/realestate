import React, { useState } from "react";

import NavbarPC from "./components/NavbarPC";
import NavbarMobile from "./components/NavbarMobile";
import Properties from "./pages/Properties/Properties";
import { Route, Routes } from "react-router";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Main from "./pages/Main/Main";

import { useResponsive } from "./hooks/useResponsive";

function App() {
	const { isMobileMode } = useResponsive();

	return (
		<>
			{isMobileMode ? <NavbarMobile /> : <NavbarPC />}
			<main className="font-extralight">
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/properties" element={<Properties />} />
					<Route path="/properties/:id" element={<PropertyDetails />} />
				</Routes>
			</main>
		</>
	);
}

export default App;
