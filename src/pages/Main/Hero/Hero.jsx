import React from "react";
import HeroImages from "./HeroImages";

import HeroText from "./HeroText";

const Hero = () => {
	return (
		<header className="flex items-center justify-center h-screen text-gray-100">
			<div className="w-full max-w-6xl p-0 sm:-mt-20 sm:p-6">
				<div className="flex items-center gap-8 sm:relative ">
					<HeroText />

					<HeroImages />
				</div>
			</div>
		</header>
	);
};

export default Hero;
