'use client';
import LoadingScreen from '@/app/_components/LoadingScreen/LoadingScreen';
import { IPost } from '@/interface';
import { notFound, useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function postDetails() {
  const { postId } = useParams();
  const router = useRouter();
  const [postDetails, setPostDetails] = useState<IPost | null>(null);

  async function GetPostDetails() {
    const response = await fetch(
      'https://linked-posts.routemisr.com/posts/' + postId,
      {
        method: 'GET',
        headers: {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjdjOWQyOWY4MDNmNzZiZjAwYTViZDYyIiwiaWF0IjoxNzU2MTYwNDMwfQ.rRSa9Jcq1sMKjsljA2u9KPuhe0KjwvL6gDHct5PixZo',
        },
        // cache:'force-cache' SSG
        next: {
          revalidate: 10, // ISR
        },
      }
    );
    // return response.posts;
    // console.log(response.posts);
    if (response.status == 200) {
      const data = await response.json();
      setPostDetails(data?.post);
    } else {
      router.replace('/not-found');
    }
    // console.log(response);
  }
  useEffect(() => {
    GetPostDetails();
  }, []);
  //   console.log(postId);
  return (
    <div>
      <h1>Post Details</h1>
      {postDetails == null ? (
        <LoadingScreen />
      ) : (
        <div>
          {postDetails.body && <h1>{postDetails.body}</h1>}
          {postDetails.image && (
            <img
              className="w-full h-200 object-cover"
              src={postDetails.image}
              alt=""
            />
          )}
        </div>
      )}
    </div>
  );
}
