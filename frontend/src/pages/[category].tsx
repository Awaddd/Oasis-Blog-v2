import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { Article } from '../utils/types/global';
import ArticleCardWithLink from '../components/ArticleCardWithLink';
import { CategoryParams } from '../utils/types/global';
import { getArticlesByCategory } from '../services/articles';
import { getCategories } from '../services/global';
import { capitaliseFirstLetter } from '../utils/helpers';

const Index = ({ category, articles }: { category: string, articles: any }) => {

  const META = (
    <Meta
      title={`Omar Dini | ${category && capitaliseFirstLetter(category)}`}
      description="Omar Dini's personal blog"
    />
  );

  return (
    <Main meta={META}>
      <section className="articles">
        {articles.map((data: Article, key: number) => (
          <ArticleCardWithLink data={data} key={key} />
        ))}
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
