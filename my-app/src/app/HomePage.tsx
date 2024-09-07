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

const StarCardSize = 3;

const HomePage = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* <SideBar /> */}
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={3}>
          {/* 左侧 3D 模型 */}
          <Grid item xs={18} md={6}>
            {isClient && <PlanetModel3D />}
          </Grid>
          
          {/* 右侧地球说明 */}
          <Grid item xs={12} md={60} sx={{ mt: 12 }}>
            <Paper elevation={3} sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>
                地球
              </Typography>
              <Typography variant="body1" paragraph>
                地球是太阳系中第三颗行星，也是目前已知唯一孕育生命的天体。它是人类的家园，拥有丰富的生物多样性和复杂的生态系统。
              </Typography>
              <Typography variant="body1" paragraph>
                主要特征：
                • 直径：约12,742公里
                • 质量：约5.97 × 10^24 千克
                • 表面重力：9.8 m/s²
                • 自转周期：23小时56分4秒
                • 公转周期：365.26天
              </Typography>
              <Typography variant="body1">
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
