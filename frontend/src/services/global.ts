import { client } from "./api";
import { CATEGORIES, HERO } from "./queries";

export async function getHero() {
  const data = (await client.request(HERO)) || [];
  return data;
}

export async function getCategories() {
  const data = (await client.request(CATEGORIES)) || [];
  return data;
}
