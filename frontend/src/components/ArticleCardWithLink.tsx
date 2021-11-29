import { forwardRef } from 'react';
import Link from 'next/link';
import ArticleCard from './ArticleCard';
import { Article } from '../utils/types/global';

type LinkProps = {
  data: Article
};

const ArticleCardWithLink = forwardRef<HTMLDivElement, LinkProps>(({ data }, ref) => (
  <Link href={`/article/${data.slug}`} passHref>
    <div ref={ref}>
      <ArticleCard data={data} />
    </div>
  </Link>
));

export default ArticleCardWithLink