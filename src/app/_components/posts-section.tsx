import CategorySelection from './category-selection';
import PostsShowCase from './posts-showcase';

interface PostsSectionPropsType {
  query?: string
  category?: string;
}

const PostsSection = (props: PostsSectionPropsType) => {
  // props
  const { query, category } = props;

  return (
    <>
      <CategorySelection />
      <PostsShowCase query={query} category={category} />
    </>
  )
}

export default PostsSection