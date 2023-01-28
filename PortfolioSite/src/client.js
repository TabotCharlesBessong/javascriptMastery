
import sanityClient  from "@sanity/client";
// import { SanityClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
	projectId: "mx9tc1uq",
	dataset: "projects",
	apiVersion: "2023-01-28",
	useCdn: true,
	token: import.meta.env.REACT_APP_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)