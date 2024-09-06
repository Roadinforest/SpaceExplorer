'use client'
import Button from "@mui/material/Button";
import { useRouter } from 'next/navigation'

import React, { createContext, useState, ReactNode } from 'react';
import { usePlanet} from "../PlanetContext";
import PlanetIntro from "./PlanetIntro";


export default function Page() {
  const router = useRouter();
  const { planet } = usePlanet();

  return (
    <>
        {/* 现有的返回首页按钮和行星信息
        <Button size="small" onClick={() => router.push("/")}>
          返回首页
        </Button>
        <p>行星名称: {planet ? planet.name : "未知"}</p>
        <p>简介: {planet ? planet.introduction : "暂无简介"}</p>
        <p>直径: {planet ? planet.basicInfo.diameter : "未知"}</p>
        <p>距太阳距离: {planet ? planet.basicInfo.distanceFromSun : "未知"}</p>
        <p>表面温度: {planet ? planet.basicInfo.surfaceTemperature : "未知"}</p>
        <p>卫星数量: {planet ? planet.basicInfo.moons : "未知"}</p> */}
        <PlanetIntro prop={planet || { name: '', introduction: '', basicInfo: { diameter: '', distanceFromSun: '', surfaceTemperature: '', moons: '' }}} /> 

    </>
  );
}
