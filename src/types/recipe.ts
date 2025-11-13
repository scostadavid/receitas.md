import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export type RecipeFrontmatter = {
  title: string;
  author: string;
  time: string;
  serves: string;
  difficulty: string;
  tags: string[];
};

export type RecipePath = {
  params: {
    author: string;
    slug: string;
  };
  props: {
    frontmatter: RecipeFrontmatter;
    Content: AstroComponentFactory;
    recipesCount: number;
  };
};

export type Recipe = {
  id: string;
  title: string;
  time: string;
  serves: string;
  difficulty: string;
  author: string;
  tags: string[];
  ingredients: string[];
  steps: string[];
};
