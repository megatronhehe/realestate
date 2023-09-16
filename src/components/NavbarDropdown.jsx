import React, { useEffect, useState } from "react";

import {
	FaHouse,
	FaList,
	FaCircleInfo,
	FaPhoneFlip,
	FaStar,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const NavbarDropdown = ({ setToggleNavbar }) => {
	const [curSection, setCurSection] = useState("");

	const scrollToSection = (section) => {
		const element = document.getElementById(section);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setToggleNavbar(false);
		}
	};

	useEffect(() => {
		scrollToSection(curSection);
	}, [curSection]);

	return (
		<section
			onClick={() => setToggleNavbar(false)}
			className="fixed top-0 left-0 z-30 flex items-end w-full h-full p-4 bg-black bg-opacity-30 backdrop-filter backdrop-blur-sm"
		>
			<ul
				onClick={(e) => {
					e.stopPropagation();
				}}
				className="flex flex-col items-center justify-center w-full gap-2 py-4 text-gray-600 bg-white rounded-xl"
			>
				<li>
					<Link
						to="/"
						onClick={() => setCurSection("home")}
						className="flex items-center justify-between w-32 gap-2 px-4 py-2 duration-200 hover:bg-orange-400 hover:text-white rounded-xl"
					>
						<FaHouse />
						Home
					</Link>
				</li>

				<li>
					<Link
						to="/"
						onClick={() => setCurSection("featured")}
						className="flex items-center justify-between w-32 gap-2 px-4 py-2 duration-200 hover:bg-orange-400 hover:text-white rounded-xl"
					>
						<FaStar />
						Featured
					</Link>
				</li>

				<li>
					<Link
						to="/properties"
						className="flex items-center justify-between w-32 gap-2 px-4 py-2 duration-200 hover:bg-orange-400 hover:text-white rounded-xl"
					>
						<FaList />
						Listing
					</Link>
				</li>

				<li>
					<Link
						to="/"
						onClick={() => setCurSection("about")}
						className="flex items-center justify-between w-32 gap-2 px-4 py-2 duration-200 hover:bg-orange-400 hover:text-white rounded-xl"
					>
						<FaCircleInfo />
						About
					</Link>
				</li>

				<li>
					<Link
						to="/"
						onClick={() => setCurSection("contact")}
						className="flex items-center justify-between w-32 gap-2 px-4 py-2 duration-200 hover:bg-orange-400 hover:text-white rounded-xl"
					>
						<FaPhoneFlip />
						Contact
					</Link>
				</li>
			</ul>
		</section>
	);
};

export default NavbarDropdown;
