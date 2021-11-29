import { Article } from "../utils/types/global"

const ArticleCard = ({ data }: { data: Article }) => {
  const { title, subtitle, image } = data

  if (image) {
    return (
      <article className="grid cursor-pointer">
        <div className="self-end">
          {image?.url && (
            <div className="">
              <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-48" />
            </div>
          )}
        </div>
        <div className="m-md">
          <h2 className="text-2xl font-semibold leading-7">{title}</h2>
          {subtitle && <p className="text-sm mt-sm">{subtitle}</p>}
        </div>
      </article>
    )
  }

  return (
    <article className="grid border-l-4 border-pink-400 cursor-pointer px-md py-xs">
      <h2 className="text-2xl font-bold leading-7">{title}</h2>
      {subtitle && <p className="text-sm mt-sm">{subtitle}</p>}
    </article>
  )

}

export default ArticleCard