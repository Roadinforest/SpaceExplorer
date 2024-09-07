import * as React from 'react';
import { Comment } from './Comment';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp as faThumbsUpSolid, faComment as faCommentSolid, faShare as faShareSolid } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as faThumbsUpRegular, faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons';
import { CommentSend } from './CommentSend';

export interface Post {
  _id: string;
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
  console.log("This is the"+post._id);
  console.log(post);
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

  const addComment= (postId: string) => {
    console.log("This is the add comment function")
  }

  return (
    <div className="post bg-white p-5 mb-5 rounded-lg shadow-md">

{/* Post内容本身 */}
        <div
          key={post._id}
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

{/* 评论 */}
      <div className="comments mt-5">
{/* 评论发送 */}
        <CommentSend avatarSrc="/astronaut.png" addComment={addComment}></CommentSend>
{/* 评论列表 */}
        {post.comments && post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}

      </div>

    </div>
  );
};