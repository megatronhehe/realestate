import React, { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero/Hero";
import Listings from "./pages/Listings/Listings";
import Whyus from "./pages/Whyus/Whyus";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router";
import PropertyDetails from "./pages/PropertyDetails/PropertyDetails";
import Featured from "./pages/Featured/Featured";

function App() {
	const [curSectionIndicator, setCurSectionIndicator] = useState("home");

	return (
		<>
			<Navbar curSectionIndicator={curSectionIndicator} />
			<main className="h-screen overflow-y-scroll snap-y snap-mandatory font-extralight">
				<Routes>
					<Route
						path="/"
						element={
							<>
								<section
									id="home"
									className="relative h-screen text-gray-200 bg-black snap-center bg-opacity-70"
								>
									<Hero setCurSectionIndicator={setCurSectionIndicator} />
								</section>

								<section
									id="featured"
									className="relative flex justify-center h-screen text-gray-200 bg-white snap-center"
								>
									<Featured setCurSectionIndicator={setCurSectionIndicator} />
								</section>

								<section
									id="about"
									className="relative h-screen text-gray-200 snap-center"
								>
									<Whyus setCurSectionIndicator={setCurSectionIndicator} />
								</section>

								<section
									id="contact"
									className="relative h-screen text-gray-200 snap-center"
								>
									<Contact setCurSectionIndicator={setCurSectionIndicator} />
								</section>
							</>
						}
					/>
					<Route
						path="/properties"
						element={
							<section className="relative flex justify-center h-screen text-gray-200 bg-white">
								<Listings
									curSectionIndicator={curSectionIndicator}
									setCurSectionIndicator={setCurSectionIndicator}
								/>
							</section>
						}
					/>
					<Route
						path="/properties/:id"
						element={
							<section className="relative flex justify-center h-screen text-gray-200 bg-white">
								<PropertyDetails />
							</section>
						}
					/>
				</Routes>
			</main>
		</>
	);
}

{
	/* <section className="relative flex justify-center h-screen text-gray-200 bg-white snap-center">
					<Routes>
						<Route path="/" element={<Listings />} />
						<Route path="/property/:id" element={<PropertyDetails />} />
					</Routes>
				</section> */
}

export default App;
