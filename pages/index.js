import HeroSection from "@/components/home/HeroSection";
import { postsFileNames, postsPath } from "@/utils/mdxUtils";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export default function Home({ posts }) {
  console.log(posts);
  return (
    <>
      <HeroSection></HeroSection>
    </>
  );
}

export async function getStaticProps() {
  const posts = postsFileNames.map((slug) => {
    const content = fs.readFileSync(path.join(postsPath, slug));
    const { data } = matter(content);
    return { frontmatter: data, slug };
  });
  return {
    props: {
      posts: JSON.parse(JSON.stringify(posts)),
    },
  };
}
