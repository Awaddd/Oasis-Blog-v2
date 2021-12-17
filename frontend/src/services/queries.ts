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

export const ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      subtitle
      slug
      image {
        url
      }
    }
  }
`;

export const FIRST_THREE_ARTICLES = gql`
  query GetArticles {
    articles(limit: 3) {
      id
      title
      subtitle
      slug
      image {
        url
      }
    }
  }
`;

export const HERO = gql`
  query GetHeroImage {
    heroImage {
      id
      title
      subtitle
      image {
        url
      }
    }
  }
`;

export const FEATURED_ARTICLE = gql`
  query GetFeaturedArticleID {
    featuredArticle {
      article {
        title
        subtitle
        slug
        image {
          url
        }
      }
    }
  }
`;

export const ARTICLES_BY_CATEGORY = gql`
  query GetArticlesByCategory($category: String!) {
    categories(where: { pluralName: $category }) {
      id
      name
      pluralName
      articles {
        id
        title
        subtitle
        slug
        image {
          url
        }
      }
    }
  }
`;

export const CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      pluralName
      id
    }
  }
`;
