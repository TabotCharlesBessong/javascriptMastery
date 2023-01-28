import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
	<div className="app__social">
		<div>
			<a
				href="https://twitter.com/CharlesTabot"
				target="_blank"
				rel="noopener noreferrer"
			>
				<BsTwitter />
			</a>
		</div>
		<div>
			<a
				href="https://facebook.com/TabotCharlesTheSecond"
				target="_blank"
				rel="noopener noreferrer"
			>
				<FaFacebookF />
			</a>
		</div>
		<div>
			<a
				href="https://www.instagram.com/tabotcharles/"
				target="_blank"
				rel="noopener noreferrer"
			>
				<BsInstagram />
			</a>
		</div>
	</div>
);

export default SocialMedia;
