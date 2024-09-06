'use client'
// src/pages/HomePage.tsx
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import StarCard from "./StarCard";
import SideBar from "./Sidebar";
import data from "../../public/planets.json";
import PlanetModel3D from "./PlanetSingle/PlanetModel"; // 导入 PlanetModel3D 组件

// my-app\public\planets.json

const StarCardSize = 3;

const HomePage = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <SideBar />
      {isClient && <PlanetModel3D />}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((item) => (
            <Grid key={item.name} size={StarCardSize}>
              <StarCard planet={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

// Fetch data at build time

export default HomePage;
