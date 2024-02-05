import React, { useState, useEffect } from "react";

const ImagesEvent = [
  {
    url: "https://a.m.dana.id/resource/imgs/banner/EIS135-Steam-Education-Januari-Web-Banner.png",
    title: "7 Game Baru di Steam Yang Harus Kamu Cobain",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/banner/STEAM-Education-Web-Banner-up.png",
    title: "Gamers Harus Tau! Ada Diskon s/d 70% di steam Autumn Sale!",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Article-Game-Oct23-Web-Banner.png",
    title: "Banyak Game Baru dan Seru di Steam! Gamers, Cek Yuk",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/27923-MLBB-Solo-Push-Rank.png",
    title:
      "Solo Push Rank MLBB Sampai Mytic? Ini Rekomendasi Hero Terbaik Versi Dana",
  },
  {
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Article-Games-Aug-Web.png",
    title: "Ada Cashback s/d 10% Tanpa Minimum Transaksi di DANA Games. Serbu!",
  },
];

const SliderImage = ({ autoSlides = false, autoSlideInterval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? ImagesEvent.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === ImagesEvent.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!autoSlides) return;
    const slideInterval = setInterval(nextSlide, autoSlideInterval);
    return () => clearInterval(slideInterval);
  });

  return (
    <div className="pb-10 lg:py-20">
      <div className="max-w-[1400px] w-full h-44 lg:h-96 relative rounded-md">
        <div
          style={{
            backgroundImage: `url(${ImagesEvent[currentIndex].url})`,
          }}
          className="h-full bg-center bg-cover duration-500"
        ></div>
      </div>
    </div>
  );
};
export default SliderImage;
