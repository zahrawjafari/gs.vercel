import { Search } from "lucide-react";

type HeaderProps = {
  setPage: (value: string) => void;
};

function Header({ setPage }: HeaderProps) {
  return (
    <header className="border-b border-slate-800 bg-[#0F172A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setPage("home")}>
          <img
            src="/images/blogify.svg"
            alt="Blogify"
            className="h-8 w-auto sm:h-10"
          />
        </button>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-white"
          >
            <Search size={18} />
          </button>

          <button
            type="button"
            onClick={() => setPage("dashboard")}
            className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
          >
            Dashboard
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
