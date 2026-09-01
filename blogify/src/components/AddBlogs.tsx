import { useState } from "react";
function AddBlogs() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Lifestyle");
  const [image, setImage] = useState<File | null>(null);
  const [publishNow, setPublishNow] = useState(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Please fill in all required fields.");
      return;
    }
    alert(publishNow ? "Blog published successfully!" : "Blog saved as draft!");
    setTitle("");
    setDescription("");
    setCategory("Lifestyle");
    setImage(null);
    setPublishNow(false);
  };
  return (
    <div className="min-h-screen flex-1 bg-[#0F172A] p-6 text-white md:p-10">
      <h1 className="text-3xl font-bold">Add Blogs</h1>
      <p className="mt-2 text-sm text-slate-400">Create a new blog.</p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-3xl rounded-xl border border-slate-800 bg-[#1E293B] p-6 md:p-8"
      >
        <label className="block text-sm font-medium">Blog title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Type your blog title"
          className="mt-2 w-full rounded-lg border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />
        <label className="mt-6 block text-sm font-medium">Blog category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 rounded-lg border border-slate-700 bg-[#0F172A] px-4 py-3 text-white outline-none"
        >
          <option value="Lifestyle">Lifestyle</option>
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Finance">Finance</option>
        </select>
        <label className="mt-6 block text-sm font-medium">Blog image</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="mt-2 block w-full text-sm text-slate-400 file:mr-4 file:rounded-lg file:border-0 file:bg-white file:px-4 file:py-2 file:text-sm file:text-black"
        />
        {image && (
          <p className="mt-2 text-xs text-slate-400">Selected: {image.name}</p>
        )}
        <label className="mt-6 block text-sm font-medium">
          Blog description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Write your blog..."
          className="mt-2 min-h-[220px] w-full resize-y rounded-lg border border-slate-700 bg-[#0F172A] p-4 text-white outline-none placeholder:text-slate-500 focus:border-slate-500"
        />
        <div className="mt-5 flex items-center gap-3">
          <input
            id="publish"
            type="checkbox"
            checked={publishNow}
            onChange={(e) => setPublishNow(e.target.checked)}
            className="h-4 w-4 cursor-pointer"
          />
          <label htmlFor="publish" className="cursor-pointer text-sm">
            Publish Now
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition hover:opacity-80"
        >
          {publishNow ? "Publish Blog" : "Save Draft"}
        </button>
      </form>
    </div>
  );
}
export default AddBlogs;
