import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../services/api';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Link from 'next/link';

const Index = () => {

  const { query } = useRouter()
  const { category } = query

  const queryKey = `get${category}`

  const { isLoading, error, data } = useQuery(queryKey, async () => await client.request(ARTICLES, { category }), { enabled: category ? true : false });

  if (error) return (
    <p>Error...</p>
  )

  if (!data) return null

  const { articles } = data.categories[0];

  const META = (
    <Meta
      title="Omar Dini"
      description="Omar Dini's personal blog"
    />
  );

  return (
    <Main meta={META}>
      <h1 className="text-2xl font-bold">Hello World</h1>
      <section className="grid gap-4 my-4 md:grid-cols-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
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
        )}
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
  query GetArticlesByCategory($category: String!) {
    categories(where: {pluralName: $category}) {
      id
      name
      pluralName
      articles {
        id
        title
        subtitle
        image {
          url
        }
      }
    }
  }
`



export default Index;
