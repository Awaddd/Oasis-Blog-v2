import { gql } from "graphql-request";

export const ARTICLE = gql`
  query GetArticleBySlug($slug: String!) {
    articles(where: { slug: $slug }) {
      title
      id
      title
      subtitle
      image {
        url
        width
        height
        alternativeText
        mime
      }
      content
    }
  }
`;
