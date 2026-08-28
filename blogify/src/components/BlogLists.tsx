import { blogData } from "./blogData";
import { Eye } from "lucide-react";
function BlogLists() {
  return (
    <div className="min-h-screen bg-[#0F172A] p-6 text-white md:p-10">
      <h1 className="text-3xl font-bold">Blog Lists</h1>
      <p className="mt-2 text-sm text-slate-400">
        Here you can see all your blogs.
      </p>
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800 bg-[#1E293B]">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="flex items-center justify-between border-b border-slate-700 p-5 last:border-b-0">
            <div>
              <h2 className="font-medium">{blog.title}</h2>
              <p className="mt-1 text-sm text-slate-400">{blog.category}</p>
            </div>
            <button className="flex items-center gap-2 text-sm text-slate-300 hover:text-white">
              <Eye size={17} />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default BlogLists;
