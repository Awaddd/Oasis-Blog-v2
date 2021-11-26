import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../services/api';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Link from 'next/link';
import FeaturedArticle from '../components/FeaturedArticle'

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = () => {

  const { isLoading, error, data } = useQuery('articles', async () => await client.request(ARTICLES));

  if (isLoading) return null

  if (error) return (
    <Main meta={META}>
      <p>Error...</p>
    </Main>
  )

  console.log(data.articles)

  const { articles } = data;

  return (
    <Main meta={META}>
      <section className="my-4">
        <FeaturedArticle />
      </section>

      <section className="grid gap-4 my-4 md:grid-cols-3">
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
      </section>
    </Main>
  );
};

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

export default Index;
