const Newsletter = () => (
  <div className="bg-[#304ffe] rounded-md px-lg py-lg">
    <article>
      <h2 className="text-3xl font-bold leading-9 text-gray-200">Newsletter</h2>
      <p className="text-gray-400">Stay up to date</p>
    </article>
    <form className="flex flex-col mt-lg md:flex-row">
      <input id="email" type="text" className="px-3 py-2 text-gray-700 bg-white border placeholder-gray-900 border-gray-300 rounded-[4px] focus:border-blue-500 focus:outline-none focus:ring" placeholder="Email Address" />
      <button className="px-4 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-900 border-2 border-gray-900 rounded-[4px] mt-md md:mt-0 md:ml-2 hover:bg-gray-800 focus:outline-none focus:bg-blue-600">
        Subscribe
      </button>
    </form>
  </div>
)

export default Newsletter;