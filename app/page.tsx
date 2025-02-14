"use client";

import Image from "next/image";
import React from "react";

export default function Home() {
  const name = ["дорогая", "красивая", "любимая", "лучшая", "самая"];
  const [randomName, setRandomName] = React.useState(name[Math.floor(Math.random() * name.length)]);

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
        <p>Ты самая {randomName}</p>
        <button
          onClick={rerollName}
          className="mt-4 px-4 py-2 
         hover:bg-blue-600 text-white rounded transition duration-500 animate-bounce"
        >
          <Image src="/dice.png" alt="refresh" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

