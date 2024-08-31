import React from "react";
import {
	Menu,
	Globe,
	Linkedin,
	Facebook,
	Twitter,
	Instagram,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
const Footer = () => {
	return (
		<div>
			<footer className="bg-gray-900 text-white py-12 px-10">
				<div className="container mx-auto px-4">
					<div>
						{/* <div className="flex flex-col items-center md:items-start">
							<h3 className="text-2xl font-semibold mb-6 flex items-center">
								<MapPin className="mr-2" size={24} />
								会社情報
							</h3>
							<p className="text-center md:text-left mb-2">
								株式会社 Digital Garbage
							</p>
							<p className="text-center md:text-left">
								〒100-0001 東京都千代田区1-1-1
							</p>
						</div> */}
						<div className="flex flex-col items-center md:items-start">
							<h3 className="text-2xl font-semibold mb-6 flex items-center">
								<Mail className="mr-2" size={24} />
								お問い合わせ
							</h3>
							<p className="flex items-center mb-2">
								<Mail className="mr-2" size={18} />
								<span>info@digitalgarbage.com</span>
							</p>
							{/* <p className="flex items-center">
								<Phone className="mr-2" size={18} />
								<span>03-1234-5678</span>
							</p> */}
						</div>
						{/* <div className="flex flex-col items-center md:items-start">
							<h3 className="text-2xl font-semibold mb-6">フォローする</h3>
							<div className="flex space-x-6">
								<a
									href="#"
									className="hover:text-blue-400 transition-colors duration-300"
								>
									<Facebook size={24} />
								</a>
								<a
									href="#"
									className="hover:text-blue-400 transition-colors duration-300"
								>
									<Twitter size={24} />
								</a>
								<a
									href="#"
									className="hover:text-pink-400 transition-colors duration-300"
								>
									<Instagram size={24} />
								</a>
								<a
									href="#"
									className="hover:text-blue-600 transition-colors duration-300"
								>
									<Linkedin size={24} />
								</a>
							</div>
						</div> */}
					</div>
					<div className="mt-12 pt-8 border-t border-gray-700 text-center">
						<p>&copy; 2024 Digital Garbage. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
