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
              {[
                "Home",
                "Best sellers",
                "Offers & deals",
                "Contact Us",
                "FAQs",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Need help?
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {[
                "Delivery information",
                "Return & refund policy",
                "Payment methods",
                "Track your Order",
                "Contact Us",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
              Follow us
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              {["Instagram", "Twitter", "Facebook", "YouTube"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
