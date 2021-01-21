import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { RichText } from "prismic-reactjs";
import LogoSvg from "components/Header/LogoSvg";
import { hrefResolver } from "prismic-configuration";
import grid from "styles/grid.module.scss";

const Navbar = ({ menu, altLangs }) => {
	const { asPath } = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => setIsOpen(!isOpen);
	const { t } = useTranslation();

	useEffect(() => {
		setIsOpen(false);
	}, [asPath]);

	return (
		<nav className={`${grid.container} ${styles.navbar}`}>
			<Link href="/">
				<a className={styles.logo}>
					<LogoSvg />
				</a>
			</Link>
			<div className={styles.viewport}>
				<div className={`${styles.tools} ${isOpen ? styles.open : ""}`}>
					<ul className={styles.menu}>
						{menu &&
							menu.data?.menu_links?.map((menuLink, index) => (
								<li key={index}>
									<Link href={hrefResolver(menuLink.link)}>
										<a
											className={` ${styles.item} ${
												asPath === hrefResolver(menuLink.link)
													? styles.active
													: ""
											}`}
										>
											{RichText.asText(menuLink.label)}
										</a>
									</Link>
								</li>
							))}
					</ul>
				</div>
			</div>
			<button
				label={t("common:toggleMenu")}
				className={`${styles.toggler}`}
				type="button"
				onClick={toggle}
			>
				<div className={`${styles.togglerIcon} ${isOpen ? styles.open : ""}`}>
					<span></span>
				</div>
			</button>
		</nav>
	);
};

export default Navbar;
