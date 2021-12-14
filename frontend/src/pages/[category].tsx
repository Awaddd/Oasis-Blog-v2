import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Article } from '../utils/types/global';
import ArticleCardWithLink from '../components/ArticleCardWithLink';
import { CategoryParams } from '../utils/types/global';
import { getArticlesByCategory } from '../services/articles';
import { getCategories } from '../services/global';
import { capitaliseFirstLetter } from '../utils/helpers';
import EmptySVG from '../../public/assets/images/empty.svg';
import Image from 'next/image';

const Index = ({ category, articles }: { category: string, articles: any }) => {

  const META = (
    <Meta
      title={`Omar Dini | ${category && capitaliseFirstLetter(category)}`}
      description="Omar Dini's personal blog"
    />
  );

  if (articles.length === 0) return (
    <Main meta={META}>
      <section className="grid items-center h-full text-center mt-lg mb-lg">
        <h1>{capitaliseFirstLetter(category)}</h1>
        <p className="text-lg font-normal mt-md">Sorry there are no posts at the moment. Please check back later!</p>
        <div className="mt-xl">
          <Image src={EmptySVG.src} alt="Empty category" height="278" width="333" />
        </div>
      </section>
    </Main>
  )

  return (
    <Main meta={META}>
      <section className="mt-lg mb-lg">
        <h1 className="text-center">{capitaliseFirstLetter(category)}</h1>
        <main className="articles 2xl:mt-xl lg:mt-[45px] mt-lg">
          {articles.map((data: Article, key: number) => (
            <ArticleCardWithLink data={data} key={key} />
          ))}
        </main>
      </section>
    </Main>
  );
};

export async function getStaticProps({ params }: CategoryParams) {
  const data = await getArticlesByCategory(capitaliseFirstLetter(params.category));

  return {
    props: {
      category: params.category || '',
      articles: (data?.categories[0].articles) || [],
    }
  }
}

export async function getStaticPaths() {
  const data = await getCategories();
  const categories = data.categories;

  return {
    paths: categories?.map((category: any) => `/${category.pluralName.toLowerCase()}`) || [],
    fallback: true,
  }
}

export default Index;
