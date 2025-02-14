"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function Home() {
  const name = ["дорогая", "красивая", "любимая", "лучшая", "самая"];
  const [randomName, setRandomName] = useState(
    name[Math.floor(Math.random() * name.length)]
  );

  const rerollName = () => {
    setRandomName(name[Math.floor(Math.random() * name.length)]);
  };

  return (
    <div className="container flex flex-col justify-center items-center h-screen m-4">
      <div className="text text-pretty text-3xl font-bold text-white">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ef4444] to-red-300">
          Поправляйся
        </span>
        ,<br /> <span className="text-white">Мой милый пёсик</span>
        <p>Ты моя самая {randomName}</p>
        <Image
          src="/dice.png"
          alt="refresh"
          onClick={rerollName}
          className="mt-4 px-4 py-2 
         hover:bg-blue-600 text-white rounded transition duration-500 animate-bounce"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
}
