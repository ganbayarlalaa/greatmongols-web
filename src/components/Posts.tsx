import { posts } from "../data/posts";

const Posts = () => {
  return (
    <section id="posts" className="bg-white dark:bg-gray-800">
      <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
        <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Мэдээ мэдээлэл
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {posts.map((post, i) => (
            <a href={post.link}>
              {" "}
              <img
                key={`${i}-key`}
                className="size-80 rounded-lg object-cover hover:brightness-50"
                src={post.image}
                alt={`post-${i}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Posts;
