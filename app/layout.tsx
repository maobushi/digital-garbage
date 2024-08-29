import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
const myFont = localFont({
	src: "../public/fonts/din1451alt.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Digital Garbage",
	description: "Digital Garbage Official Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={myFont.className}>{children}</body>
		</html>
	);
}
