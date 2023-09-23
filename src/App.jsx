import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Properties from "./pages/Properties/Properties";
import { Route, Routes } from "react-router";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Main from "./pages/Main/Main";

function App() {
	return (
		<>
			<Navbar />
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
