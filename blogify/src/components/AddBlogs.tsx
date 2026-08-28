function AddBlogs() {
  return (
    <div className="flex-1 bg-white p-6 text-gray-900">
      <h1 className="text-2xl font-bold">Add Blogs</h1>
      <p className="mt-2 text-gray-500">Create a new blog</p>
      <div className="mt-8 max-w-2xl">
        <input
          type="text"
          placeholder="Blog title"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none"/>
        <textarea
          placeholder="Write your blog..."
          className="mt-4 min-h-[200px] w-full rounded-lg border border-gray-300 p-4 outline-none"/>
        <button
          type="button"
          className="mt-4 rounded-lg bg-black px-6 py-3 text-white">
          Publish Blog
        </button>
      </div>
    </div>
  );
}
export default AddBlogs;
