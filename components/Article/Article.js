import Link from "next/link";
import Image from "next/image";
import styles from "./Article.module.scss";
import { RichText } from "prismic-reactjs";

const Article = ({ href, title, source, lead, thumbnail, size }) => {
	const articleClass = `${styles.article} ${
		size ? styles[`size-${size}`] : ""
	}`;
	const headingClass = `${
		size && size < 3 ? "h-4" : thumbnail && thumbnail.url ? "h-3" : "h-2"
	} ${styles.title}`;
	const sourceClass = `${styles.source}`;
	const leadClass = `body s-sm ${styles.lead}`;

	if (href)
		return (
			<Link href={href}>
				<a className={articleClass}>
					{thumbnail && thumbnail.url && size >= 2 && (
						<div className={styles.thumbnail}>
							<Image
								src={thumbnail.url}
								height={600}
								width={size >= 3 ? 1280 : 600}
								layout="responsive"
								alt={thumbnail.alt}
							/>
						</div>
					)}
					<h3 className={headingClass}>{RichText.asText(title)}</h3>
					<h4 className={sourceClass}>{source}</h4>
					<div className={leadClass}>
						<RichText render={lead} />
					</div>
				</a>
			</Link>
		);

	return (
		<div className={`${articleClass} ${styles.skeleton}`}>
			<h3 className={headingClass}>Lorem ipsum</h3>
			<h4 className={sourceClass}>Dolor sit Amet</h4>
			<div className={leadClass}>
				Lorem ipsum dolor sit amet consequequitur Lorem ipsum dolor sit amet
				consequequitur Lorem ipsum dolor sit amet consequequitur Lorem ipsum
				dolor sit amet consequequitur Lorem ipsum dolor sit amet consequequitur.
			</div>
		</div>
	);
};

export default Article;
