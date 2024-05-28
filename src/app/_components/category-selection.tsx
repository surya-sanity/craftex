"use client";

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { PostsCategory } from "~/types";

const CategorySelection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("query") ?? "");
  const [selectedCategory, setSelectedCategory] = useState<PostsCategory>(
    (searchParams.get("category") as PostsCategory) ?? PostsCategory.All,
  );

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("query", searchTerm);
    if (selectedCategory) params.set("category", selectedCategory);

    router.replace(`/?${params.toString()}`);
  }, [searchTerm, selectedCategory, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category: PostsCategory) => {
    setSelectedCategory(category);
    setSearchTerm("");
  };

  return (
    <>
      <section className="flex w-full flex-row flex-wrap-reverse items-center gap-5 py-2 md:flex-wrap md:justify-between">
        <div className="flex flex-row flex-wrap gap-2">
          {React.Children.toArray(
            Object.values(PostsCategory).map((tag) => {
              let isSelected: boolean | undefined;
              if (Object.values(PostsCategory).includes(selectedCategory)) {
                isSelected = selectedCategory === tag;
              }
              return (
                <Button
                  variant={!isSelected ? "ghost" : "default"}
                  size={"sm"}
                  className={cn("rounded-full", {
                    "bg-transparent text-muted-foreground": !isSelected,
                    "bg-primary": isSelected,
                  })}
                  onClick={() => handleCategoryChange(tag)}
                >
                  {tag}
                </Button>
              );
            }),
          )}
        </div>
        <div className="relative flex w-full flex-row items-center md:w-auto">
          <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search"
            className="pl-9"
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </section>
    </>
  );
};

export default CategorySelection;
