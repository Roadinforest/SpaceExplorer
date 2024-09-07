import * as React from 'react';
import { Reply } from './Replay';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar } from '@mui/material';

import { faThumbsUp as faThumbsUpRegular, faComment as faCommentRegular } from '@fortawesome/free-regular-svg-icons';

export interface Comment {
  id: string;
  author: string;
  content: string;
  createdAt: string;
  replies: Reply[];
}

interface CommentProps {
  comment: Comment;
}

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <div className="comment bg-gray-100 p-3 mb-3 rounded-lg">
      <div className="flex items-center mb-2.5">
        <Avatar alt={comment.author} src={`/path/to/avatar/${comment.author}.png`} />
        <div>
          <h3 className="m-0">{comment.author}</h3>
          <small>{new Date(comment.createdAt).toLocaleString()}</small>
        </div>
      </div>
      <p>{comment.content}</p>
      <div className="flex justify-between mt-2.5">
        <button className="bg-none border-none text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faThumbsUpRegular} /> Like
        </button>
        <button className="bg-none border-none text-blue-500 cursor-pointer ml-2.5">
          <FontAwesomeIcon icon={faCommentRegular} /> Reply
        </button>
      </div>
      <div className="replies mt-3">
        {comment.replies && comment.replies.map((reply) => (
          <Reply key={reply.id} reply={reply} />
        ))}
      </div>
    </div>
  );
};