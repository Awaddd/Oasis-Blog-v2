import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import HeroImage from '../components/HeroImage';
import FeaturedArticle from '../components/FeaturedArticle';
import Articles from '../components/Articles';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = () => {

  return (
    <Main meta={META}>

      <section className="reverse-global-padding reverse-global-page-padding">
        <HeroImage />
      </section>

      <section className="my-4">
        <FeaturedArticle />
      </section>

      <section className="grid gap-4 my-4 md:grid-cols-3">
        <Articles />
      </section>
    </Main>
  );
};

export default Index;
