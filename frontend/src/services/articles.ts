import { client } from "../services/api";
import {
  ARTICLE,
  ARTICLES,
  ARTICLES_BY_CATEGORY,
  FEATURED_ARTICLE,
  FIRST_THREE_ARTICLES,
} from "./queries";

export async function getArticle(slug: string) {
  const data = (await client.request(ARTICLE, { slug: slug })) || [];
  return data;
}

export async function getArticles(getFirstThree?: true) {
  const data =
    (getFirstThree
      ? await client.request(FIRST_THREE_ARTICLES)
      : await client.request(ARTICLES)) || [];
  return data;
}

export async function getFeaturedArticle() {
  const data = (await client.request(FEATURED_ARTICLE)) || [];
  return data;
}

export async function getArticlesByCategory(category: string) {
  const data = (await client.request(ARTICLES_BY_CATEGORY, { category })) || [];
  return data;
}
