export default async function getMyPost(blogsId: string) {
  const res = await fetch(`http://localhost:8000/posts/${blogsId}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
