import { SearchIcon } from "lucide-react";
import React from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import PostsShowCase from "./_components/posts-showcase";

const postTags: string[] = [
  "All",
  "Code",
  "Nocode",
  "Dark",
  "Light",
  "Minimalist",
  "Fancy"
]

export default async function Home() {
  return (
    <main className="flex flex-col gap-2 py-5 px-5">
      <div className="flex flex-col gap-3 items-center justify-center py-10 md:py-5">
        <h1 className={cn("text-6xl font-semibold")}>Folio<span className="text-primary">hive</span></h1>
        <h1 className="text-sm text-muted-foreground">Curating top 1% portfolios on the internet.</h1>
      </div>

      <section className="w-full flex flex-row items-center md:justify-between flex-wrap py-2">
        <div>
          {
            React.Children.toArray((postTags).map((tag) => {
              return <Button variant={"ghost"}>{tag}</Button>
            }))
          }
        </div>
        <div className="relative flex flex-row items-center">
          <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9" />
        </div>
      </section>
      <PostsShowCase category="all" />
    </main>
  );
}
