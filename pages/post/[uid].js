import { RichText } from "prismic-reactjs";
import { queryRepeatableDocuments } from "utils/queries";
import { Client } from "utils/prismicHelpers";
import Layout from "components/Layout";
import styles from "./Article.module.scss";
import Meta from "components/Meta/Meta";
import Image from "next/image";
import Slices from "components/PostSlices/PostSlices";
import moment from "moment";
import useTranslation from "next-translate/useTranslation";
import grid from "styles/grid.module.scss";

const ArticleMeta = ({ doc }) => {
	const { t } = useTranslation();
	const publishedDates = {
		first: moment(doc.first_publication_date).format("ll"),
		last: moment(doc.last_publication_date).format("ll"),
	};
	return (
		<>
			Publicado em {publishedDates.first}
			{publishedDates.first !== publishedDates.last && (
				<span className={styles.notImportant}>
					{" "}
					(atualizado em {publishedDates.last})
				</span>
			)}
		</>
	);
};

export default function Post({ doc, menu }) {
	if (doc && doc.data) {
		const article = doc.data;
		const Pre = ArticleMeta;

		return (
			<Layout altLangs={doc.alternate_languages} menu={menu}>
				<article className={`${styles.article}`}>
					<Meta
						pageTitle={RichText.asText(article.title)}
						pageDesc={RichText.asText(article.lead)}
						pageType="article"
						pageImage={
							article.thumbnail
								? article.thumbnail.small
									? article.thumbnail.small.url
									: article.thumbnail.url
								: ""
						}
					/>
					<header className={grid.col}>
						<div className={`${styles.meta} s-sm`}>
							<Pre doc={doc} />
						</div>
						<h1 className={`${styles.title} h-1`}>
							{RichText.asText(article.title)}
						</h1>
						<div className={`${styles.lead} h-3`}>
							<RichText render={article.lead} />
						</div>
						{article.thumbnail && article.thumbnail.url && (
							<div className={styles.thumbnail}>
								<Image
									src={article.thumbnail.url}
									height={article.thumbnail.dimensions.height}
									width={article.thumbnail.dimensions.width}
									layout="responsive"
									sizes="320px,
										(max-width: 768px) 640px,
										(max-width: 1920px) 1366px,
										1920px"
									alt={article.thumbnail.alt}
								/>
							</div>
						)}
					</header>

					<Slices slices={article.body} />
				</article>
			</Layout>
		);
	}
	return (
		<Layout>
			<article className={`container ${styles.article}`}>
				<div className="body">
					<h2>Error.</h2>
					<p>
						This article could not be loaded. Its URL could have changed or it
						may be no longer available. If you believe this is a mistake, please
						get in touch with our team.
					</p>
				</div>
			</article>
		</Layout>
	);
}

export async function getStaticPaths() {
	const documents = await queryRepeatableDocuments(
		(doc) => doc.type === "post"
	);

	return {
		paths: documents.map((doc) => {
			return {
				params: { uid: doc.uid },
				locale: doc.lang,
			};
		}),
		fallback: true,
	};
}

export async function getStaticProps({ params, locale, ref }) {
	const client = Client();
	const doc = await client.getByUID("post", params.uid, { lang: locale });
	const menu =
		(await client.getSingle(
			"top_menu",
			ref ? { ref, lang: locale } : { lang: locale }
		)) || {};
	if (doc) {
		return {
			revalidate: 60,
			props: {
				menu,
				doc: doc || {},
			},
		};
	}
	return { revalidate: 10, props: { doc: {} } };
}
