import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import {ChatList} from './ChatList';
import Link from '@mui/material/Link';
import ProfileCard from '../ProfileCard';
import PostSend from './PostSend';

export interface Post {
  _id: string;
  title: string;
  content: string;
  createdAt: string;
}

function PostPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // 添加 content 状态

  useEffect(() => {
    axios
      .get<Post[]>("http://localhost:5000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post<Post>("http://localhost:5000/posts", { title, content }) // 添加 content
      .then((response) => {
        setPosts([response.data, ...posts]); // 修正拼写错误
        setTitle("");
        setContent(""); // 清空 content
      })
      .catch((error) => console.error("Error creating post:", error)); // 添加错误处理
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ProfileCard profileName="Astronaut"></ProfileCard>

      <ChatList posts={posts}></ChatList>

      <PostSend></PostSend>

      {/* <form
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="标题"
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="内容"
          required
          style={{ padding: "10px", fontSize: "16px", height: "100px" }}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all shadow-md"
        >
          发布
        </button>
        <div className="absolute top-4 left-12 z-10"></div>
      </form> */}
    </div>
  );
}

export default PostPage;
