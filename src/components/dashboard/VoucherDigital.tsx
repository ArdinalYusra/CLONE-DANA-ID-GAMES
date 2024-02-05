import Image from "next/image";
import Link from "next/link";
import React from "react";

const VoucherDigitalProducts = [
  {
    id: 1,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/googleplay-banner.png",
    title: "Kode Voucher Google Play",
  },
  {
    id: 2,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/vidio.png",
    title: "Vidio",
  },
  {
    id: 3,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/upgc.png",
    title: "Unipin Voucher",
  },
  {
    id: 4,
    url: "https://a.m.dana.id/resource/icons/codacash-logo.png",
    title: "Codecash Voucher",
  },
];

const VoucherDigital = () => {
  return (
    <div className="flex flex-col space-y-5 md:space-y-8 lg:space-y-10 md:mt-5">
      <div className="flex justify-between item-center">
        <p className="font-bold text-2xl">Voucher Digital</p>
        <Link href="/voucherdigital">
          <button className="rounded-md bg-blue-500 p-2">LIHAT SEMUA</button>
        </Link>
      </div>
      <div className="flex flex-row gap-2 overflow-scroll">
        {VoucherDigitalProducts.map((item) => {
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

export default VoucherDigital;
