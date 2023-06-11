"use client";
import React from "react";
import { usePathname } from "next/navigation";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { SplashScreen, NavBar, Footer } from "../components";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	const isHome = pathname === "/";
	const [isLoading, setIsLoading] = React.useState(isHome);

	React.useEffect(() => {
		if (isLoading) return;
	}, [isLoading]);

	return (
		<html lang="en">
			{/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
			<head />
			<body className="dark:bg-stone-900">
				{isLoading && isHome ? (
					<SplashScreen finishLoading={() => setIsLoading(false)} />
				) : (
					<ThemeProvider enableSystem={true} attribute="class">
						<NavBar />
						{children}
						<Footer />
					</ThemeProvider>
				)}
			</body>
		</html>
	);
}
