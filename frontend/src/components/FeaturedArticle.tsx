import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { client } from '../services/api';

const FeaturedArticle = () => {

  const { isLoading, error, data } = useQuery('FeaturedArticle', async () => await client.request(Article))

  if (isLoading) return null
  if (error || !data) return null

  const { title, subtitle, image } = data.featuredArticle.article

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4">
      <div className="md:grid">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <header className="hidden md:block">
            <div className="grid grid-cols-2">
              <p className="justify-self-start text-primary">Featured</p>
              <p className="justify-self-end lg:hidden">Nov. 11</p>
            </div>
          </header>
          <h1 className="text-2xl font-bold leading-7 mt-sm md:leading-10 md:underline md:text-4xl">{title}</h1>
        </div>
      </div>
      <div className="mt-md md:mt-0">
        <div className="grid grid-cols-2 mb-xs md:hidden">
          <p className="justify-self-start text-primary">Featured</p>
          <p className="justify-self-end lg:hidden">Nov. 11</p>
        </div>
        <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-48 rounded-lg sm:rounded-md sm:h-52 md:h-64 lg:h-80" />
      </div>
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