import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import { Post } from "./Post";
import { Avatar } from "@mui/material";

interface PostSendProps {
  addPost: (newPost: Post) => void;
}

export const PostSend: React.FC<PostSendProps> = ({ addPost }) => {
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
        addPost(response.data)
        setTitle("");
        setContent(""); // 清空 content
      })
      .catch((error) => console.error("Error creating post:", error)); // 添加错误处理
  };

  return (
    // <div className="post bg-white p-5 mb-5 rounded-lg shadow-md">
    <form onSubmit={handleSubmit} 
    className="post bg-white p-5 mb-5 rounded-lg shadow-lg flex flex-col gap-4 p-4 rounded-lg"
    style={{marginTop:"20px"}}>
      
      <div className="flex items-center gap-4">
        <Avatar src="/astronaut.png" alt="User" />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Write down your thought!!!"
          required
          className="p-2 text-lg bg-gray-200 rounded-md flex-grow"
        />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="内容"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            height: "100px",
            backgroundColor: "rgb(163, 156, 156,0.1)",
            borderRadius: "5px",
          }}
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all shadow-md"
        >
          发布
        </button>
      </form>
    )
}