import { client } from "./api";
import { HERO } from "./queries";

export async function getHero() {
  const data = (await client.request(HERO)) || [];
  return data;
}
