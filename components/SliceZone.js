import React, { useState, useRef } from "react";
import {
	Quote,
	Hero,
	CardSection,
	BigCard,
	TextColumn,
	ImageSection,
	Spacer,
	Heading,
	Posts,
} from "./slices";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Popup } from "components/Popup/Popup";

const SliceZone = ({ sliceZone }) => {
	const [popup, setPopup] = useState();
	let popupRef = useRef();
	const onPopup = (content) => {
		setPopup(content);
		if (content) {
			disableBodyScroll(popupRef);
		} else {
			enableBodyScroll(popupRef);
		}
	};

	return (
		<>
			{sliceZone.map((slice, index) => {
				switch (slice.slice_type) {
					case "hero":
						return <Hero slice={slice} key={`slice-${index}`} />;
					case "card_section":
						return (
							<CardSection
								handleCta={onPopup}
								slice={slice}
								key={`slice-${index}`}
							/>
						);
					case "big_card":
						return (
							<BigCard
								handleCta={onPopup}
								slice={slice}
								key={`slice-${index}`}
							/>
						);
					case "inspirational_quote":
						return <Quote slice={slice} key={`slice-${index}`} />;
					case "heading":
						return <Heading slice={slice} key={`slice-${index}`} />;
					case "text_column":
						return <TextColumn slice={slice} key={`slice-${index}`} />;
					case "image_section":
						return <ImageSection slice={slice} key={`slice-${index}`} />;
					case "spacer":
						return (
							<Spacer key={`slice-${index}`} height={slice.primary.height} />
						);
					case "posts":
						return <Posts key={`slice-${index}`} slice={slice} />;
					default:
						return null;
				}
			})}
			{popup && (
				<Popup
					ref={popupRef}
					handleClose={() => onPopup(null)}
					content={popup}
				/>
			)}
		</>
	);
};

export default SliceZone;
