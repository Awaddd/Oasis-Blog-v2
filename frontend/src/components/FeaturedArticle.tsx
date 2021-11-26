import { useQuery } from 'react-query';
import { gql } from 'graphql-request'
import { client } from '../services/api'

const FeaturedArticle = () => {

  const { data: temp } = useQuery('featuredArticleID', async () => await client.request(FeaturedArticleID))
  const { isLoading, error, data } = useQuery('featuredArticle', async () => await client.request(Article, { id: temp.featuredArticle.id }), { enabled: temp ? true : false })

  if (isLoading) return null
  if (error) return <p>Error...</p>
  if (!data) return <p>Invalid ID</p>

  const { title, image } = data.article

  return (
    <div>
      <h1>{title}</h1>
      {image?.url && (
        <div>
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-64" />
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
      image {
        url
      }
    }
  }
`

export default FeaturedArticle;