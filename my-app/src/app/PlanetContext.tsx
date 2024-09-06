'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface Planet {
  name: string;
  introduction: string;
  basicInfo: {
    diameter: string;
    distanceFromSun: string;
    surfaceTemperature: string;
    moons: string;
  };
}       

interface PlanetContextType {
  planet: Planet | null;
  setPlanet: (planet: Planet) => void;
}

const PlanetContext = createContext<PlanetContextType | undefined>(undefined);

export const PlanetProvider = ({ children }: { children: ReactNode }) => {
  const [planet, setPlanet] = useState<Planet | null>(null);

  return (
    <PlanetContext.Provider value={{ planet, setPlanet }}>
      {children}
    </PlanetContext.Provider>
  );
};

export const usePlanet = () => {
  const context = useContext(PlanetContext);
  if (!context) {
    throw new Error('usePlanet must be used within a PlanetProvider');
  }
  return context;
};
