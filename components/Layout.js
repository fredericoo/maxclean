import React from "react";
import Head from "next/head";
import { prismicRepoName } from "utils/prismicHelpers";
// import Header from "./Header/Header";
import NavBar from "components/Navbar/Navbar";
import Footer from "./Footer";
import ExitPreviewButton from "./ExitPreviewButton";

const Layout = ({ isPreview, children, altLangs, lang, menu }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<link rel="icon" href="/favicon.png" type="image/png" />
				<title>Maxclean Ambiental</title>
				<script
					async
					defer
					src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${prismicRepoName}`}
				/>
				<link rel="stylesheet" href="https://use.typekit.net/eim0qrc.css" />
			</Head>
			<NavBar altLangs={altLangs} menu={menu} />
			<main>{children}</main>
			{isPreview ? <ExitPreviewButton /> : null}
			<Footer />
		</>
	);
};

export default Layout;
