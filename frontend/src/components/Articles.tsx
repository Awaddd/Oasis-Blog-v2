import { Article } from '../utils/types/global';
import ArticleCardWithLink from './ArticleCardWithLink';

const Articles = ({ articles }: { articles: any }) => (
  <>
    {articles.map((data: Article, key: number) => (
      <ArticleCardWithLink data={data} key={key} />
    ))}
  </>
);

export default Articles;