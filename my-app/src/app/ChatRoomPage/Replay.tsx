import { Avatar } from '@mui/material';
import * as React from 'react';

export interface Reply {
  id: string;
  author: string;
  content: string;
  createdAt: string;
}

interface ReplyProps {
  reply: Reply;
}

export const Reply: React.FC<ReplyProps> = ({ reply }) => {
  return (
    <div className="reply bg-gray-200 p-2 mb-2 rounded-lg">
      <div className="flex items-center mb-2.5">
        <Avatar alt={reply.author} src={`/path/to/avatar/${reply.author}.png`} />
        <div>
          <h4 className="m-0">{reply.author}</h4>
          <small>{new Date(reply.createdAt).toLocaleString()}</small>
        </div>
      </div>
      <p>{reply.content}</p>
    </div>
  );
};