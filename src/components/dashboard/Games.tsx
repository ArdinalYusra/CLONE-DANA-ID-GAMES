import Image from "next/image";
import Link from "next/link";
import React from "react";

const GamesImage = [
  {
    id: 1,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/mobile_legends.png",
    title: "Mobile Legends: Bang Bang",
  },
  {
    id: 2,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/free_fire.png",
    title: "Free Fire",
  },
  {
    id: 3,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/pubgm.png",
    title: "PUBG Mobile",
  },
  {
    id: 4,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/fc_mobile.png",
    title: "FC Mobile",
  },
];

const Games = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-10 md:mt-5">
      <div className="flex justify-between item-center">
        <p className="font-bold text-2xl">Games</p>
        <Link href="/games">
          <button className="rounded-md bg-blue-500 p-2">LIHAT SEMUA</button>
        </Link>
      </div>
      <div className="flex flex-row gap-2 overflow-scroll">
        {GamesImage.map((item) => {
          return (
            <div key={item.id} className="flex flex-col min-h-40 min-w-40">
              <Link href={"/games/purchase"}>
                <Image
                  src={item.url}
                  alt=""
                  height={350}
                  width={350}
                  className="rounded-lg"
                />
                <p className="text-wrap">{item.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Games;
