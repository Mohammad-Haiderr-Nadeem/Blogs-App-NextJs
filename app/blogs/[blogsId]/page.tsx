import getMyPost from "@/lib/post";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ibrahim blog",
};

type Params = {
  params: {
    blogsId: string;
  };
};

export default async function MyBlog({ params: { blogsId } }: Params) {
  const blogData: Promise<Blogpost> = await getMyPost(blogsId);
  const blog = await blogData;

  return (
    <main>
      <article className="flex flex-col shadow my-4">
        <div className="bg-white flex flex-col justify-start p-6">
          <a
            href="#"
            className="text-blue-700 text-sm font-bold uppercase pb-4"
          >
            Technology
          </a>
          <a href="#" className="text-3xl font-bold hover:text-gray-700 pb-4">
            {blog.title}
          </a>
          <p className="text-sm pb-3">
            By{" "}
            <a href="#" className="font-semibold hover:text-gray-800">
              {blog.author}
            </a>
            , Published on {blog.date}
          </p>
          <a href="#" className="pb-6">
            {blog.content}
          </a>
        </div>
      </article>
    </main>
  );
}
