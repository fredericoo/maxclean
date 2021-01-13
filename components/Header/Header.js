import NextLink from "next/link";
import { Navigation, LanguageSwitcher } from "..";
import LogoSvg from "./LogoSvg";
import navbar from "./styles.module.scss";

const Header = ({ menu, altLangs }) => (
	<header className={navbar.container}>
		<div className={navbar.logo}>
			<NextLink href={"/"} passHref>
				<a>
					<LogoSvg />
				</a>
			</NextLink>
		</div>
		<ul className={navbar.menu}>
			<Navigation menu={menu} />
			<LanguageSwitcher altLangs={altLangs} />
		</ul>
	</header>
);

export default Header;
