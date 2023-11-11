import React, { useEffect, useState } from "react";

import heroImage from "../../../assets/heroImage.jpg";
import balikpapan from "../../../assets/balikpapan.jpg";
import surabaya from "../../../assets/surabaya.jpg";
import malang from "../../../assets/malang.jpg";
import bontang from "../../../assets/bontang.jpg";
import bali from "../../../assets/bali.jpg";
import HeroImageCard from "./HeroImageCard";

export default function HeroImages() {
	const imageData = [
		{ index: 0, src: heroImage },
		{ index: 1, src: balikpapan },
		{ index: 2, src: surabaya },
		{ index: 3, src: malang },
		{ index: 4, src: bontang },
		{ index: 5, src: bali },
		{ index: 6, src: heroImage },
	];

	const [selectedIndex, setSelectedIndex] = useState(0);

	const getRandomNumber = () => Math.floor(Math.random() * imageData.length);

	useEffect(() => {
		setInterval(() => {
			const randomNumber = getRandomNumber();

			if (randomNumber === selectedIndex) {
				const newRandomNumber = getRandomNumber();
				return setSelectedIndex(newRandomNumber);
			}

			setSelectedIndex(randomNumber);
		}, 1500);
	}, []);

	const leftImagesElement = imageData
		.slice(0, 2)
		.map((image) => (
			<HeroImageCard
				key={image.index}
				image={image}
				selectedIndex={selectedIndex}
			/>
		));

	const middleImagesElement = imageData
		.slice(2, 5)
		.map((image) => (
			<HeroImageCard
				key={image.index}
				image={image}
				selectedIndex={selectedIndex}
			/>
		));

	const rightImagesElement = imageData
		.slice(-2)
		.map((image) => (
			<HeroImageCard
				key={image.index}
				image={image}
				selectedIndex={selectedIndex}
			/>
		));

	return (
		<div className="flex items-center gap-3 p-4">
			<div className="flex flex-col w-1/3 gap-3">{leftImagesElement}</div>
			<div className="flex flex-col w-1/3 gap-3">{middleImagesElement}</div>
			<div className="flex flex-col w-1/3 gap-3">{rightImagesElement}</div>
		</div>
	);
}
