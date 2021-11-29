import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../../services/api';
import Markdown from 'react-markdown';

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
  const { isLoading, error, data } = useQuery('article', async () => await client.request(ARTICLE, { id: articleid }));

  if (error) return <p>Could not load the article. Please try again later</p>
  if (isLoading) return null

  const { title, subtitle, content, image } = data.article

  return (
    <Main meta={META}>

      {image?.url && (
        <div className="reverse-global-padding reverse-top-global-page-padding">
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="heroImage" />
        </div>
      )}

      <div className="md:w-2/3 md:mx-auto">
        <section className="py-4 text-center">
          <h1 className="font-bold">{title}</h1>
          {subtitle && <h2 className="font-normal">{subtitle}</h2>}
        </section>

        <article className="content">
          <Markdown>{content}</Markdown>
        </article>
      </div>
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
