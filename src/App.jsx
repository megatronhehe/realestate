import React from "react";

import NavbarPC from "./components/NavbarPC";
import NavbarMobile from "./components/NavbarMobile";
import Properties from "./pages/Properties/Properties";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Main from "./pages/Main/Main";
import Contact from "./pages/Contact/Contact";

import { useResponsive } from "./hooks/useResponsive";
import { AnimatePresence } from "framer-motion";

import { Route, Routes, useLocation } from "react-router";

function App() {
	const { isMobileMode } = useResponsive();

	const location = useLocation();

	return (
		<>
			{isMobileMode ? <NavbarMobile /> : <NavbarPC />}
			<main className="font-extralight">
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Main />} />
						<Route path="/properties" element={<Properties />} />
						<Route path="/properties/:id" element={<PropertyDetails />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</AnimatePresence>
			</main>
		</>
	);
}

export default App;
