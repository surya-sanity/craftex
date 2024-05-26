import Link from "next/link";
import NavigationToPostUrl from "./navigation-to-post-url";

interface PostFooterPropsType {
  title: string,
  url: string
  slug: string
}

const PostFooter = async (props: PostFooterPropsType) => {
  // props
  const { title, url, slug } = props;

  return (
    <div className="flex flex-row items-center w-full justify-between">
      <Link
        href={slug}
        className="font-medium text-lg">{title}</Link>
      <NavigationToPostUrl url={url} />
    </div >
  );
}

export default PostFooter;