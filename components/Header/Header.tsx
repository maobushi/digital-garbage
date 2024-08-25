import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";

const Header = () => {
	return (
		<div>
			<header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4">
				<div className="container mx-auto px-4">
					<div className="bg-white/60 backdrop-blur-md border border-gray-200 rounded-md py-2 px-4 flex justify-between items-center  mx-auto">
						<div className="flex items-center">
							{/* <svg
								className="w-6 h-6 mr-2"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M9 22V12h6v10"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg> */}
							<span className="text-xl font-semibold">Digital Garbage</span>
						</div>
						<div className="flex items-center space-x-2">
							<Button variant="ghost" size="sm" className="rounded-full">
								<Globe className="h-5 w-5" />
								<span className="sr-only">Change language</span>
							</Button>
							<Button variant="ghost" size="sm" className="rounded-full">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Open menu</span>
							</Button>
						</div>
					</div>
				</div>
			</header>
		</div>
	);
};

export default Header;
