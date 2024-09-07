import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { Post } from './Chat';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpSolid, faComment as faCommentSolid, faShare as faShareSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular, faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons';

interface ChatListProps {
  posts: Post[];
}

export const ChatList: React.FC<ChatListProps> = ({ posts }) => {
  const [likedPosts, setLikedPosts] = React.useState<Set<string>>(new Set());
  const [commentedPosts, setCommentedPosts] = React.useState<Set<string>>(new Set());
  const [sharedPosts, setSharedPosts] = React.useState<Set<string>>(new Set());
  const [avatars, setAvatars] = React.useState<{ [key: string]: string }>({});

  React.useEffect(() => {
    const newAvatars = posts.reduce((acc, post) => {
      acc[post._id] = `/Deemo/header${Math.floor(Math.random() * 6) + 1}.png`;
      return acc;
    }, {} as { [key: string]: string });
    setAvatars(newAvatars);
  }, [posts]);

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newLikedPosts = new Set(prev);
      if (newLikedPosts.has(postId)) {
        newLikedPosts.delete(postId);
      } else {
        newLikedPosts.add(postId);
      }
      return newLikedPosts;
    });
  };

  const toggleComment = (postId: string) => {
    setCommentedPosts((prev) => {
      const newCommentedPosts = new Set(prev);
      if (newCommentedPosts.has(postId)) {
        newCommentedPosts.delete(postId);
      } else {
        newCommentedPosts.add(postId);
      }
      return newCommentedPosts;
    });
  };


  return (
    <div className="posts mx-5">
      {posts.map((post) => (
        <div
          key={post._id}
          className="post bg-white p-5 mb-5 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2.5">
            <Avatar
              alt="Deemo"
              src={avatars[post._id]}
            />
            <div>
              <h2 className="m-0">{post.title}</h2>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
            </div>
          </div>
          <p>{post.content}</p>
          <div className="flex justify-between mt-2.5">
            <div>
              <button
                className="bg-none border-none text-blue-500 cursor-pointer"
                onClick={() => toggleLike(post._id)}
              >
                <FontAwesomeIcon icon={likedPosts.has(post._id) ? faThumbsUpSolid : faThumbsUpRegular} />
              </button>
              <button
                className="bg-none border-none text-blue-500 cursor-pointer ml-2.5"
                onClick={() => toggleComment(post._id)}
              >
                <FontAwesomeIcon icon={commentedPosts.has(post._id) ? faCommentSolid : faCommentRegular} /> Comment
              </button>
            </div>
            <button
              className="bg-none border-none text-blue-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShareSolid} /> Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
