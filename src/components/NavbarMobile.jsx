import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";

import NavbarDropdown from "./NavbarDropdown";
import { AnimatePresence } from "framer-motion";

const NavbarMobile = () => {
	const [toggleDropdown, setToggleDropdown] = useState(false);

	return (
		<>
			<nav
				onClick={() => setToggleDropdown(true)}
				className="fixed z-20 top-2 right-2"
			>
				<ul className="flex flex-col items-end gap-2">
					<li className="flex items-center justify-center w-12 h-12 text-xl text-white bg-black rounded-full bg-opacity-40">
						<FaBars />
					</li>
				</ul>
			</nav>
			<AnimatePresence>
				{toggleDropdown ? (
					<NavbarDropdown setToggleDropdown={setToggleDropdown} />
				) : null}
			</AnimatePresence>
		</>
	);
};

export default NavbarMobile;
