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
          <h2 className="text-2xl font-semibold leading-6">{title}</h2>
          {subtitle && <p className="text-sm mt-sm">{subtitle}</p>}
        </div>
      </article>
    )
  }

  return (
    <article className="grid p-4 border border-gray-400 cursor-pointer">
      <h2 className="text-2xl font-bold">{title}</h2>
      {subtitle && <p className="m-0 text-sm font-semibold">{subtitle}</p>}
    </article>
  )

}

export default ArticleCard