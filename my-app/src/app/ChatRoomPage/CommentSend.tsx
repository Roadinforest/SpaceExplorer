import React, { useState, FormEvent } from 'react';
import Avatar from '@mui/material/Avatar';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { Post } from './Post';
import { comment } from 'postcss';

interface CommentSendProps {
  addComment: (content: string) => void;
  avatarSrc: string;
}

export const CommentSend: React.FC<CommentSendProps> = ({ addComment, avatarSrc }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (content.trim()) {
      addComment(content);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-4">
      <Avatar src={avatarSrc} alt="User" className="w-8 h-8" />
      <div className="flex-grow relative">
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="添加评论..."
          className="w-full p-2 pr-10 text-sm bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-600"
        >
          发送
        </button>
      </div>
    </form>
  );
};