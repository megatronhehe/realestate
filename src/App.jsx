import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero/Hero";
import Listings from "./pages/Listings/Listings";
import Whyus from "./pages/Whyus/Whyus";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";

function App() {
	return (
		<>
			<Navbar />
			<main className="h-screen overflow-y-scroll snap-y snap-mandatory font-extralight">
				<section className="relative h-screen text-gray-200 bg-black snap-center bg-opacity-70">
					<Hero />
				</section>

				<section className="relative flex justify-center h-screen text-gray-200 bg-white snap-center">
					<Routes>
						<Route path="/" element={<Listings />} />
						<Route path="/property/:id" element={<PropertyDetails />} />
					</Routes>
				</section>

				<section className="relative h-screen text-gray-200 snap-center">
					<Whyus />
				</section>

				<section className="relative h-screen text-gray-200 snap-center">
					<Contact />
				</section>
			</main>
		</>
	);
}

export default App;
