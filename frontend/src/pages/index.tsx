import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../services/api';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { useEffect } from 'react';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = () => {

  const { isLoading, error, data } = useQuery('articles', async () => await client.request(ARTICLES));

  if (isLoading) return (
    <Main meta={META}>
      <p>Loading...</p>
    </Main>
  )

  if (error) return (
    <Main meta={META}>
      <p>Error...</p>
    </Main>
  )

  console.log(data.articles)

  const { articles } = data;

  return (
    <Main meta={META}>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <section className="grid grid-cols-3 gap-2 my-4">
        {articles.map(({ title, subtitle, image }: Article, key: number) => (
          <article className="grid p-4 border border-gray-400 cursor-pointer" key={key}>
            <h2 className="text-2xl font-bold">{title}</h2>
            {subtitle && <p className="m-0 text-sm font-semibold">{subtitle}</p>}
            <div className="self-end">
              {image?.url && <img src={`http://localhost:1337${image.url}`} className="mt-6 bg-red-200" />}
            </div>
          </article>
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
