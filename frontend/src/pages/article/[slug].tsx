import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import Markdown from 'react-markdown';
import { getArticle } from '../../services/articles';
import { SSGParams } from '../../utils/types/global';

const Article = ({ article }: { article: any }) => {

  const { title, subtitle, content, image } = article

  const META = <Meta title={title} description={subtitle} images={[{
    url: image.url,
    alt: image.alternativeText,
    width: image.width,
    height: image.height,
    type: image.mime,
  }]} />

  return (
    <Main meta={META}>

      {image?.url && (
        <div className="relative h-40 sm:h-60 lg:h-80 reverse-global-padding reverse-top-global-page-padding">
          <img src={`http://localhost:1337${image.url}`} alt="cover image" className="absolute top-0 z-10 heroImage" />
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
        <article className="content">
          <Markdown>{content}</Markdown>
        </article>
      </div>

    </Main>
  );
};

export async function getStaticProps({ params }: SSGParams) {
  const data = await getArticle(params.slug);

  return {
    props: {
      article: data?.articles[0]
    }
  }
}

export default Article;
