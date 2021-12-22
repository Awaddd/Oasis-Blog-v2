const Newsletter = () => (
  <div className="bg-[#304ffe] rounded-md px-lg py-lg lg:px-xl md:px-[45px] lg:py-[45px]">
    <main className="flex flex-col justify-between gap-5 lg:gap-10 lg:flex-row 2xl:gap-16">
      <article className="">
        <h2 className="text-3xl font-bold leading-9 text-gray-200">Newsletter</h2>
        <p className="font-semibold text-gray-300">Stay up to date</p>
        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore est nulla quo assumenda. Suscipit, iure!</p>
      </article>
      <form className="flex flex-col lg:self-end md:flex-row">
        <input id="email" type="text" className="px-3 py-2 text-gray-700 bg-white border placeholder-gray-900 border-gray-300 rounded-[4px] focus:border-blue-500 focus:outline-none focus:ring xl:w-96" placeholder="Email Address" />
        <button className="px-4 py-2 lg:px-lg text-sm font-semibold tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-900 shadow-md border-2 border-gray-900 rounded-[4px] mt-md md:mt-0 md:ml-2 hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:bg-blue-600">
          Subscribe
        </button>
      </form>
    </main>
  </div>
)

export default Newsletter;