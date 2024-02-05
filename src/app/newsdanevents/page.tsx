"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import SliderImage from "@/components/newsdanevents/SliderImage";

const ImagesEvent = [
  {
    url: "https://a.m.dana.id/resource/imgs/banner/EIS135-Steam-Education-Januari-Web-Banner.png",
    title1: "🕝  3 hari yang lalu",
    title2: "7 Game Baru di Steam Yang Harus Kamu Cobain",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/banner/STEAM-Education-Web-Banner-up.png",
    title1: "🕝  1 bulan yang lalu",
    title2: "Gamers Harus Tau! Ada Diskon s/d 70% di steam Autumn Sale!",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Article-Game-Oct23-Web-Banner.png",
    title1: "🕝  3 bulan yang lalu",
    title2: "Banyak Game Baru dan Seru di Steam! Gamers, Cek Yuk",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/27923-MLBB-Solo-Push-Rank.png",
    title1: "🕝  3 bulan yang lalu",
    title2: "Solo Push Rank MLBB Sampai Mytic? Ini Rekomendasi Hero Terbaik",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Article-Games-Aug-Web.png",
    title1: "🕝  4 bulan yang lalu",
    title2:
      "Ada Cashback s/d 10% Tanpa Minimum Transaksi di DANA Games. Serbu!",
  },
];

const NewsEvents = [
  {
    // href: "/",
    title: "Semua News",
  },
  {
    // href: "/",
    title: "Game News",
  },
  {
    // href: "/",
    title: "Events & Promo",
  },
];

const NewsdanEvent = () => {
  return (
    <>
      <section className="bg-[#151131] pb-10">
        <div className="wrapper">
          <div>
            <SliderImage autoSlides={true} autoSlideInterval={3000} />
          </div>
          <div className="flex flex-col space-y-5 px-3 md:px-0 md:flex-row md:overflow-scroll gap-5 rounded-md">
            {ImagesEvent.map((image, index) => (
              <div
                className="grid grid-rows-1 md:min-w-[350px] md:min-h-[300px] bg-blue-950"
                key={index}
              >
                <Image
                  className="flex flex-col bg-cover"
                  src={image.url}
                  alt={"/"}
                  width={400}
                  height={600}
                />
                <div className="flex flex-col h-full p-5 space-y-5">
                  <p className="text-blue-600 ">{image.title1}</p>
                  <p
                    className="text-white
                flex text-wrap"
                  >
                    {image.title2}
                  </p>
                  <div>
                    <button className="py-2 px-4 rounded-md text-blue-600 font-bold active:bg-blue-500">
                      LIHAT LEBIH
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsdanEvent;
