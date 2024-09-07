import axios from "axios";
import { title } from "process";
import { FormEvent, useEffect, useState } from "react";
import { Post } from "./Chat";

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

    return(
      <form
        onSubmit={handleSubmit}
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          backgroundColor: "#f0f0f0",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="标题"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            backgroundColor: "#e0e0e0",
            borderRadius: "5px",
          }}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="内容"
          required
          style={{
            padding: "10px",
            fontSize: "16px",
            height: "100px",
            backgroundColor: "#e0e0e0",
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