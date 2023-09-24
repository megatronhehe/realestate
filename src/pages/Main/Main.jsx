import React from "react";
import Hero from "./Hero";
import Featured from "./Featured/Featured";
import Numbers from "./Numbers";
import Whyus from "./Whyus";
import Aboutus from "./Aboutus";

import { motion } from "framer-motion";

const Main = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<Hero />
			<Numbers />
			<Featured />
			<Aboutus />
			<Whyus />
		</motion.div>
	);
};

export default Main;
