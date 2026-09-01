import { useState } from "react";
import Dashboard from "./Dashboard";
import AddBlogs from "./AddBlogs";
import BlogLists from "./BlogLists";
import Comments from "./Comments";
function DashboardPage() {
  const [page, setPage] = useState("Dashboard");
  return (
    <div className="flex min-h-screen bg-[#0F172A] text-white">
      <aside className="w-64 shrink-0 border-r border-slate-800 bg-[#1E293B]">
        <div className="p-6">
          <img src="/images/blogify.svg" alt="Blogify" className="h-9 w-auto" />
        </div>
        <div className="mt-4">
          <button
            onClick={() => setPage("Dashboard")}
            className={`flex w-full items-center gap-3 px-6 py-4 ${
              page === "Dashboard"
                ? "border-r-4 border-white bg-slate-700 text-white"
                : "text-slate-400"
            }`}
          >
            <span>▣</span>
            Dashboard
          </button>
          <button
            onClick={() => setPage("Add blogs")}
            className={`flex w-full items-center gap-3 px-6 py-4 ${
              page === "Add blogs"
                ? "border-r-4 border-white bg-slate-700 text-white"
                : "text-slate-400"
            }`}
          >
            <span>＋</span>
            Add blogs
          </button>
          <button
            onClick={() => setPage("Blog lists")}
            className={`flex w-full items-center gap-3 px-6 py-4 ${
              page === "Blog lists"
                ? "border-r-4 border-white bg-slate-700 text-white"
                : "text-slate-400"
            }`}
          >
            <span>☰</span>
            Blog lists
          </button>
          <button
            onClick={() => setPage("Comments")}
            className={`flex w-full items-center gap-3 px-6 py-4 ${
              page === "Comments"
                ? "border-r-4 border-white bg-slate-700 text-white"
                : "text-slate-400"
            }`}
          >
            <span>○</span>
            Comments
          </button>
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        {page === "Dashboard" && <Dashboard />}
        {page === "Add blogs" && <AddBlogs />}
        {page === "Blog lists" && <BlogLists />}
        {page === "Comments" && <Comments />}
      </main>
    </div>
  );
}
export default DashboardPage;
