import SocialIconBar from "./SocialIconBar";

const AboutMe = () => (
  <main className="bg-gray-900 global-padding py-lg md:py-xl">
    <div className="container mx-auto">
      <div className="items-center lg:flex">
        <article className="lg:w-1/2">
          <h2 className="text-3xl font-bold text-gray-100">Omar Dini</h2>

          <p className="text-gray-400 lg:max-w-md">
            Journalist and author, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum in sed non alias, fugiat, commodi nemo ut fugit corrupti dolorem sequi ex veniam consequuntur id, maiores beatae ipsa omnis aliquam?
          </p>

          <div className="flex items-center mt-6 -mx-2">
            <SocialIconBar />
          </div>
        </article>

        <div className="mt-8 lg:mt-0 lg:w-1/2">
          <div className="flex items-center justify-end h-64 bg-gray-800 rounded-md">
          </div>
        </div>
      </div>
    </div>
  </main>
);

export default AboutMe;