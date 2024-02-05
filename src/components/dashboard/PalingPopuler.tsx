import Image from "next/image";
import Link from "next/link";
import React from "react";

const PalingPopuler = [
  {
    id: 1,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/free_fire.png",
    title: "Free Fire",
  },
  {
    id: 2,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/googleplay-banner.png",
    title: "Kode Voucher Google Play",
  },
  {
    id: 3,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/mobile_legends.png",
    title: "Mobile Legends: Bang Bang",
  },
  {
    id: 4,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/valorant.png",
    title: "Valorant",
  },
];

const PalingPupuler = () => {
  return (
    <div className="flex flex-col space-x-5 md:space-y-8">
      <p className="font-bold text-2xl">Paling Populer</p>
      <div className="flex flex-row gap-2 overflow-scroll">
        {PalingPopuler.map((item) => {
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

export default PalingPupuler;
