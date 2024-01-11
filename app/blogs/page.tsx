import getPosts from "@/lib/posts";
import Link from "next/link";

export default async function Blogs() {
  const postsData: Promise<Blogpost[]> = getPosts();
  const posts = await postsData;

  return (
    <main>
      {posts?.map((post) => (
        <article key={post.id}>
          <li className="list-none mt-4 text-2xl text-white/90 text-center">
            <Link className="hover:text-white" href={`/blogs/${post.id}`}>
              {post.title}
            </Link>
          </li>
        </article>
      ))}
    </main>
  );
}
