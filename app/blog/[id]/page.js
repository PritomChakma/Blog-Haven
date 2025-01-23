import getPost from "@/data/getPost";
import Link from "next/link";

const PostPage = async ({ params }) => {
  const { id } = params;
  const post = await getPost(id);

  return (
    <div className="min-h-screen  py-10 px-6">
      <div className="max-w-4xl mx-auto  shadow-lg rounded-lg py-6">
        <div className="bg-blue-500 text-white text-center py-6">
          <h1 className="text-3xl font-bold">Post Details</h1>
          <p className="text-sm mt-1">Post ID: {post.id}</p>
        </div>

        <div className="p-8">
          <h2 className="text-2xl   mb-4">
            <span className="font-semibold">Post Title:</span> {post.title}
          </h2>
          <p className="b-6">{post.body}</p>
        </div>

        <div className="text-center py-4">
          <Link
            href="/"
            className=" px-6 py-3 text-sm font-medium text-white bg-blue-500 rounded-lg"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
