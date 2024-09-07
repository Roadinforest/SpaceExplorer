// src/backend/index.ts
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const PORT = 5000;

// 中间件
app.use(cors());
app.use(express.json());

// MongoDB 连接
mongoose.connect('mongodb://127.0.0.1:27017/forum')
  .then(() => console.log('MongoDB 已连接'))
  .catch((err) => console.error('MongoDB 连接错误:', err));

// 帖子模型
const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now },
});

const Post = mongoose.model('Post', postSchema);

// 路由
app.get('/posts', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  const newPost = new Post({ title, content });
  await newPost.save();
  res.status(201).json(newPost);
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
