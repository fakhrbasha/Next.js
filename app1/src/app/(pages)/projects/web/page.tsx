import { IPost } from '@/interface/index';
// import { IPost } from "@/interface"; allow

export default async function Web() {
  async function getAllPosts() {
    const response = await fetch(
      'https://linked-posts.routemisr.com/posts?sort=-createdAt',
      {
        method: 'GET',
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdjOWQyOWY4MDNmNzZiZjAwYTViZDYyIiwiaWF0IjoxNzU2MTYwNDMwfQ.rRSa9Jcq1sMKjsljA2u9KPuhe0KjwvL6gDHct5PixZo',
        },
      }
    ).then((res) => res.json());
    return response.posts;
  }

  const posts: IPost[] = await getAllPosts();

  return (
    <div>
      <h1>Web Page</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div>
            {post.body && <h1>{post.body}</h1>}
            {post.image && (
              <img
                className="w-full h-200 object-cover"
                src={post.image}
                alt=""
              />
            )}
            <h1>--------------------------------------</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
