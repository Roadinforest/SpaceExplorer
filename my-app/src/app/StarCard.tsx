'use client'
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useRouter } from 'next/navigation'

import { PlanetProvider } from "./PlanetContext";
import { useContext } from "react";
import { usePlanet } from "./PlanetContext";

// 定义 Planet 接口，描述传入对象的结构
export interface Planet {
  name: string;
  introduction: string;
  basicInfo: {
    diameter: string;
    distanceFromSun: string;
    surfaceTemperature: string;
    moons: string;
  };
}

// 定义组件的 props 类型
interface StarCardProps {
  planet: Planet; // 接收一个 Planet 类型的对象作为 prop
}

// Accept props and use them inside the component
const StarCard: React.FC<StarCardProps> = ({ planet }) => {
  const router = useRouter();
  const {setPlanet} = usePlanet();

  const goToPlanetSingle = () => {
    console.log({planet})
    setPlanet(planet); //Set the planet object into context
    router.push("/PlanetSingle");
  };

  return (
    <Card sx={{ maxWidth: 300, minHeight: 1 / 1 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={`/planets/${planet.name}.png`}
        title="Taikonaut" />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {planet.name}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {planet.introduction}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={goToPlanetSingle}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default StarCard;