const PostItem = ({ post }) => {
  return (
    <li 
      key={post.id}>
      {post.subject} / {post.poster}
    </li>
  );
};

export default PostItem;
