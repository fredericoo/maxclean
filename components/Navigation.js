import { default as NextLink } from "next/link";
import { RichText } from "prismic-reactjs";
import { hrefResolver } from "prismic-configuration";
import styles from "./Navigation.module.scss";
import { useRouter } from "next/router";

const MenuLinks = ({ links = [] }) => {
	const { asPath } = useRouter();

	if (links) {
		return (
			<ul className={styles.menu}>
				{links.map((menuLink) => {
					return (
						<li
							className={`${styles.item} ${
								asPath === hrefResolver(menuLink.link) ? styles.active : ""
							}`}
							key={menuLink.link.id}
						>
							<NextLink href={hrefResolver(menuLink.link)} passHref>
								<a>{RichText.asText(menuLink.label)}</a>
							</NextLink>
						</li>
					);
				})}
			</ul>
		);
	}
};

const Navigation = ({ menu }) => (menu ? <MenuLinks links={menu} /> : null);

export default Navigation;
