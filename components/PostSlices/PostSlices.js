import Spacer from "./Spacer/Spacer";
import BodyText from "./BodyText/BodyText";
import Image from "./Image/Image";
import Highlight from "./Highlight/Highlight";
import grid from "styles/grid.module.scss";

const Slices = ({ slices }) => {
	const outputComponents = {
		spacer: Spacer,
		body_text: BodyText,
		image: Image,
		highlight: Highlight,
	};

	return (
		<div className={grid.col}>
			{slices.map((slice, index) => {
				const Slice = outputComponents[slice.slice_type];
				return (
					<Slice
						key={`slice-${index}`}
						primary={slice.primary}
						items={slice.items}
					/>
				);
			})}
		</div>
	);
};

export default Slices;
