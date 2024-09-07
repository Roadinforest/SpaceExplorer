"use clinet";
import ProfileCard from "../ProfileCard";
import PostPage from "./PostArea";
import NewsCard from "./NewsCard";
import { PostSend } from "./PostSend";
import React, { useState, useEffect, FormEvent } from "react";
import { Post } from "./Post";
import { PostList } from "./PostList";
import axios from "axios";

export default function Page() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState(""); // 添加 content 状态

  useEffect(() => {
    fetchPosts();
  } , []);

  const fetchPosts = () => {
    axios
      .get<Post[]>("http://localhost:5000/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    axios
      .post<Post>("http://localhost:5000/posts", { title, content }) // 添加 content
      .then((response) => {
        fetchPosts(); // 在提交后重新获取帖子
        setTitle("");
        setContent(""); // 清空 content
      })
      .catch((error) => console.error("Error creating post:", error)); // 添加错误处理
  };  
  
  const addPost = (newPost: Post) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", alignItems: "top" }}>
      <div style={{ flex: 1, width: "100%", marginBottom: "20px" }}>
        <ProfileCard profileName="Astronaut" />
        <PostSend addPost={addPost} />
      </div>
      <div style={{ flex: 2, width: "100%", marginBottom: "20px" }}>
        <PostList posts={posts} />
      </div>
      <div style={{ flex: 1, width: "100%" }}>
        <NewsCard />
      </div>
    </div>
  );
}
