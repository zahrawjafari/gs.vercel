import BlogCard from "./BlogCard";
import { blogData } from "./blogData";
import Footer from "./Footer";
function Home() {
  return (
    <main className="bg-[#0F172A] text-white">
      <section className="mx-auto max-w-5xl px-4 py-10 text-center sm:px-6 sm:py-12">
        <p className="mx-auto mb-4 flex h-[25px] w-fit items-center rounded-2xl border border-slate-600 bg-[#1E293B] px-3 text-xs font-medium text-slate-300">
          New: AI feature integrated
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Your own blogging
          <br />
          platform.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          This is your space to think out loud, to share what matters, and to
          write without filters. Whether it's one word or a thousand, your story
          starts right here.
        </p>
        <div className="mx-auto mt-5 flex max-w-lg items-stretch overflow-hidden rounded border border-dashed border-slate-600 bg-[#1E293B] max-sm:scale-75">
          <input
            type="text"
            placeholder="Search for blogs"
            className="h-[52px] w-full bg-transparent pl-4 text-white outline-none placeholder:text-slate-400"/>
          <div className="border-l border-dashed border-slate-600" />
          <button
            type="button"
            className="m-1.5 rounded bg-white px-8 py-2 text-black transition-all hover:scale-105">
            Search
          </button>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 overflow-x-auto">
          <a href="#" className="shrink-0 text-sm font-medium text-white">
            Home
          </a>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-white">
            Lifestyle
          </a>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-white">
            Startup
          </a>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-white">
            Technology
          </a>
          <a
            href="#"
            className="shrink-0 text-sm font-medium text-slate-400 transition hover:text-white">
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
          <div className="mb-4 text-2xl font-bold text-white sm:text-3xl">
            Never Miss a Blog!
          </div>
          <p className="mx-auto max-w-md text-sm leading-6 text-slate-400">
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
            className="mx-auto mt-6 flex h-[52px] w-full max-w-md items-center overflow-hidden rounded-lg border border-slate-700 bg-[#1E293B]">
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-400"/>
            <button
              type="submit"
              className="h-full shrink-0 bg-white px-6 text-sm font-medium text-[#0F172A] transition hover:opacity-80">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
export default Home;
