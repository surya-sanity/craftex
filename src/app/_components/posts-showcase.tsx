import Image from "next/image";
import Link from "next/link";
import React from "react";
import { api } from "~/trpc/server";
import PostFooter from "./post-footer";

interface PostsShowCasePropsType {
  category: string
}

async function PostsShowCase(props: PostsShowCasePropsType) {
  // props
  const { category } = props;

  // queries and mutations
  const latestPosts = await api.post.getAllPosts();

  if (!latestPosts || (latestPosts && !latestPosts.length)) {
    return <div>No posts yet</div>
  }

  return (
    <div className="w-full py-3 grid sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-5 md:gap-y-7">
      {
        React.Children.toArray(latestPosts.map((post) => {
          return (<div
            className="w-full h-full flex flex-col gap-2">
            <div className="w-full h-full flex flex-col gap-2">
              <Link
                href={`${post.slug}`}
                legacyBehavior
              >
                <div className="relative !cursor-pointer md:!min-h-[20rem] aspect-video rounded-md overflow-hidden transition-all border border-transparent hover:border-border">
                  <Image
                    src={post.featuredImage}
                    fill={true}
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    className="fade-in-40 transition-all object-contain"
                    priority
                  />
                </div>
              </Link>
              <PostFooter title={post.title} url={post.url} slug={post.slug} />
            </div>
          </div>)
        }))
      }
    </div>
  );
}

export default PostsShowCase