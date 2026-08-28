function Footer() {
  return (
    <footer className="mt-6 bg-gray-100 dark:bg-[#1E293B]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
        <div className="max-w-sm text-left">
          <img src="/images/blogify.svg" alt="Blogify" className="h-9 w-auto" />
          <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 text-left sm:grid-cols-3 lg:gap-x-16">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Quick links
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Home
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Best sellers
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Offers & deals
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Contact Us
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                FAQs
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Need help?
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Delivery information
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Return & refund policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Payment methods
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Track your Order
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Follow us
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Twitter
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                Facebook
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
