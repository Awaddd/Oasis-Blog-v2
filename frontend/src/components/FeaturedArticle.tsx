import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { client } from '../services/api';

const FeaturedArticle = () => {

  const { data: temp } = useQuery('featuredArticleID', async () => await client.request(FeaturedArticleID))
  const { isLoading, error, data } = useQuery('featuredArticle', async () => await client.request(Article, { id: temp.featuredArticle.id }), { enabled: temp ? true : false })

  if (isLoading) return null
  if (error || !data) return null

  const { title, subtitle, image } = data.article

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      <div className="md:grid">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <div className="grid grid-cols-2">
            <p className="justify-self-start">Featured</p>
            <p className="justify-self-end">Nov. 11</p>
          </div>
          <h1 className="md:leading-10 md:underline md:text-4xl md:font-bold md:mt-sm">{title}</h1>
          {subtitle && <p className="mt-xs md:mt-sm">{subtitle}</p>}
        </div>
      </div>
      {image?.url && (
        <div className="mt-md md:mt-0">
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-64 md:h-80" />
        </div>
      )}
    </div>
  )
}

const FeaturedArticleID = gql`
  query GetFeaturedArticleID {
    featuredArticle {
      id
    }
  }
`

const Article = gql`
  query GetFeaturedArticle($id: ID!) {
    article(id: $id) {
      title
      subtitle
      image {
        url
      }
    }
  }
`

export default FeaturedArticle;