import { MessageCircle } from "lucide-react";
function Comments() {
  return (
    <div className="min-h-screen bg-[#0F172A] p-6 text-white md:p-10">
      <h1 className="text-3xl font-bold">Comments</h1>
      <p className="mt-2 text-sm text-slate-400">
        Manage comments on your blogs.
      </p>
      <div className="mt-8 rounded-xl border border-slate-800 bg-[#1E293B]">
        <div className="flex items-center gap-4 border-b border-slate-700 p-5">
          <MessageCircle size={24} className="text-slate-400" />
          <div>
            <h2 className="font-medium">No comments yet</h2>
            <p className="mt-1 text-sm text-slate-400">
              Comments from your readers will appear here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Comments;
