import { client } from "../services/api";
import { ARTICLE, ARTICLES, FEATURED_ARTICLE } from "./queries";

export async function getArticle(slug: string) {
  const data = (await client.request(ARTICLE, { slug: slug })) || [];
  return data;
}

export async function getArticles() {
  const data = (await client.request(ARTICLES)) || [];
  return data;
}

export async function getFeaturedArticle() {
  const data = (await client.request(FEATURED_ARTICLE)) || [];
  return data;
}
