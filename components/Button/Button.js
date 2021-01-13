import React from "react";
import DocLink from "components/DocLink";
import styles from "./Button.module.scss";

const NormalLink = ({ children, ...props }) => <a {...props}>{children}</a>;
const NormalButton = ({ children, ...props }) => (
	<button type="button" {...props}>
		{children}
	</button>
);

export default function Button({
	children,
	className,
	link,
	staticLink,
	onClick,
	secondary,
}) {
	const secondaryClass = secondary ? styles.secondary : null;

	const LinkTag = link ? DocLink : onClick ? NormalButton : NormalLink;
	const classNames = `${styles.button} ${className && className} ${
		secondaryClass && secondaryClass
	}`.trim();

	return (
		<LinkTag
			link={link}
			href={staticLink}
			onClick={onClick}
			linkClass={classNames}
			className={classNames}
		>
			{children}
		</LinkTag>
	);
}
