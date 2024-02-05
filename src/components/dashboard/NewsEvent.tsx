import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsEvents = [
  {
    id: 1,
    url: "https://a.m.dana.id/resource/imgs/banner/EIS135-Steam-Education-Januari-Web-Banner.png",
    title: "7 Game Baru di Steam Yang Harus Kamu Cobain",
  },
  {
    id: 2,
    url: "https://a.m.dana.id/resource/imgs/banner/STEAM-Education-Web-Banner-up.png",
    title: "Gamers Harus Tau! Ada Diskon s/d 70% di steam Autumn Sale!",
  },
];

const NewsEvent = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-8 md:mt-5">
      <div className="flex justify-between item-center">
        <p className="font-bold text-2xl lg:text-3xl">News & Events</p>
        <Link href="/newsdanevents">
          <button className="rounded-md bg-blue-500 p-2">LIHAT SEMUA</button>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-2 lg:text-xl">
        {NewsEvents.map((item) => {
          return (
            <div key={item.id} className="text-wrap justify-center">
              <Image
                src={item.url}
                alt=""
                height={1000}
                width={1000}
                className="rounded-lg"
              />
              <p className="text-wrap">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsEvent;
