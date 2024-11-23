import { useEffect, useState } from "react";
import { getPosts, postType } from "../api/posts";
import moment from "moment";

/* eslint-disable tailwindcss/classnames-order */
const Posts = () => {
  const [data, setData] = useState<postType[]>([]);
  const fetchData = async () => {
    const posts = await getPosts();
    setData(posts);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
          <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white lg:text-4xl">
              Нийтлэл
            </h2>
            <p className="font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Toastmasters International сайтын албан ёсны нийтлэлүүд
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {data.map((d) => (
              <a href={d.link} target="_">
                <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md dark:border-gray-700 dark:bg-gray-800">
                  <div className="mb-5 flex items-center justify-between text-gray-500">
                    <span className="bg-primary-100 text-primary-800 dark:bg-primary-200 dark:text-primary-800 inline-flex items-center rounded px-2.5 py-0.5 text-xs font-medium">
                      <svg
                        className="mr-1 size-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        ></path>
                        <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path>
                      </svg>
                      Нийтлэл
                    </span>
                    <span className="text-sm">
                      {moment(d.pubDate).format("MMMM DD, YYYY")}
                    </span>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 hover:underline dark:text-white">
                    {d.title}
                  </h2>
                  <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                    {d.description}
                  </p>
                </article>
              </a>
            ))}
          </div>
          <div className="mt-8  flex justify-center lg:mt-16">
            <a
              href="https://mediacenter.toastmasters.org/newsreleases"
              target="_"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Цааш унших...
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Posts;
