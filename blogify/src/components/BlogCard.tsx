type Blog = {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  createdAt: string;
  author: string;
};
type BlogCardProps = {
  blog: Blog;
};
function BlogCard({ blog }: BlogCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-[#1E293B]">
      <div className="overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="h-52 w-full cursor-pointer object-cover transition-transform duration-500 group-hover:scale-110"/>
      </div>
      <div className="p-5">
        <span className="inline-block text-xs font-medium text-gray-500 dark:text-slate-400">
          {blog.category}
        </span>
        <h2 className="mt-2 line-clamp-2 text-lg font-bold leading-7 text-gray-900 dark:text-white">
          {blog.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500 dark:text-slate-400">
          {blog.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-gray-500 dark:border-slate-700 dark:text-slate-400">
          <span>{blog.author}</span>
          <span>{blog.createdAt}</span>
        </div>
      </div>
    </article>
  );
}
export default BlogCard;
