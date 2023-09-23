import React, { useState } from "react";

import { FaBars } from "react-icons/fa6";

import NavbarDropdown from "./NavbarDropdown";

const NavbarMobile = () => {
	const [toggleDropdown, setToggleDropdown] = useState();

	return (
		<>
			<nav>
				<ul>
					<li
						onClick={() => setToggleDropdown(true)}
						className="fixed z-10 flex items-center justify-center w-12 h-12 text-white bg-black rounded-full top-2 right-2 bg-opacity-30 backdrop-filter backdrop-blur-sm"
					>
						<FaBars />
					</li>
				</ul>
			</nav>

			{toggleDropdown && (
				<NavbarDropdown setToggleDropdown={setToggleDropdown} />
			)}
		</>
	);
};

export default NavbarMobile;
