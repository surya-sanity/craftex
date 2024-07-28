import Image from "next/image";
import Link from "next/link";
import React from "react";
import { api } from "~/trpc/server";
import PostFooter from "./post-footer";

interface PostsShowCasePropsType {
  query?: string;
  category?: string;
}

async function PostsShowCase(props: PostsShowCasePropsType) {
  // props
  const { query, category } = props;

  // queries and mutations
  const latestPosts = await api.post.getAllPosts({ category, query });

  if (!latestPosts || (latestPosts && !latestPosts.length)) {
    return (
      <div className="flex min-h-[30vh] items-center justify-center">
        {query ? (
          query.length ? (
            <div className="flex flex-col items-center gap-2">
              <div>No results for</div>
              <div className="text-sm text-muted-foreground">
                &quot;{query}&quot;
              </div>
            </div>
          ) : (
            "No posts yet"
          )
        ) : null}
      </div>
    );
  }

  return (
    <div className="grid w-full gap-x-5 gap-y-2 py-3 sm:grid-cols-2 md:grid-cols-3 md:gap-y-10">
      {React.Children.toArray(
        latestPosts.map((post) => {
          return (
            <div className="flex h-full w-full flex-col gap-2 rounded-md border border-transparent transition-all">
              <div className="flex h-full w-full flex-col gap-2">
                <div className="relative aspect-video overflow-hidden rounded-md border border-transparent transition-all hover:border-border md:!min-h-[20rem]">
                  <Image
                    src={post.featuredImage}
                    fill={true}
                    alt={post.title}
                    sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,33vw"
                    className="object-contain transition-all fade-in-40"
                    priority
                  />
                </div>
                <PostFooter
                  title={post.title}
                  url={post.url}
                  slug={post.slug}
                />
              </div>
            </div>
          );
        }),
      )}
    </div>
  );
}

export default PostsShowCase;
