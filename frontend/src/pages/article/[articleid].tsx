import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../../services/api';

const META = (
  <Meta
    title="How to setup a blog with strapi"
    description="Article"
  />
);

const Article = () => {

  const { query } = useRouter()
  const { articleid } = query

  // const { isLoading, error, data } = useQuery('article', getArticle)
  const { isLoading, error, data } = useQuery('article', async () => await client.request(ARTICLE, { id: 1 }));

  if (error) return <p>Error...</p>
  if (isLoading) return <p>Loading...</p>

  const { title, subtitle, content, image } = data.article

  return (
    <Main meta={META}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
      {image?.url && <img src={`http://localhost:1337${image.url}`} alt="" />}
      <article>
        {content}
      </article>
    </Main>
  );
};


const ARTICLE = gql`
  query GetArticle($id: ID!) {
    article(id: $id) {
      id
      title
      subtitle
      content
      image {
        url
      }
    }
  }
`

export default Article;
