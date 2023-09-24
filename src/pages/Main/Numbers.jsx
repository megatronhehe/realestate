import React from "react";

const Numbers = () => {
	return (
		<section className="flex justify-center py-2 text-white bg-gradient-to-r from-gray-700 to-gray-900">
			<ul className="flex flex-col justify-between w-full max-w-4xl gap-4 p-4 text-xl font-semibold rounded-full sm:bg-gray-800 sm:flex-row sm:gap-0 ">
				<li className="flex flex-col items-center duration-200 sm:w-1/3 hover:scale-110">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full">
						4
					</h2>
					<span>Properties</span>
					<p className="text-sm text-center font-extralight">
						we have 4 properties listed
					</p>
				</li>
				<li className="flex flex-col items-center py-4 duration-200 border-gray-500 border-y sm:w-1/3 sm:py-0 sm:border-x sm:border-none hover:scale-110">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full">
						4
					</h2>
					<span>Big cities</span>
					<p className="text-sm text-center font-extralight">
						our properties located in 4 big cities in indonesia
					</p>
				</li>
				<li className="flex flex-col items-center duration-200 sm:w-1/3 hover:scale-110 ">
					<h2 className="flex items-center justify-center w-12 h-12 bg-orange-400 rounded-full ">
						3{" "}
					</h2>
					<span>Big provinces</span>
					<p className="text-sm text-center font-extralight">
						our properties located in 3 big provinces in indonesia
					</p>
				</li>
			</ul>
		</section>
	);
};

export default Numbers;
