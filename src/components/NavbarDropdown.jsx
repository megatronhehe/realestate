import React, { useEffect, useState } from "react";

import {
	FaHouse,
	FaList,
	FaCircleInfo,
	FaPhoneFlip,
	FaDiamond,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarDropdown = ({ setToggleDropdown }) => {
	const [curSection, setCurSection] = useState("");

	const scrollToSection = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setToggleDropdown(false);
		}
	};

	useEffect(() => {
		scrollToSection(curSection);
	}, [curSection]);

	return (
		<section
			onClick={() => setToggleDropdown(false)}
			className="fixed top-0 left-0 z-30 flex flex-col items-end justify-end w-full h-full p-4 text-gray-600 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm font-extralight"
		>
			<div className="w-full p-4 bg-gray-100 rounded-xl">
				<h1 className="flex items-center justify-center gap-2 pb-4 mb-4 font-bold tracking-widest text-center text-orange-400 border-b">
					<FaDiamond />
					Oka Estate
				</h1>
				<ul
					onClick={(e) => {
						e.stopPropagation();
					}}
					className="grid grid-cols-2 gap-2"
				>
					<li className="flex items-center justify-center gap-2 px-4 py-2 text-center bg-white rounded-xl">
						<FaHouse />
						Home
					</li>
					<li className="flex items-center justify-center gap-2 px-4 py-2 text-center bg-white rounded-xl">
						<FaList />
						Listing
					</li>
					<li className="flex items-center justify-center gap-2 px-4 py-2 text-center bg-white rounded-xl">
						<FaCircleInfo />
						About
					</li>
					<li className="flex items-center justify-center gap-2 px-4 py-2 text-center bg-white rounded-xl">
						<FaPhoneFlip />
						Contact
					</li>
				</ul>
			</div>
		</section>
	);
};

export default NavbarDropdown;
