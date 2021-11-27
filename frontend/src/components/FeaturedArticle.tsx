import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { client } from '../services/api';

const FeaturedArticle = () => {

  const { isLoading, error, data } = useQuery('FeaturedArticle', async () => await client.request(Article))

  if (isLoading) return null
  if (error || !data) return null

  const { title, subtitle, image } = data.featuredArticle.article

  return (
    <div className="md:grid md:grid-cols-2 md:gap-4">
      <div className="md:grid">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <div className="grid grid-cols-2">
            <p className="justify-self-start text-primary">Featured</p>
            <p className="justify-self-end lg:hidden">Nov. 11</p>
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

const Article = gql`
  query GetFeaturedArticleID {
    featuredArticle {
      article {
        title
        subtitle
        image {
          url
        }
      }
    }
  }
`

export default FeaturedArticle;