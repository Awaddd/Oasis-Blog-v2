import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../../services/api';
import Markdown from 'react-markdown';

const Article = () => {

  const { query } = useRouter()
  const { slug } = query

  const { isLoading, error, data } = useQuery('article', async () => await client.request(ARTICLE, { slug: slug }));

  if (error) return <p>Could not load the article. Please try again later</p>
  if (isLoading) return null

  const { title, subtitle, content, image } = data.articles[0]

  const META = <Meta title={title} description={subtitle} />

  return (
    <Main meta={META}>

      {image?.url && (
        <div className="reverse-global-padding reverse-top-global-page-padding">
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="heroImage" />
        </div>
      )}

      <div className="md:w-2/3 md:mx-auto">
        <section className="py-md md:mt-md">
          <h1 className="font-bold">{title}</h1>
          {subtitle && <h2 className="text-xl font-medium mt-xs">{subtitle}</h2>}
        </section>

        <article className="content">
          <Markdown>{content}</Markdown>
        </article>
      </div>
    </Main>
  );
};


const ARTICLE = gql`
  query GetArticleBySlug($slug: String!) {
    articles(where: { slug: $slug }) {
      title
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
