import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";

import {
	FaRegThumbsUp,
	FaRegHandshake,
	FaScaleBalanced,
	FaHeart,
} from "react-icons/fa6";
import Profile from "./Profile";
import Whyus from "./Whyus";

const About = ({ setCurSectionIndicator }) => {
	const [selectedSection, setSelectedSection] = useState("profile");

	const { ref, inView } = useInView({ threshold: 0.2 });

	useEffect(() => {
		if (inView) {
			setCurSectionIndicator("about");
		}
	}, [inView]);

	return (
		<div className="flex justify-center">
			<div
				ref={ref}
				className="flex flex-col w-full h-full max-w-4xl gap-8 p-6 pt-24 text-gray-600 bg-white"
			>
				<h1 className="text-3xl font-semibold tracking-wide">
					<span className="font-bold text-orange-400">About</span> us
				</h1>

				<nav>
					<ul className="flex justify-around">
						<li
							onClick={() => setSelectedSection("profile")}
							className={`px-4 py-1 border duration-200 rounded-full ${
								selectedSection === "profile"
									? "bg-orange-400 text-white border-orange-400"
									: "bg-white"
							}`}
						>
							Profile
						</li>
						<li
							onClick={() => setSelectedSection("whyus")}
							className={`px-4 py-1 border duration-200 rounded-full ${
								selectedSection === "whyus"
									? "bg-orange-400 text-white border-orange-400"
									: "bg-white"
							}`}
						>
							why us?
						</li>
					</ul>
				</nav>

				<div className="">
					{selectedSection === "profile" ? <Profile /> : <Whyus />}
				</div>
			</div>
		</div>
	);
};

export default About;
