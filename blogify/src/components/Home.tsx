import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { blogData } from "./BlogData";
import BlogCard from "./BlogCard";
import Footer from "./Footer";
function Home() {
  const categories = ["All", "Lifestyle", "Startup", "Technology", "Finance"];
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const filteredBlogs = useMemo(() => {
    return blogData.filter((blog) => {
      const search = searchTerm.toLowerCase();
      const matchesSearch =
        blog.title.toLowerCase().includes(search) ||
        blog.description.toLowerCase().includes(search);
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory]);
  const handleSearch = () => {
    setSearchTerm(searchInput);
  };
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="mx-auto mt-5 flex max-w-lg items-stretch overflow-hidden rounded border border-dashed border-slate-600 bg-[#1E293B] max-sm:scale-75"
        >
          <div className="flex w-full items-center">
            <Search size={18} className="ml-4 shrink-0 text-white" />
            <input
              type="text"
              placeholder="Search for blogs"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="h-[52px] w-full bg-transparent px-3 text-white outline-none placeholder:text-slate-400"
            />
          </div>
          <div className="border-l border-dashed border-slate-600" />
          <button
            type="submit"
            className="m-1.5 rounded bg-white px-8 py-2 text-black transition-all hover:scale-105"
          >
            Search
          </button>
        </form>
      </section>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 text-sm font-medium transition ${
                activeCategory === category
                  ? "text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {filteredBlogs.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-slate-400">No blogs found.</p>
            <button
              type="button"
              onClick={() => {
                setSearchInput("");
                setSearchTerm("");
                setActiveCategory("All");
              }}
              className="mt-4 rounded-lg bg-white px-5 py-2 text-sm text-black"
            >
              Clear Search
            </button>
          </div>
        )}
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
            className="mx-auto mt-6 flex h-[52px] w-full max-w-md items-center overflow-hidden rounded-lg border border-slate-700 bg-[#1E293B]"
          >
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="h-full min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-slate-500"
            />
            <button
              type="submit"
              className="h-full shrink-0 bg-white px-6 text-sm font-medium text-[#0F172A] transition hover:opacity-80"
            >
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
