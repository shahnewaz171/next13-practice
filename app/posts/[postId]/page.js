import React from "react";

export const metadata = {
  title: "Post details",
  description: "",
};

async function Post({ params }) {
  // server side rendering (SSR)
  // const res = await fetch(
  //   `https://jsonplaceholder.typicode.com/posts/${params?.id}`,
  //   {
  //     cache: "no-cache",
  //   }
  // );

  // static side generation (SSG)
  const resLocal = await fetch(`http://localhost:3000/api/users`, {
    cache: "no-cache",
  });
  const d = await resLocal.json();

  // Incremental static generation (ISR)
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params?.postId}`,
    {
      cache: "no-cache",
    }
  );
  const data = await res.json();
  console.log("d", d);

  return (
    <div>
      <h1>Title: {data?.title}</h1>
      <p>Details : {data?.body}</p>
    </div>
  );
}

export default Post;
