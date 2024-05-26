import { cn } from "~/lib/utils";
import PostsSection from "./_components/posts-section";

export interface SearchParams {
  query?: string;
  category?: string;
}

interface HomePageProps {
  searchParams: SearchParams;
}

export default async function Home(props: HomePageProps) {
  const { searchParams } = props;
  const { category, query } = searchParams

  return (
    <main className="flex flex-col gap-2 py-5 px-5">
      <div className="flex flex-col gap-3 items-center justify-center py-10 md:py-5">
        <h1 className={cn("text-6xl font-semibold")}>Folio<span className="text-primary">hive</span></h1>
        <h1 className="text-sm text-muted-foreground">Curating top 1% portfolios on the internet.</h1>
      </div>

      <PostsSection query={query} category={category} />
    </main>
  );
}
