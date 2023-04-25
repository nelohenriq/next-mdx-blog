import path from "path";
import fs from "fs";

export const postsPath = path.join(process.cwd(), "posts");

export const postsFileNames = fs
  .readdirSync(postsPath)
  .filter((filename) => /\.mdx?$/.test(filename));
