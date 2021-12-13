import { client } from "../services/api";
import { ARTICLE } from "./queries";

export async function getArticle(slug: string) {
  const data = (await client.request(ARTICLE, { slug: slug })) || [];
  return data;
}
