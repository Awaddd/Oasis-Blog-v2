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

  const { isLoading, error, data } = useQuery('article', async () => await client.request(ARTICLE, { slug: slug }), { enabled: slug ? true : false });

  if (error) return <p>Could not load the article. Please try again later</p>
  if (isLoading || !data) return null

  const { title, subtitle, content, image } = data.articles[0]

  const META = <Meta title={title} description={subtitle} />

  return (
    <Main meta={META}>

      {image?.url && (
        <div className="relative h-40 sm:h-60 lg:h-80 reverse-global-padding reverse-top-global-page-padding">
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="absolute top-0 z-10 heroImage" />
          <div className="relative z-20 grid h-full global-padding py-lg overlay">
            <div className="self-end md:w-3/5 md:mx-auto">
              <h1 className="text-4xl font-semibold leading-8 text-gray-200">{title}</h1>
              {subtitle && <h2 className="font-medium text-gray-300 mt-xs">{subtitle}</h2>}
            </div>
          </div>
        </div>
      )}


      <div className="md:w-3/5 md:mx-auto">
        <div className="mb-4 mt-md">
          <p className="font-semibold text-gray-900">Omar Dini</p>
          <p className="text-sm">Nov. 11</p>
        </div>
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
