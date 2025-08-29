> CSR (Client-Side Rendering) in Next.js and Hydration

- When you use CSR in Next.js:
- The server sends back an almost empty HTML shell + a JavaScript bundle.
- The browser downloads and executes that JavaScript.
- Then React kicks in and starts the process called Hydration.
  > What is Hydration?
- Hydration is the process where React takes the static HTML (that came from the server) and attaches React’s Virtual DOM + event listeners to make it interactive.
- Before hydration → you only see static content (sometimes just a loading spinner).
- After hydration → buttons, forms, hooks, state, and all React features start working.
  > Steps in CSR + Hydration:
- Browser requests page → server responds with an HTML shell + JS.
- Browser renders HTML → user sees the basic structure (not interactive yet).
- JavaScript loads → React starts hydration.
- Hydration → React “binds” static DOM with its Virtual DOM, adding events and interactivity.

```jsx
'use client';

export default function Home() {
  return (
    <div>
      <h1>Hello CSR!</h1>
      <button onClick={() => alert('Clicked!')}>Click me</button>
    </div>
  );
}
```

- Step 1: User first sees the text Hello CSR!.
- Step 2: The button doesn’t work until hydration happens.
- Step 3: After hydration → clicking the button triggers the alert.

## Routing in Next.js

- create your component directory named route and insert file page.tsx
- must named page
- create RFC and change name function to you need name route and insert your code
- bs kda
  ![Files](image.png)

```tsx
import React from 'react';

export default function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
```

- **_routeing named folder name not function name_**

### Create Layout

- like react take children as props
- in next.js take children as props
- create layout.tsx in your router folder
  ![Layout](image-2.png)
- insert code
- this code take children

```tsx
import React from 'react';
interface IProjectLayout {
  children: React.ReactNode;
}
export default function ProjectLayout({ children }: IProjectLayout) {
  return (
    <div>
      <h1>Project Layout</h1>
      {children}
      // Project Layout // // children may web or android and Ios
    </div>
  );
}
```

- (pages) -> this () named grouping folder to ignore pages route pages/project/web .... to projects/web
- _components -> this _ define this folder don't take route
  > create nav and footer
- nav and footer component and add in main layout.tsx

```tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="container min-h-[60vh] p-5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
```

- navigate router in next use redirect in next.config.ts

```tsx
module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
        // permanent : true means that the redirect always or false that is mean that the redirect is temporary cache not store in the browser
      },
    ];
  },
};
```

- source: the url you want to redirect from
- destination: the url you want to redirect to
- permanent: if you want to make the redirect permanent, you can set it to true

## Dynamic Routing

/product/productId(1sdfssdfsdvc)

- create directory product and and insert directory productId like this [productId] this means dynamic routing
- create page.tsx in product/[productId] and change name function as you like
  > i need get id in url
  > `hock run in client component not run in server component`
- use `use client`

```tsx
'use client';
import { useParams } from 'next/navigation';
import React from 'react';

export default function productDetails() {
  const params = useParams();
  return (
    <div>
      <h1>productDetails</h1>
      <h2 className="text-3xl">URL : {params.productId}</h2>
    </div>
  );
}
```

- client side rendering in next difference client side rendering in react

## Handle Page Not Found

- by default next have a notfound page and you can handle it
- create file `not-found.tsx` must same this
- insert code

---

## API

### Loading Screen

- create file behind any layout page named loading.tsx and insert code
- you can create component and use it in loading.tsx

#### Make interface

- make file interface and insert code to create types for api
- IPost.ts

```ts
import { IComment } from './Comment';
import { IUser } from './User';

export interface IPost {
  _id: string;
  body?: string;
  image?: string;
  user: IUser;
  createdAt: string;
  comments: IComment[];
  id: string;
}
// website json to ts
```

- IUser.ts

```ts
export interface IUser {
  _id: string;
  name: string;
  photo: string;
}
```

- IComment.ts

```ts
import { IUser } from './User';
export interface IComment {
  _id: string;
  content: string;
  commentCreator: IUser;
  post: string;
  createdAt: string;
}
```

- you can make file index.ts ind export all interface to make this primary

```ts
export * from '@/interface/Post';
export * from '@/interface/User';
export * from '@/interface/Comment';
```

### fetch api

- in next use fetch api to get data from server
  ![RoutePostDetails](image-3.png)

```jsx
import { IPost } from '@/interface/index';
import Link from 'next/link';
// import { IPost } from "@/interface"; allow

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
```

> now we need to get post details

- we need to convert this page to `client`
- in posts -> postId

```tsx
'use client';
```

- use client because use hooks
- get url from useParams

```tsx
const { postId } = useParams();
```

- crete state because now `use client` and this state may be null or IPost (Generic)

```tsx
const [postDetails, setPostDetails] = useState<IPost | null>(null);
```

- use Effect to call this api in componentDidMount

```tsx
'use client';
import LoadingScreen from '@/app/_components/LoadingScreen/LoadingScreen';
import { IPost } from '@/interface';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

export default function postDetails() {
  const { postId } = useParams();
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
      }
    ).then((res) => res.json());
    // return response.posts;
    // console.log(response.posts);
    setPostDetails(response?.post);
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
```

> useQuery -> in Next use can make caching without useQuery

```tsx
cache: 'force-cache';
```

- this mean if you add new post not add in page always same data SSG
  > next have revalidate

```tsx
next: {
          revalidate: 10,
        },
```

- after 10 seconds page reload and add new post
  > senario

1. revalidate 10 sec

- now chick in home and load api and wait 10 sec
- then click to about and return to home
- you show same data and server show you need a new data then store new data in server
- and you return to about and go again to home now show new data

## Custom notfound

- in project/web if search a notfound url show original notfound and full screen same code
- here in project crete `[...missing]` folder and in this folder create file name page.tsx
- insert rfc name notFound and in this file insert

```tsx
import { notFound } from 'next/navigation';
import React from 'react';

export default function NotFound() {
  notFound();
}
```

- and add not-found.tsx in project
- `[...missing]` this mean return first not-found behind this [...missing] -> dynamic routing
  > when click invalid id in post details need to show not-found not run loading

```tsx
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
    try {
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
    } catch (error) {
      router.replace('/not-found');
    }
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
```

## Image enhancer

- use extensions webpack image
- next use lazy loading load one by one

```tsx
<img src={product.imageCover} className="w-full h-100 object-cover " />
```

- here not use img use `Image` tag from next

```tsx
<Image
  src={product.imageCover}
  className="w-full h-100 object-cover "
  alt="image"
/>
```

### Error in photo

- 3d m3aya

1.

```bash
Runtime Error

Image with src "https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg" is missing required  "width" property.
```

- add width to image

```tsx
<Image
  width={10}
  src={product.imageCover}
  className="w-full h-100 object-cover "
  alt="image"
/>
```

2.

```bash
Invalid src prop (https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg) on `next/image`, hostname "ecommerce.routemisr.com" is not configured under images in your `next.config.js`
See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
```

- in next.config.ts
- image contain 4 thing

1. protocol : https
2. hostname : ecommerce.routemisr.com
3. pathname : Route-Academy-products
4. image name : 1680403397402-cover.jpeg

```tsx
const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'ecommerce.routemisr.com',
        protocol: 'https',
        pathname: '/Route-Academy-products/**',
      },
    ],
  },
};
```

```ts
pathname: '/Route-Academy-products/**';
```

- `**` mean any photo in this path
  **Take Care**

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'ecommerce.routemisr.com',
        protocol: 'https',
        pathname: '/Route-Academy-products/**',
      },
    ],
  },
};

module.exports = {
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/projects/web',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- if you keep this it not running because module export make override the nextConfig

> make it

```ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'ecommerce.routemisr.com',
        protocol: 'https',
        pathname: '/Route-Academy-products/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/projects',
        destination: '/projects/web',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

- this output images
  ![output image](image-4.png)

- while increase the width and height of Image this image good

```tsx
<Image
  height={1000}
  width={1000}
  src={product.imageCover}
  className="w-full h-100 object-cover "
  alt="image"
/>
```

![after inc](image-5.png)

- follow network img

## Shedcn

- in classname

```tsx
classname={cn("shadow-2xl","p-2",post.image?"bg-red-200" : "bg-blue-200")}
```

```bash
npx shadcn@latest add button
```

- create folder name component and get it in your code
- add custom component
