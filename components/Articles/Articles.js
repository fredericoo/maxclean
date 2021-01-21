import styles from "./Articles.module.scss";
import useTranslation from "next-translate/useTranslation";
import { useState } from "react";
import Button from "components/Button/Button";
import Article from "components/Article/Article";
import moment from "moment";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "utils/fetcher";
import grid from "styles/grid.module.scss";

const Articles = ({ perPage = 3, showDivider }) => {
	const { locale } = useRouter();
	const { data } = useSWR(
		JSON.stringify({
			docType: "post",
			locale,
		}),
		fetcher,
		{
			revalidateOnFocus: false,
			revalidateOnMount: true,
			revalidateOnReconnect: false,
		}
	);
	const [showing, setShowing] = useState(perPage);
	const { t } = useTranslation();

	const loadMore = () => {
		setShowing(showing + perPage);
	};

	const posts = data || new Array(perPage).fill({});

	return (
		<section className={`${grid.container} ${styles.section}`}>
			{showDivider && <h2 className={`h-div`}>{t("common:menu.articles")}</h2>}
			<div className={`${grid.loop} ${styles.articles}`}>
				{posts &&
					posts.slice(0, Math.min(showing, posts.length)).map((post, index) => {
						return (
							<Article
								key={`post-${index}`}
								title={post.title}
								size={2}
								lead={post.lead}
								source={moment(post.date).format("ll")}
								href={post.slug && `/posts/${post.slug}`}
								thumbnail={post.thumbnail}
							/>
						);
					})}
			</div>
			{posts.length > showing && (
				<div className={styles.loadMore}>
					<Button type="secondary" onClick={loadMore}>
						Carregar mais
					</Button>
				</div>
			)}
		</section>
	);
};

export default Articles;
