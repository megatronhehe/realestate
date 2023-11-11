import React from "react";

export default function HeroImageCard({ image, selectedIndex }) {
	const { index, src } = image;

	const isSelected = index === selectedIndex;

	return (
		<div
			className={`relative w-full overflow-hidden duration-700  h-44 rounded-xl ${
				isSelected ? "scale-110" : "scale-100"
			}`}
		>
			<img
				src={src}
				alt="hero-image"
				className={`object-cover h-full duration-700 ${
					isSelected ? "scale-125" : "scale-100"
				}`}
			/>

			<div
				className={`absolute top-0 left-0 w-full duration-700 h-full bg-black ${
					isSelected ? "bg-opacity-0" : "bg-opacity-50"
				}`}
			></div>
		</div>
	);
}
