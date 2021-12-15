import Link from 'next/link';

const FeaturedArticle = ({ data }: { data: any }) => {

  const { title, slug, image } = data

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse md:gap-[45px]">
      <div className="md:grid md:flex-1">
        <div className="text-center md:justify-self-start md:text-left mt-sm md:mt-md">
          <header className="hidden md:block">
            <div className="grid grid-cols-2">
              <p className="justify-self-start text-primary">Featured</p>
              <p className="justify-self-end">Nov. 11</p>
            </div>
          </header>
          <h1 className="text-xl font-bold leading-7 text-gray-800 md:font-bold mt-sm lg:mt-md md:leading-10 md:underline md:text-4xl 2xl:w-9/12">{title}</h1>
          <Link href={`/article/${slug}`} passHref>
            <a className="shadow-sm featured-button shadow-primary/50 hover:shadow-none">Read More</a>
          </Link>
        </div>
      </div>
      <div className="md:mt-0 md:flex-1">
        <div className="grid grid-cols-2 mx-xs mb-sm md:hidden">
          <p className="justify-self-start text-primary">Featured</p>
          <p className="justify-self-end lg:hidden">Nov. 11</p>
        </div>
        <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-48 rounded-lg sm:rounded-md sm:h-52 md:h-64 lg:h-80" />
      </div>
    </div>
  )
}

export default FeaturedArticle;