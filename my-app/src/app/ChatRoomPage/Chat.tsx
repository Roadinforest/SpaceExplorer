import React, { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import {ChatList} from './ChatList';

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
    <div>

      <ChatList posts={posts}></ChatList>

      {/* <PostSend addPost={addPost}></PostSend> */}

    </div>
  );
}

export default PostPage;
