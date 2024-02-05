import React from "react";
import SlideShow from "@/components/Navbar/SlideShow";
import PalingPupuler from "@/components/dashboard/PalingPopuler";
import Games from "@/components/dashboard/Games";
import VoucherDigital from "@/components/dashboard/VoucherDigital";
import NewsEvent from "@/components/dashboard/NewsEvent";
const HomePage = () => {
  return (
    <>
      <div className="bg-[#151131] text-white">
        <div className="wrapper flex-center flex-col ">
          <SlideShow autoSlides={true} autoSlideInterval={3000} />
        </div>
        <div className="wrapper flex flex-col px-3 lg:px-0 py-5">
          <PalingPupuler />
          <Games />
          <VoucherDigital />
          <NewsEvent />
        </div>
      </div>
    </>
  );
};

export default HomePage;
