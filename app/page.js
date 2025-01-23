import getAllPost from "@/data/getAllPost";

const page = async () => {
  const posts = await getAllPost();
  console.log(posts);

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-6xl mx-auto  p-8">
        <h1 className="text-2xl font-bold  mb-6 text-center">
          Blog Posts Title
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <li key={post.id} className="border rounded-lg p-6 ">
              <div className="flex r mb-4">
                <span className="text-xl font-bold mr-2">{index + 1}.</span>
                <h2 className="text-lg">{post.title}</h2>
              </div>

              <button className="mt-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg ">
                View Details
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default page;
