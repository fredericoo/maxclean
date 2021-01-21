import Articles from "components/Articles/Articles";

export default function Posts({ slice }) {
	return <Articles perPage={slice.primary.per_page} />;
}
