export default async function getAllPost() {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts");
  return result.json();
}
