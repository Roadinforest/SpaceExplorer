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
        {/* {/* 现有的返回首页按钮和行星信息 */}
        <PlanetIntro prop={planet || { name: '', introduction: '', basicInfo: { diameter: '', distanceFromSun: '', surfaceTemperature: '', moons: '' }}} /> 

    </>
  );
}
