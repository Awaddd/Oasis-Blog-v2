import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getArticles, getFeaturedArticle } from '../services/articles';
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

const Index = ({ hero, featuredArticle, articles }: { hero: any, featuredArticle: any, articles: any }) => {
  return (
    <Main meta={META}>
      <section className="reverse-global-padding reverse-top-global-page-padding">
        <HeroImage data={hero} />
      </section>

      <section className="md:mt-xl mt-lg">
        <FeaturedArticle data={featuredArticle} />
      </section>

      <section className="lg:mt-xl mt-lg articles">
        <Articles data={articles} />
      </section>
    </Main>
  );
};

export async function getStaticProps({ }) {
  const data = await getArticles();
  const heroData = await getHero();
  const featuredArticleData = await getFeaturedArticle();

  return {
    props: {
      articles: data?.articles,
      hero: heroData?.heroImage,
      featuredArticle: featuredArticleData?.featuredArticle?.article
    }
  }
}

export default Index;
