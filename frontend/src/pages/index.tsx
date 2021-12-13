import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getArticles } from '../services/articles';
import { getHero } from '../services/global';
import HeroImage from '../components/HeroImage';
import FeaturedArticle from '../components/FeaturedArticle';
import Articles from '../components/Articles';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = ({ articles, hero }: { articles: any, hero: any }) => {
  return (
    <Main meta={META}>
      <section className="reverse-global-padding reverse-top-global-page-padding">
        <HeroImage hero={hero} />
      </section>

      <section className="md:mt-xl mt-lg">
        <FeaturedArticle />
      </section>

      <section className="lg:mt-xl mt-lg articles">
        <Articles articles={articles} />
      </section>
    </Main>
  );
};

export async function getStaticProps({ }) {
  const data = await getArticles();
  const heroData = await getHero();

  return {
    props: {
      articles: data?.articles,
      hero: heroData?.heroImage
    }
  }
}

export default Index;
