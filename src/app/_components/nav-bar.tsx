"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { prettyFolioResponse } from "~/mockdata";
import { api } from "~/trpc/react";

const Navbar = () => {
  // hooks
  const router = useRouter();

  // queries and mutations
  const createPost = api.post.create.useMutation({
    onSuccess: () => {
      router.refresh();
    },
  });

  const handleSubmitClick = () => {
    type InsertData = {
      title: string,
      url: string,
      featuredImage: string,
      slug: string,
      category: string[],
      datePublished: string,
    }

    const dataToInsert: InsertData[] = prettyFolioResponse.map((item) => {
      return {
        title: item.title ?? "title",
        url: item.url ?? "url",
        featuredImage: item.featuredImage.url ?? "url",
        slug: item.slug ?? "slug",
        category: item.category.name ?? ["slug"],
        datePublished: item.datePublished ?? "date",
      }
    });

    for (const iterator of dataToInsert) {
      const data = iterator;
      if (data) {
        // createPost.mutate({ ...data });
      }

    }

  }

  return (
    <nav className="w-full flex flex-row items-center justify-between px-5 pt-5">
      <Link href={"/"} passHref>
        <Image width={35} height={35} src={"/foliohive.png"} alt="logo" />
      </Link>
      <Button onClick={handleSubmitClick}>Submit portfolio</Button>
    </nav>
  )
}

export default Navbar;