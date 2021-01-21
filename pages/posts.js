import React from "react";
import { Client, manageLocal } from "utils/prismicHelpers";
import { homepageToolbarDocs } from "utils/prismicToolbarQueries";
import useUpdatePreviewRef from "utils/hooks/useUpdatePreviewRef";
import useUpdateToolbarDocs from "utils/hooks/useUpdateToolbarDocs";
import { Layout, SliceZone } from "components";
import Meta from "components/Meta/Meta";
import Articles from "components/Articles/Articles";
/**
 * Homepage component
 */
const Posts = ({ menu, lang, preview }) => {
	return (
		<Layout lang={lang} menu={menu} isPreview={preview.isActive}>
			<Articles perPage={9} />
		</Layout>
	);
};

export async function getStaticProps({
	preview,
	previewData,
	locale,
	locales,
}) {
	const ref = previewData ? previewData.ref : null;
	const isPreview = preview || false;
	const client = Client();

	const menu =
		(await client.getSingle(
			"top_menu",
			ref ? { ref, lang: locale } : { lang: locale }
		)) || {};

	const { currentLang, isMyMainLanguage } = manageLocal(locales, locale);

	return {
		props: {
			menu,
			preview: {
				isActive: isPreview,
				activeRef: ref,
			},
			lang: {
				currentLang,
				isMyMainLanguage,
			},
		},
	};
}

export default Posts;
