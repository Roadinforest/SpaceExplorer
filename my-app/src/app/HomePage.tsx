'use client'
// src/pages/HomePage.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import StarCard from "./StarCard";
import SideBar from "./SideBar";
import data from "../../public/planets.json";
import PlanetModel3D from "./PlanetSingle/PlanetModel"; // 导入 PlanetModel3D 组件
import { Paper, Typography } from "@mui/material";

// my-app\public\planets.json

const StarCardSize = 2;

const HomePage = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* <SideBar /> */}
      <Box sx={{ flexGrow: 1, p: 3 }}> {/* flexGrow: 1 使 Box 组件在其父容器中扩展以填充可用空间, p: 3 设置内边距为 3 */}

        <Grid container spacing={1}> {/* container 表示这是一个容器 Grid, spacing: 1 设置网格项之间的间距为 1 */}
          {/* 左侧 3D 模型 */}
          <Grid item xs={12} md={6}> {/* xs={12} 在小屏幕上占据 12 列（全宽）, md={6} 在中等及以上屏幕上占据 6 列（半宽） */}
            {isClient && <PlanetModel3D />}
          </Grid>
          
          {/* 右侧地球说明 */}
          <Grid item xs={12} md={6} sx={{ mt: 1 }}> {/* xs={12} 在小屏幕上占据 12 列（全宽）, md={6} 在中等及以上屏幕上占据 6 列（半宽）, mt: 1 设置上边距为 1 */}
            <Paper elevation={3} sx={{ p: 3 }}> {/* elevation: 3 设置 Paper 组件的阴影深度为 3, p: 3 设置内边距为 3 */}
              <Typography variant="h4" gutterBottom> {/* variant="h4" 设置 Typography 组件的样式为 h4 标题, gutterBottom 设置底部外边距 */}
                地球
              </Typography>
              <Typography variant="body1" paragraph> {/* variant="body1" 设置 Typography 组件的样式为 body1 段落, paragraph 设置段落样式 */}
                地球是太阳系中第三颗行星，也是目前已知唯一孕育生命的天体。它是人类的家园，拥有丰富的生物多样性和复杂的生态系统。
              </Typography>
              <Typography variant="body1" paragraph> {/* variant="body1" 设置 Typography 组件的样式为 body1 段落, paragraph 设置段落样式 */}
                主要特征：
                • 直径：约12,742公里
                • 质量：约5.97 × 10^24 千克
                • 表面重力：9.8 m/s²
                • 自转周期：23小时56分4秒
                • 公转周期：365.26天
              </Typography>
              <Typography variant="body1"> {/* variant="body1" 设置 Typography 组件的样式为 body1 段落 */}
                地球的大气层、水循环和磁场为生命提供了重要保护，使其成为一个独特而宝贵的蓝色星球。
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        {/* 其他行星卡片 */}
        <Box sx={{ mt: 4 }}>
          <Grid container spacing={2}>
            {data.map((item) => (
              <Grid key={item.name} item xs={12} sm={6} md={4} lg={StarCardSize}>
                <StarCard planet={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

// Fetch data at build time

export default HomePage;
