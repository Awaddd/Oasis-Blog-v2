import { useQuery } from "react-query";
import { gql } from 'graphql-request';
import { client } from '../services/api';

const HeroImage = () => {

  const { isLoading, error, data } = useQuery('heroImage', async () => await client.request(HEROIMAGE));

  if (error) return null
  if (isLoading) return null

  const { image } = data.heroImage

  return (
    <div className="">
      <img src={`http://localhost:1337${image.url}`} alt="" className="heroImage" />
    </div>
  )
};

const HEROIMAGE = gql`
  query GetHeroImage {
    heroImage {
      id
      image {
        url
      }
    }
  }
`

export default HeroImage;