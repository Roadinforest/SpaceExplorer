import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Post } from './Chat';

interface ChatListProps {
  posts: Post[];
}

export const ChatList: React.FC<ChatListProps> = ({ posts }) => {
  return (
    // <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

    //   {/* 第一个列表项 */}
    //   <ListItem alignItems="flex-start">

    //     <ListItemAvatar>
    //       <Avatar alt="Deemo" src={`/Deemo/header${Math.floor(Math.random() * 10) -3 }.png`} />
    //     </ListItemAvatar>

    //     <ListItemText
    //       primary={post.title}
    //       secondary={
    //         <React.Fragment>
    //           <Typography
    //             component="span"
    //             variant="body2"
    //             sx={{ color: 'text.primary', display: 'inline' }}
    //           >
    //             {post.content}
    //           </Typography>
    //           <Typography
    //             component="span"
    //             variant="body2"
    //             sx={{ color: 'text.secondary', display: 'block' }}
    //           >
    //             {new Date(post.createdAt).toLocaleString()}
    //             {post._id}
    //           </Typography>
    //         </React.Fragment>
    //       }
    //     />
    //   </ListItem>

    //   <Divider variant="inset" component="li" />

    // </List>

    <div
      className="posts"
      style={{ flex: 2, marginLeft: "15px", marginRight: "15px" }}
    >
      {posts.map((post) => (
        <div
          key={post._id}
          className="post"
          style={{
            backgroundColor: "#fff",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <Avatar
              alt="Deemo"
              src={`/Deemo/header${Math.floor(Math.random() * 6) + 1}.png`}
            />
            <div>
              <h2 style={{ margin: 0 }}>{post.title}</h2>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
            </div>
          </div>
          <p>{post.content}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <div>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                }}
              >
                Like
              </button>
              <button
                style={{
                  background: "none",
                  border: "none",
                  color: "#007bff",
                  cursor: "pointer",
                  marginLeft: "10px",
                }}
              >
                Comment
              </button>
            </div>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#007bff",
                cursor: "pointer",
              }}
            >
              Share
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
