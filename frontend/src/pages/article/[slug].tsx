import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import parse from 'html-react-parser';
import { getArticle, getArticles } from '../../services/articles';
import { SSGParams } from '../../utils/types/global';
import Image from 'next/image';
import { api } from '../../services/api';
import { getPlaiceholder as getPlaceholder } from "plaiceholder";
import SocialIconBar from '../../components/SocialIconBar';

type Article = {
  title: string;
  subtitle?: string;
  content: string;
  image: {
    url: string;
    alternativeText: string;
    width: number;
    height: number;
    mime: string;
  }
}

type ImageType = {
  src: string;
  type: string;
  blurDataURL: string;
}

const Article = ({ article, imageProps }: { article: Article, imageProps: ImageType }) => {

  if (!article) return <p>Sorry, could not load the article. Please try again later</p>
  const { title, subtitle, content, image } = article

  const META = <Meta title={`Omar Dini | ${title}`} description={subtitle} images={[{
    url: image.url,
    alt: image.alternativeText,
    width: image.width,
    height: image.height,
    type: image.mime,
  }]} />

  return (
    <Main meta={META}>

      {image?.url && (
        <div className="relative h-52 sm:h-60 lg:h-80 reverse-global-padding reverse-top-global-page-padding">
          <Image layout="fill" {...imageProps} placeholder="blur" priority alt={title} className="absolute top-0 z-10 text-center text-gray-200 bg-gray-900 heroImage" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <div className="absolute z-10 w-full h-full hero-image-overlay"></div>
            <header className="z-10 text-center text-white md:text-gray-200 px-md py-sm md:py-0 md:px-0">
              <h1 className="text-3xl md:font-semibold md:text-4xl">{title}</h1>
              {subtitle && <h2 className="text-xl font-normal md:text-2xl">{subtitle}</h2>}
            </header>
          </div>
        </div>
      )}

      <div className="md:w-3/5 md:mx-auto">
        <div className="mb-4 mt-md">
          <p className="font-semibold text-gray-900">Omar Dini</p>
          <p className="text-sm">Nov. 11, 2021</p>
        </div>

        <article className="prose-sm prose mt-md md:mt-lg sm:prose">
          {parse(content)}
        </article>

        <article className="flex flex-col text-center mt-md md:mt-lg">
          <p className="text-sm text-gray-900">Thanks for reading, make sure to check back for weekly updates!</p>
          <div className="flex self-center md:mt-[11px]">
            <SocialIconBar />
          </div>
        </article>
      </div>
    </Main>
  );
};

export async function getStaticProps({ params }: SSGParams) {
  const data = await getArticle(params.slug);
  const { base64, img } = await getPlaceholder(
    `${api}${data?.articles[0].image.url}`,
    { size: 10 }
  );

  return {
    props: {
      article: data?.articles[0],
      imageProps: {
        src: img.src,
        type: img.type,
        blurDataURL: base64,
      },
    }
  }
}

export async function getStaticPaths() {
  const data = await getArticles();
  const articles = data.articles;

  return {
    paths: articles?.map((article: any) => `/article/${article.slug}`) || [],
    fallback: true,
  }
}

export default Article;
