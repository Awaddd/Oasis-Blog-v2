import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { client } from '../services/api';
import { Article } from '../utils/types/global';
import ArticleCardWithLink from './ArticleCardWithLink';

const Articles = () => {

  const { isLoading, error, data } = useQuery('articles', async () => await client.request(ARTICLES));

  if (isLoading) return null

  if (error) return <p>Error...</p>

  console.log(data.articles)

  const { articles } = data;

  return (
    <>
      {articles.map((data: Article, key: number) => (
        <ArticleCardWithLink data={data} key={key} />
      ))}
    </>
  )
}

const ARTICLES = gql`
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
`

export default Articles;