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

      {image?.url && (
        <div className="relative h-52 sm:h-60 lg:h-80 2xl:h-96 reverse-global-padding reverse-top-global-page-padding">
          <Image layout="fill" {...imageProps} placeholder="blur" priority alt={title} className="absolute top-0 z-10 text-center text-gray-200 bg-gray-900 heroImage" />
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <div className="absolute z-10 w-full h-full hero-image-overlay"></div>
            <header className="z-10 text-center text-white md:w-4/5 md:text-gray-200 px-md py-sm md:py-0 md:px-0">
              <h1 className="text-3xl md:font-semibold md:text-4xl">{title}</h1>
            </header>
          </div>
        </div>
      )}

      <div className="md:w-3/5 md:mx-auto my-lg mb-[45px] 2xl:w-2/4">
        <div className="flex 2xl:pb-2">
          <div className="w-12 h-12 lg:w-16 lg:h-16">
            <img src="https://www.byrdie.com/thmb/j922lTh-Vn8HnmQsxSKGA0ztxw0=/756x756/filters:no_upscale():max_bytes(150000):strip_icc()/Rob-cc2d68e18be04acf90a74623c1087fd6.jpg" className="object-cover w-full h-full bg-red-300 rounded-full" />
          </div>
          <div className="flex flex-col justify-center ml-[11px]">
            <h4 className="font-semibold text-black 2xl:text-xl">Omar Dini</h4>
            <p className="text-sm -mt-xs 2xl:text-lg">November 11th, 2020</p>
          </div>
        </div>

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
