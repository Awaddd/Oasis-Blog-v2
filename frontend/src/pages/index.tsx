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
      <section className="reverse-global-padding reverse-top-global-page-padding">
        <HeroImage />
      </section>

      <section className="md:mt-xl mt-lg">
        <FeaturedArticle />
      </section>

      <section className="lg:mt-xl mt-lg articles">
        <Articles />
      </section>
    </Main>
  );
};

export default Index;
