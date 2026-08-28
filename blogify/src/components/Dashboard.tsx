import { FileText, Eye, MessageCircle, Plus } from "lucide-react";
function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0F172A] p-6 text-white md:p-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="mt-2 text-sm text-slate-400">
            Welcome back! Here is your blog overview.
          </p>
        </div>
        <button className="flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black">
          <Plus size={18} />
          Add Blog
        </button>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl bg-[#1E293B] p-6">
          <FileText size={24} />
          <p className="mt-4 text-sm text-slate-400">Total Blogs</p>
          <h2 className="mt-2 text-3xl font-bold">10</h2>
        </div>
        <div className="rounded-xl bg-[#1E293B] p-6">
          <Eye size={24} />
          <p className="mt-4 text-sm text-slate-400">Total Views</p>
          <h2 className="mt-2 text-3xl font-bold">1,240</h2>
        </div>
        <div className="rounded-xl bg-[#1E293B] p-6">
          <MessageCircle size={24} />
          <p className="mt-4 text-sm text-slate-400">Comments</p>
          <h2 className="mt-2 text-3xl font-bold">24</h2>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-bold">Recent Blogs</h2>
        <div className="mt-5 overflow-hidden rounded-xl bg-[#1E293B]">
          <div className="flex items-center justify-between border-b border-slate-700 p-5">
            <div>
              <h3 className="font-medium">
                A Simple Step-by-Step Guide to Managing Your Lifestyle
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Lifestyle · Jan 15, 2025
              </p>
            </div>
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs">
              Published
            </span>
          </div>
          <div className="flex items-center justify-between border-b border-slate-700 p-5">
            <div>
              <h3 className="font-medium">
                Creating an Effective Startup Roadmap
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Startup · Jan 20, 2025
              </p>
            </div>
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs">
              Published
            </span>
          </div>
          <div className="flex items-center justify-between p-5">
            <div>
              <h3 className="font-medium">
                Learning New Tech to Boost Your Software Career
              </h3>
              <p className="mt-1 text-sm text-slate-400">
                Technology · Jan 25, 2025
              </p>
            </div>
            <span className="rounded-full bg-slate-700 px-3 py-1 text-xs">
              Published
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
