import { useEffect, useState } from "react";
import Header from "./components/Header";
import BlogCard from "./components/BlogCard";
import { blogData } from "./components/BlogData";
function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <div className="min-h-screen bg-white text-black transition-colors duration-300 dark:bg-[#0F172A] dark:text-white">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12">
          <p className="mx-auto mb-4 flex h-[25px] w-fit items-center rounded-2xl border border-slate-600 bg-[#1E293B] px-3 text-xs font-medium text-slate-300">
            New: AI feature integrated
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Your own blogging
            <br />
            platform.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 dark:text-slate-400 sm:text-base">
            This is your space to think out loud, to share what matters, and to
            write without filters. Whether it's one word or a thousand, your
            story starts right here.
          </p>
          <div className="mx-auto mt-5 flex max-w-lg items-stretch overflow-hidden rounded border border-dashed border-gray-300 dark:border-slate-600 max-sm:scale-75">
            <input
              type="text"
              placeholder="Search for blogs"
              className="h-[52px] w-full bg-transparent pl-4 outline-none dark:text-white dark:placeholder:text-slate-400"/>
            <div className="border-l border-dashed border-gray-300 dark:border-slate-600"></div>
            <button className="m-1.5 rounded bg-white px-8 py-2 text-black transition-all hover:scale-105">
              Search
            </button>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-6 overflow-x-auto">
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-black dark:text-white">
              Home
            </a>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
              Lifestyle
            </a>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
              Startup
            </a>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
              Technology
            </a>
            <a
              href="#"
              className="shrink-0 text-sm font-medium text-gray-500 hover:text-black dark:text-slate-400 dark:hover:text-white">
              Finance
            </a>
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-4 text-2xl font-bold sm:text-3xl">
              Never Miss a Blog!
            </div>
            <p className="mx-auto max-w-md text-sm leading-6 text-gray-500 dark:text-slate-400">
              Subscribe to our newsletter and get the latest blogs and updates
              delivered straight to your inbox.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const email = new FormData(form).get("email");
                if (email) {
                  alert("Your information has been submitted successfully!");
                  form.reset();
                }
              }}
              className="mx-auto mt-6 flex h-[52px] w-full max-w-md items-center overflow-hidden rounded-lg border border-gray-300 bg-white dark:border-slate-700 dark:bg-[#1E293B]">
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-black outline-none dark:text-white dark:placeholder:text-slate-400"/>
              <button
                type="submit"
                className="h-full shrink-0 bg-black px-6 text-sm font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-[#0F172A]">
                Subscribe
              </button>
            </form>
          </div>
        </section>
        <footer className="mt-6 bg-gray-100 dark:bg-[#1E293B]">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-10 sm:px-6 lg:flex-row lg:items-start lg:justify-between lg:px-8">
            <div className="max-w-sm text-left">
              <img
                src="/images/blogify.svg"
                alt="Blogify"
                className="h-9 w-auto"/>
              <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-slate-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
                unde quaerat eveniet cumque accusamus atque qui error quo enim
                fugiat?
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
                    Contact US
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
      </main>
    </div>
  );
}
export default App;
