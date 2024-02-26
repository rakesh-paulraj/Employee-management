import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


const Employees = () => {
	return (
		<>
			<div className="flex items-start justify-between mx-3">
				<h1 className="mb-8 text-xl">Basic Details </h1>
				
				
			</div>
			<div className="flex items-start">
				This page is to provide the 
			</div>

			
			
				
			<div className="">
				<h1 className="mx-3 mt-8 text-xl">Basic details page</h1>
			</div>

			
			<section className="mx-auto w-full px-4 py-4">
				

			
				<div className="mt-6 flex items-center justify-center">
					<a
						href="#"
						className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 mr-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
					>
						<IoIosArrowBack className="h-4 w-4" />
						<span>previous</span>
					</a>

					<a
						href="#"
						className="flex items-center gap-x-2 rounded-md border bg-white px-5 py-2 ml-10 text-sm capitalize text-gray-700 transition-colors duration-200 hover:bg-gray-100"
					>
						<span>Next</span>
						<IoIosArrowForward className="h-4 w-4" />
					</a>
				</div>
			</section>
		</>
	);
};

export default Employees;
