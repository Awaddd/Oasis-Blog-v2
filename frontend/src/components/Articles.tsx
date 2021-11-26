import { gql } from 'graphql-request';
import { useQuery } from 'react-query';
import { client } from '../services/api';
import Link from 'next/link';

const Articles = () => {

  const { isLoading, error, data } = useQuery('articles', async () => await client.request(ARTICLES));

  if (isLoading) return null

  if (error) return <p>Error...</p>

  console.log(data.articles)

  const { articles } = data;

  return (
    <>
      {articles.map(({ id, title, subtitle, image }: Article, key: number) => (
        <Link href={`/article/${id}`} key={key}>
          <article className="grid p-4 border border-gray-400 cursor-pointer">
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="m-0 text-sm font-semibold">{subtitle}</p>}
            <div className="self-end">
              {image?.url && <img src={`http://localhost:1337${image.url}`} className="h-48 mt-6" />}
            </div>
          </article>
        </Link>
      ))}
    </>
  )
}

type Article = {
  id: number,
  title: string,
  subtitle?: string,
  image?: {
    url: string
  }
}

const ARTICLES = gql`
  query GetArticles {
    articles {
      id
      title
      subtitle
      image {
        url
      }
    }
  }
`

export default Articles;