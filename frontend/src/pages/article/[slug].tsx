import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import parse from 'html-react-parser';
import { getArticle, getArticles } from '../../services/articles';
import { SSGParams } from '../../utils/types/global';
import Image from 'next/image';
import { api } from '../../services/api';
import { getPlaiceholder as getPlaceholder } from "plaiceholder";
import ArticleFooter from '../../components/ArticleFooter';

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
    <Main meta={META} color="bg-slate-50" classes="pb-lg" footer={<ArticleFooter />} >

      <div className="lg:w-3/5 md:mx-auto my-lg mb-[45px] 2xl:w-2/4">

        {image?.url && (
          <div className="relative h-52 sm:h-60 lg:h-80 2xl:h-96 mt-md">
            <Image layout="fill" {...imageProps} placeholder="blur" priority alt={title} className="absolute top-0 z-10 text-center text-gray-200 bg-gray-900 rounded-lg heroImage" />
            <div className="absolute top-0 left-0 grid w-full h-full">
              <div className="absolute z-10 w-full h-full rounded-lg hero-image-overlay"></div>
              <div className="z-10 flex flex-col w-full h-full text-center text-white px-md py-sm">
                <header className="flex items-center justify-center flex-1 w-11/12 mx-auto">
                  <h1 className="text-2xl tracking-tight md:text-3xl md:font-semibold lg:text-4xl 2xl:text-5xl">{title}</h1>
                </header>
                <footer className="flex items-end w-full">
                  <div className="flex justify-between w-full">
                    <div className="relative flex items-center">
                      <span className="text-sm font-normal mt-md 2xl:text-normal">Omar Dini</span>
                    </div>
                    <span className="text-sm mt-md 2xl:text-normal">November 11th, 2020</span>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        )}

        <article className="!max-w-full prose-sm md:prose sm:prose 2xl:prose-xl mt-8">
          {parse(content)}
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
