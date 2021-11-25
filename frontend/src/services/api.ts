import { GraphQLClient } from "graphql-request";

const host = "http://localhost:1337/graphql";

export const client = new GraphQLClient(host);
