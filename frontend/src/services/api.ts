import { GraphQLClient } from "graphql-request";

const env = process.env.NODE_ENV;

let host: string = "";
let domain: string = "";

if (env === "development") {
  host = "http://localhost:1337/graphql";
  domain = "http://localhost:1337";
}

export const client = new GraphQLClient(host);
export const api = domain;
