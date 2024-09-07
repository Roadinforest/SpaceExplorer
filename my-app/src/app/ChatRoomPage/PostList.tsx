import * as React from 'react';
import { Post} from './Post';

interface PostListProps {
  posts: Post[];
}

export const PostList: React.FC<PostListProps> = ({ posts }) => {

  const [avatars, setAvatars] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    const newAvatars = posts.reduce((acc, post) => {
      acc[post.id] = `/Deemo/header${Math.floor(Math.random() * 6) + 1}.png`;
      return acc;
    }, {} as { [key: string]: string });
    setAvatars(newAvatars);
  }, [posts]);

  return (
    <div className="posts mx-5">
      {posts.map((post) => (
        <Post key={post.id} post={post} avatars={avatars}></Post>
      ))}
    </div>
  );
};
