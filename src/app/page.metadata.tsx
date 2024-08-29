import type { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Videoglancer - Convert YouTube Videos to PDFs",
    description:
      "Simplify your note-taking process with Videoglancer. Convert YouTube videos into PDFs for easy studying. Try it now!",
    robots:
      "index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large",
    alternates: {
      canonical: "https://videoglancer.top/",
    },
  };
};
