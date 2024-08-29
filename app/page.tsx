"use client";
import Image from "next/image";
import {
	Menu,
	Globe,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header/Header";
import { motion } from "framer-motion";

export default function Component() {
	return (
		<>
			<Header />
			<div className="min-h-screen flex flex-col">
				<main className="flex-grow">
					<div className="relative h-screen">
						<div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-gray-900/50">
							<Image
								src="/economics.jpg"
								alt="背景画像"
								className="w-full h-full object-cover"
								width={1920}
								height={1080}
							/>
						</div>
						<div className="relative z-10 flex flex-col justify-end items-start h-full container mx-auto px-10 text-white pb-16">
							<h1 className="text-5xl md:text-7xl font-bold mb-4">
								Prediction
								<br />
								New Context
							</h1>
							<p className="text-sm md:text-2xl max-w-2xl">
								持続可能な社会に向けた
								&ldquo;新しいコンテクスト&rdquo;を予測し、テクノロジーで社会実装する
							</p>
						</div>
					</div>

					{/* 事業内容セクション */}
					<section className="py-24 bg-gray-100 px-10">
						<div className="container mx-auto px-4">
							<h2 className="text-5xl font-bold mb-8 text-left">
								DG <br />
								Prediction Market Shift
							</h2>
							<p className="text-sm md:text-2xl max-w-2xl">
								生活の中にあらゆるマーケットを創出し、
								<br />
								社会で&rdquo;ゴミ&rdquo;だとされている情報から市場心理を可視化します
							</p>
							<div className="grid grid-cols-1 md:grid-cols-3  py-10 gap-12">
								{[
									{
										title: "予測市場",
										image: "/stock.webp",
										description: "市場心理を可視化し、新たな価値を創出します。",
									},
									{
										title: "無期限先物オプション",
										image: "/new-context.jpg",
										description: "バイナリオプション以外の金融商品を設計します",
									},
									{
										title: "分散型オラクル",
										image: "/implementation.jpg",
										description:
											"分散型オラクルでリスティングやエグゼキューションの透明性を高めます",
									},
								].map((item, index) => (
									<motion.div
										key={index}
										className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl"
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<div className="relative overflow-hidden">
											<Image
												src={item.image}
												alt={item.title}
												width={600}
												height={400}
												className="w-full h-80 object-cover transition-transform duration-300 transform hover:scale-110"
											/>
											<div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
												<h3 className="text-2xl font-semibold text-white mb-3">
													{item.title}
												</h3>
												<p className="text-base text-gray-200">
													{item.description}
												</p>
											</div>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</section>

					{/* Articlesセクション */}
					<section className="py-24 bg-black text-white px-10">
						<div className="container mx-auto px-4 ">
							<h2 className="text-5xl font-bold mb-8 text-left">Articles </h2>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{[
									{
										title: "AIの進化と社会への影響",
										image: "/article-1.jpg",
										description:
											"最新のAI技術が社会にもたらす変革について解説します。",
									},
									{
										title: "持続可能なエネルギーの未来",
										image: "/article-2.jpg",
										description:
											"再生可能エネルギーの最新動向と今後の展望を探ります。",
									},
									{
										title: "デジタルトランスフォーメーションの波",
										image: "/article-3.jpg",
										description:
											"企業のDX推進における課題と成功事例を紹介します。",
									},
								].map((item, index) => (
									<motion.div
										key={index}
										className="bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(255,255,255,0.1),0_2px_4px_-1px_rgba(255,255,255,0.06)] overflow-hidden transition-shadow duration-300 hover:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.1),0_4px_6px_-2px_rgba(255,255,255,0.05)]"
										initial={{ opacity: 0, y: 50 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.5, delay: index * 0.1 }}
									>
										<div className="relative overflow-hidden">
											<Image
												src={item.image}
												alt={item.title}
												width={400}
												height={200}
												className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
											/>
											<div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black to-transparent w-full">
												<h3 className="text-xl font-semibold text-white mb-2">
													{item.title}
												</h3>
												<p className="text-sm text-gray-200">
													{item.description}
												</p>
											</div>
										</div>
										<div className="p-4">
											<Button variant="outline">続きを読む</Button>
										</div>
									</motion.div>
								))}
							</div>
						</div>
					</section>
				</main>

				{/* Footer */}
				<footer className="bg-gray-900 text-white py-12 px-10">
					<div className="container mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							<div className="flex flex-col items-center md:items-start">
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
							</div>
							<div className="flex flex-col items-center md:items-start">
								<h3 className="text-2xl font-semibold mb-6 flex items-center">
									<Mail className="mr-2" size={24} />
									お問い合わせ
								</h3>
								<p className="flex items-center mb-2">
									<Mail className="mr-2" size={18} />
									<span>info@example.com</span>
								</p>
								<p className="flex items-center">
									<Phone className="mr-2" size={18} />
									<span>03-1234-5678</span>
								</p>
							</div>
							<div className="flex flex-col items-center md:items-start">
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
							</div>
						</div>
						<div className="mt-12 pt-8 border-t border-gray-700 text-center">
							<p>&copy; 2024 Digital Garbage. All rights reserved.</p>
						</div>
					</div>
				</footer>
			</div>
		</>
	);
}
