import * as React from 'react';
import { Comment } from './Comment';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpSolid, faComment as faCommentSolid, faShare as faShareSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular, faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons';

export interface Post {
  id: string;
  title: string;
  author: string;
  content: string;
  createdAt: string;
  comments: Comment[];
}


export interface PostProps {
  post: Post;
  avatars: { [key: string]: string };
}

export const Post: React.FC<PostProps> = ({ post , avatars}) => {
  const [likedPosts, setLikedPosts] = React.useState<Set<string>>(new Set());
  const [commentedPosts, setCommentedPosts] = React.useState<Set<string>>(new Set());
  const [sharedPosts, setSharedPosts] = React.useState<Set<string>>(new Set());


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
    // <div className="post bg-white p-5 mb-5 rounded-lg shadow-md">
    //   <div className="flex items-center mb-2.5">
    //     <Avatar alt={post.author} src={`/path/to/avatar/${post.author}.png`} />
    //     <div>
    //       <h2 className="m-0">{post.author}</h2>
    //       <small>{new Date(post.createdAt).toLocaleString()}</small>
    //     </div>
    //   </div>
    //   <p>{post.content}</p>
    //   <div className="flex justify-between mt-2.5">
    //     <div>
    //       <button className="bg-none border-none text-blue-500 cursor-pointer">
    //         <FontAwesomeIcon icon={faThumbsUpRegular} /> Like
    //       </button>
    //       <button className="bg-none border-none text-blue-500 cursor-pointer ml-2.5">
    //         <FontAwesomeIcon icon={faCommentRegular} /> Comment
    //       </button>
    //     </div>
    //     <button className="bg-none border-none text-blue-500 cursor-pointer">
    //       <FontAwesomeIcon icon={faShare} /> Share
    //     </button>
    //   </div>
    <div>

        <div
          key={post.id}
          className="post bg-white p-5 mb-5 rounded-lg shadow-md"
        >
          <div className="flex items-center mb-2.5">
            <Avatar
              alt="Deemo"
              src={avatars[post.id]}
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
                onClick={() => toggleLike(post.id)}
              >
                <FontAwesomeIcon icon={likedPosts.has(post.id) ? faThumbsUpSolid : faThumbsUpRegular} />
              </button>
              <button
                className="bg-none border-none text-blue-500 cursor-pointer ml-2.5"
                onClick={() => toggleComment(post.id)}
              >
                <FontAwesomeIcon icon={commentedPosts.has(post.id) ? faCommentSolid : faCommentRegular} /> Comment
              </button>
            </div>
            <button
              className="bg-none border-none text-blue-500 cursor-pointer"
            >
              <FontAwesomeIcon icon={faShareSolid} /> Share
            </button>
          </div>
        </div>



      <div className="comments mt-5">
        {post.comments && post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};