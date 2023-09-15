import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./pages/Hero/Hero";
import Listings from "./pages/Listings/Listings";
import Whyus from "./pages/Whyus/Whyus";

function App() {
	return (
		<>
			<Navbar />
			<main className="snap-y snap-mandatory overflow-y-scroll h-screen font-extralight">
				<section className="relative snap-center h-screen  bg-black bg-opacity-70 text-gray-200">
					<Hero />
				</section>

				<section className="relative snap-center h-screen  text-gray-200">
					<Listings />
				</section>

				<section className="relative snap-center h-screen  text-gray-200">
					<Whyus />
				</section>

				<section className="relative snap-center h-screen  text-gray-200">
					<Hero />
				</section>
			</main>
		</>
	);
}

export default App;
