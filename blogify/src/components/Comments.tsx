import { MessageCircle, Trash2 } from "lucide-react";
import { useState } from "react";
type Comment = {
  id: number;
  blog: string;
  name: string;
  comment: string;
  date: string;
  status: "Approved" | "Not Approved";
};
function Comments() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      blog: "Learning New Tech to Boost Your Software Career",
      name: "Jack London",
      comment: "Hi this blog is must to read",
      date: "4/22/2025",
      status: "Approved",
    },
    {
      id: 2,
      blog: "Enhancing Your Skills and Capturing Memorable Moments",
      name: "Peter Lawrence",
      comment: "Honestly, I did not expect this to work, but it totally did.",
      date: "4/22/2025",
      status: "Approved",
    },
    {
      id: 3,
      blog: "A Simple Step-by-Step Guide to Managing Your Lifestyle",
      name: "Michael Scott",
      comment: "This is my new comment",
      date: "4/30/2025",
      status: "Not Approved",
    },
  ]);
  const [activeTab, setActiveTab] = useState<"Approved" | "Not Approved">(
    "Approved",
  );
  const filteredComments = comments.filter(
    (comment) => comment.status === activeTab,
  );
  const handleDelete = (id: number) => {
    const confirmDelete = window.confirm("Do you want to delete this comment?");
    if (confirmDelete) {
      setComments((prev) => prev.filter((comment) => comment.id !== id));
    }
  };
  return (
    <div className="min-h-screen bg-[#0F172A] p-6 text-white md:p-10">
      <div className="flex max-w-4xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Comments</h1>
          <p className="mt-2 text-sm text-slate-400">
            Manage comments on your blogs.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setActiveTab("Approved")}
            className={`rounded-full border px-4 py-1 text-xs ${
              activeTab === "Approved"
                ? "border-white bg-white text-black"
                : "border-slate-700 text-slate-400"
            }`}
          >
            Approved
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("Not Approved")}
            className={`rounded-full border px-4 py-1 text-xs ${
              activeTab === "Not Approved"
                ? "border-white bg-white text-black"
                : "border-slate-700 text-slate-400"
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>
      <div className="mt-8 overflow-auto rounded-xl border border-slate-800 bg-[#1E293B]">
        {filteredComments.length === 0 ? (
          <div className="flex items-center gap-4 p-6">
            <MessageCircle size={24} className="text-slate-400" />
            <p className="text-slate-400">No comments in this section.</p>
          </div>
        ) : (
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-700 text-xs uppercase text-slate-400">
              <tr>
                <th className="px-5 py-4">Blog & Comment</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredComments.map((comment) => (
                <tr
                  key={comment.id}
                  className="border-b border-slate-700 last:border-b-0"
                >
                  <td className="max-w-xl px-5 py-5">
                    <p>
                      <span className="font-semibold text-white">Blog:</span>{" "}
                      <span className="text-slate-400">{comment.blog}</span>
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-white">Name:</span>{" "}
                      <span className="text-slate-400">{comment.name}</span>
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold text-white">Comment:</span>{" "}
                      <span className="text-slate-400">{comment.comment}</span>
                    </p>
                  </td>
                  <td className="px-5 py-5 text-slate-400">{comment.date}</td>
                  <td className="px-5 py-5">
                    <button
                      type="button"
                      onClick={() => handleDelete(comment.id)}
                      className="rounded-lg p-2 text-red-400 transition hover:bg-red-500/10 hover:text-red-300"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
export default Comments;
