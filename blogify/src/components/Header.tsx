import { Search, Moon, Sun } from "lucide-react";
type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};
function Header({ darkMode, setDarkMode }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white dark:border-slate-800 dark:bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="/" className="shrink-0">
          <img
            src="/images/blogify.svg"
            alt="Blogify"
            className="h-8 w-auto object-contain sm:h-10"/>
        </a>
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Search"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-slate-800 sm:h-10 sm:w-10">
            <Search size={18} />
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setDarkMode(!darkMode)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:bg-gray-100 dark:border-slate-700 dark:text-gray-300 dark:hover:bg-slate-800 sm:h-10 sm:w-10">
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            type="button"
            className="flex h-9 items-center justify-center rounded-full bg-black px-4 text-sm font-medium text-white dark:bg-white dark:text-[#0F172A] sm:h-10 sm:px-5">
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
