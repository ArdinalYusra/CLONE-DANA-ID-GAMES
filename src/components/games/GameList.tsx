import Image from "next/image";
import Link from "next/link";
import React from "react";

const GamesItems = [
  {
    id: 1,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/mobile_legends.png",
    name: "Mobile Legends: Bang Bang",
  },
  {
    id: 2,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/free_fire.png",
    name: "Free Fire",
  },
  {
    id: 3,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/pubgm.png",
    name: "PUBG Mobile",
  },
  {
    id: 4,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/fc_mobile.png",
    name: "FC Mobile",
  },
  {
    id: 5,
    url: "https://a.m.dana.id/resource/imgs/banner/Banner_Mini_Games.png",
    name: "Mini Games",
  },
  {
    id: 6,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Genshin_Impact.png",
    name: "Genshin Impact",
  },
  {
    id: 7,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/call_of_duty_mobile.png",
    name: "Call of Duty: Mobile",
  },
  {
    id: 8,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/wild_rift.png",
    name: "League Of legends Wild Rift",
  },
  {
    id: 9,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/valorant.png",
    name: "Valorant",
  },
  {
    id: 10,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/clash_of_clans.png",
    name: "Clash of Clans",
  },
  {
    id: 11,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/top_eleven.png",
    name: "Top Eleven",
  },
  {
    id: 12,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Ragnarok_X.png",
    name: "Ragnarok X",
  },
  {
    id: 13,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/life_after.png",
    name: "Life After",
  },
  {
    id: 14,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/8_ball_pool.png",
    name: "8 Ball Pool",
  },
  {
    id: 15,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/one_punch_man.png",
    name: "One Punch Man",
  },
  {
    id: 16,
    url: "https://a.m.dana.id/resource/imgs/codashop/point-blank/point_blank_game.png",
    name: "Point Blank",
  },
  {
    id: 17,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/ragnarok.png",
    name: "Ragnarok Mobile: Eternal Love",
  },
  {
    id: 18,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/clash_royale.png",
    name: "Clash Royale",
  },
  {
    id: 19,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/hayday.png",
    name: "Hay Day",
  },
  {
    id: 20,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/zepeto_logo.png",
    name: "Zepeto",
  },
  {
    id: 21,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/brawl_stars.png",
    name: "Brawl Stars",
  },
  {
    id: 22,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/speed_drifters.png",
    name: "Speed Drifters",
  },
  {
    id: 23,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/mu_origin_2.png",
    name: "Mu Origin 2",
  },
  {
    id: 24,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/honkai_impact_3.png",
    name: "Honkai Impact 3",
  },
  {
    id: 25,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/legends_of_runeterra.png",
    name: "Legends of Runeterra",
  },
  {
    id: 26,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/onmoyji_arena.png",
    name: "Onmoyji Arena",
  },
  {
    id: 27,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/king_of_kings.png",
    name: "King of Kings",
  },
  {
    id: 28,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/super_mecha_champions.png",
    name: "Super Mecha Champions",
  },
  {
    id: 29,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/samurai_era.png",
    name: "Samurai Era",
  },
];

const GameList = () => {
  return (
    <div>
      {" "}
      <div className=" grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-4 gap-3 ">
        {GamesItems.map((item) => {
          return (
            <div className="flex flex-col items-center" key={item.id}>
              <Link href={"/games/purchase"}>
                <Image
                  className="rounded-md h-auto w-auto"
                  src={item.url}
                  height={300}
                  width={400}
                  alt="/"
                />
                <p className="text-md flex text-wrap text-white">{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameList;
