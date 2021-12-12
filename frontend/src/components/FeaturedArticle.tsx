import { useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { client } from '../services/api';
import Link from 'next/link';

const FeaturedArticle = () => {

  const { isLoading, error, data } = useQuery('FeaturedArticle', async () => await client.request(Article))

  if (isLoading) return null
  if (error || !data) return null

  const { title, slug, image } = data.featuredArticle.article

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse md:gap-[45px]">
      <div className="md:grid md:flex-1">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <header className="hidden md:block">
            <div className="grid grid-cols-2">
              <p className="justify-self-start text-primary">Featured</p>
              <p className="justify-self-end">Nov. 11</p>
            </div>
          </header>
          <h1 className="text-2xl font-semibold leading-7 md:font-bold mt-sm md:leading-10 md:underline md:text-4xl">{title}</h1>
          <Link href={`/article/${slug}`} passHref>
            <a className="featured-button">Read More</a>
          </Link>
        </div>
      </div>
      <div className="md:mt-0 md:flex-1">
        <div className="grid grid-cols-2 mx-xs mb-sm md:hidden">
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
        slug
        image {
          url
        }
      }
    }
  }
`

export default FeaturedArticle;