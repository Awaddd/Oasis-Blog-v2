import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../services/api';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Article } from '../utils/types/global';
import ArticleCardWithLink from '../components/ArticleCardWithLink';

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
      <section className="grid gap-4 my-4 md:grid-cols-3">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {articles.map((data: Article, key: number) => (
              <ArticleCardWithLink data={data} key={key} />
            ))}
          </>
        )}
      </section>
    </Main>
  );
};

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
