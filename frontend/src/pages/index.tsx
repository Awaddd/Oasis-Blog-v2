import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getArticles, getFeaturedArticle } from '../services/articles';
import { getHero } from '../services/global';
import HeroImage from '../components/HeroImage';
import FeaturedArticle from '../components/FeaturedArticle';
import ArticleCardWithLink from '../components/ArticleCardWithLink';
import { Article } from '../utils/types/global';
import AboutMe from '../components/AboutMe';

const META = (
  <Meta
    title="Omar Dini"
    description="Omar Dini's personal blog"
  />
);

const Index = ({ hero, featuredArticle, articles }: { hero: any, featuredArticle: any, articles: any }) => {
  return (
    <Main meta={META}>
      <header className="reverse-global-padding reverse-top-global-page-padding">
        <HeroImage data={hero} />
      </header>

      <div className="2xl:w-9/12 2xl:mx-auto">
        <section className="2xl:mt-xl md:mt-[45px] mt-lg">
          <FeaturedArticle data={featuredArticle} />
        </section>

        <section className="2xl:mt-xl lg:mt-[45px] mt-lg articles">
          {articles.map((data: Article, key: number) => (
            <ArticleCardWithLink data={data} key={key} />
          ))}
        </section>

        <section className="2xl:mt-xl lg:mt-[45px] mt-lg reverse-global-padding">
          <AboutMe />
        </section>
      </div>
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
