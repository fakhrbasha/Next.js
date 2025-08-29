import { Button } from '@/components/ui/button';
import { IPost } from '@/interface/index';
import Link from 'next/link';
// import { IPost } from "@/interface"; allow
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
export default async function Home() {
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
      <h1>Home Page</h1>
      <Carousel className="w-24">
        <CarouselContent>
          <CarouselItem>fakhr</CarouselItem>
          <CarouselItem>basha</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <Button variant={'outline'}>Click</Button>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link key={post._id} href={'/posts/' + post._id}>
            {post.body && <h1>{post.body}</h1>}
            {post.image && (
              <img
                className="w-full h-200 object-cover"
                src={post.image}
                alt=""
              />
            )}
            <h1>--------------------------------------</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
