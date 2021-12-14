import { Article } from "../utils/types/global"

const ArticleCard = ({ data }: { data: Article }) => {
  const { title, subtitle, image } = data

  if (image) {
    return (
      <article className="grid cursor-pointer">
        {image?.url && (
          <div className="">
            <img src={`http://localhost:1337${image.url}`} alt="cover image" className="object-cover w-full h-48 rounded-lg" />
          </div>
        )}
        <div className="mt-2.5 mx-2.5">
          <h2 className="text-xl font-bold leading-7 text-gray-800">{title}</h2>
          {subtitle && <p className="font-medium md:mt-xs">{subtitle}</p>}
        </div>
      </article>
    )
  }

  return (
    <article className="h-48 border-l-4 shadow cursor-pointer border-primary py-lg my-sm md:my-0" style={{ paddingLeft: "26px", paddingRight: "26px" }}>
      <h2 className="text-2xl font-semibold leading-7">{title}</h2>
      {subtitle && <p className="font-medium mt-xs">{subtitle}</p>}
    </article>
  )

}

export default ArticleCard