import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes,Link } from "react-router-dom";
import logo from "../images/orange.png";

import { FaHome } from "react-icons/fa";
import { HiOutlineClipboardList } from "react-icons/hi";


import Navbar from "./Navbar.jsx";

import Employeedetails from "../Pages/Employeedetails.jsx";

import Employees from "../Pages/Employees.jsx";


const Sidebar= () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		let bodyContent = document.getElementById("body-main-content");
		bodyContent.addEventListener("click", () => {
			setIsSidebarOpen(false);
		});
	}, []);

	return (
		<Router>
		
			<div className="sidebar_container">
				<button
					onClick={toggleSidebar}
					type="button"
					className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				>
					<span className="sr-only">Open sidebar</span>
					<svg
						className="w-6 h-6"
						aria-hidden="true"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							clipRule="evenodd"
							fillRule="evenodd"
							d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
						></path>
					</svg>
				</button>
				<aside
					className={`fixed scroll-smooth top-0 left-0 z-40 w-64 h-screen transition-transform ${
						isSidebarOpen ? "translate-x-0" : "-translate-x-full"
					} lg:translate-x-0 border border-orange border-solid border-4 `}
					aria-label="Sidebar"
				>
					<div className="h-full px-2 py-4 overflow-y-auto bg-white-50 dark:bg-White-800 flex flex-1 flex-col justify-between">
						<nav className="space-y-6">
							<div className="text-black rounded-md mx-4">
								<div className="flex items-center justify-between py-2">
									<div className="flex">
									
									<img
									 src={logo}
									  alt="Company logo"
									  className="h-12 mr-4"/>
									</div>
									
								</div>
							</div>
							<ul className="space-y-2 font-medium">
								
								<li>
									<Link
										to="/"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-black hover:bg-orange-100 dark:hover:bg-orange-400 group"
									>
										<HiOutlineClipboardList />
										<span className="flex-1 ms-3 whitespace-nowrap">
											EMPLOYEE DETAILS
										</span>
									</Link>
								</li>
								<li>
									<Link
										to="/employees"
										className="flex items-center p-2 text-gray-900 rounded-md dark:text-balck hover.bg-orange-100 dark:hover:bg-orange-400 group"
									>
										<HiOutlineClipboardList />
										<span className="flex-1 ms-3 whitespace-nowrap">
										     EMPLOYEES
										</span>
									</Link>
								</li>
								
							</ul>
						</nav>
						
					</div>
				</aside>
			</div>

			
				<div id="body-main-content" style={{ backgroundColor: "#fafafa" }}>
					<Navbar />
					<div className="p-4 lg:ml-64">
						<div className="p-4 rounded-lg">
							<Routes>
								
								<Route path="/" element={<Employeedetails />} />
								<Route path="/employees" element={<Employees />} />
								
								
							</Routes>
						</div>
					</div>
				</div>
			
		
		</Router>
	);
};

export default Sidebar;
