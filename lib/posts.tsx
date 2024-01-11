export default async function getPosts() {
  const res = await fetch("http://localhost:8000/posts", {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    return undefined;
  }
  return res.json();
}
