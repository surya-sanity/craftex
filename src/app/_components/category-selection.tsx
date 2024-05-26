"use client"

import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { PostsCategory } from "~/types";

const CategorySelection = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get('query') ?? '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') ?? 'All');

  useEffect(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('query', searchTerm);
    if (selectedCategory) params.set('category', selectedCategory);
    router.replace(`/?${params.toString()}`);
  }, [searchTerm, selectedCategory, router]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (category: PostsCategory) => {
    setSelectedCategory(category);
  };

  return <>
    <section className="w-full flex flex-row items-center md:justify-between flex-wrap py-2">
      <div>
        {
          React.Children.toArray((Object.values(PostsCategory)).map((tag) => {
            const isSelected = selectedCategory === tag;
            return <Button variant={!isSelected ? "ghost" : "default"} onClick={() => handleCategoryChange(tag)}>{tag}</Button>
          }))
        }
      </div>
      <div className="relative flex flex-row items-center">
        <SearchIcon className="absolute left-3 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search" className="pl-9"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </section>
  </>
}

export default CategorySelection;