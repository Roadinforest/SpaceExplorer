import { Planet } from "../StarCard";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function PlanetIntro({ prop }: { prop: Planet }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 mx-auto" style={{ width: '100%', height: '50vh' }}>
        <BackgroundImage planetName={prop.name} />
        <BackgroundEffects />

        {/* 返回按钮 */}
        <div className="absolute top-4 left-12 z-10">
          <Link href="/" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all shadow-md">
            返回首页
          </Link>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <PlanetHeader planet={prop} />
          <PlanetDetails planet={prop} />
        </div>

        {/* 3D模型 */}
        {/* {isClient && <PlanetModel3D />} */}

      </div>


      {/* NASA Solar System 模拟器 */}
      <div className="mt-10 mx-auto" style={{ height: '70vh', width: '85%', maxWidth: '1200px' }}>
        <iframe
          src={`https://eyes.nasa.gov/apps/solar-system/#/${prop.name.toLowerCase()}`}
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </>
  );
}

function BackgroundImage({ planetName }: { planetName: string }) {
  return (
    <Image
      alt=""
      src={`/planets/${planetName}.png`}
      width={500}
      height={500}
      priority
      className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
    />
  );
}

function BackgroundEffects() {
  return (
    <>
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
    </>
  );
}

function PlanetHeader({ planet }: { planet: Planet }) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2
        className={`text-4xl font-bold tracking-tight ${
          planet.name === "Uranus" ? "text-gray-500" : "text-white"
        } sm:text-6xl`}
      >
        {planet.name} 的相关信息
      </h2>
      <p
        className={`mt-6 text-lg leading-8 ${
          planet.name === "Uranus" ? "text-gray-500" : "text-gray-300"
        }`}
      >
        {planet.introduction}
      </p>
    </div>
  );
}

function PlanetDetails({ planet }: { planet: Planet }) {
  const detailItems = [
    { label: "行星半径", value: planet.basicInfo.diameter },
    { label: "距离太阳", value: planet.basicInfo.distanceFromSun },
    { label: "卫星个数", value: planet.basicInfo.moons },
    { label: "表面温度", value: planet.basicInfo.surfaceTemperature },
  ];

  return (
    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
      <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
        {detailItems.map((item) => (
          <div key={item.label} className="flex flex-col-reverse">
            <dt
              className={`text-base leading-7 ${
                planet.name === "Uranus" ? "text-gray-500" : "text-gray-300"
              }`}
            >
              {item.label}
            </dt>
            <dd
              className={`text-2xl font-bold leading-9 tracking-tight ${
                planet.name === "Uranus" ? "text-gray-500" : "text-white"
              }`}
            >
              {item.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

