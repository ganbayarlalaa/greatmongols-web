export interface postType {
  title: string;
  description: string;
  pubDate: string;
  link: string;
}

export const getPosts = async () => {
  try {
    const response = await fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmediacenter.toastmasters.org%2Fnewsreleases%3Fpagetemplate%3Drss",
    );

    const data = await response.json();

    if (data.status !== "ok") return [];
    const limitedItems = data.items.slice(0, 8);

    const posts = limitedItems.map((post: postType) => {
      return {
        title: post.title,
        description: post.description,
        pubDate: post.pubDate,
        link: post.link,
      };
    });
    return posts;
  } catch (e) {
    return [];
  }
};
