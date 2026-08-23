import { useEffect, useState } from "react";
import Header from "./components/Header";
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
              className="h-[52px] w-full bg-white pl-4 text-black outline-none dark:bg-[#1E293B] dark:text-white dark:placeholder:text-slate-400"/>
            <div className="border-l border-dashed border-gray-300 dark:border-slate-600"></div>
            <button className="m-1.5 rounded bg-white px-8 py-2 text-black transition-all hover:scale-105">
              Search
            </button>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mx-auto max-w-7xl border-t border-gray-200 px-4 py-8 dark:border-slate-800 sm:px-6">
          {/* اینجا دیتای استاد قرار می‌گیرد */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"></div>
        </section>
      </main>
    </div>
  );
}
export default App;
