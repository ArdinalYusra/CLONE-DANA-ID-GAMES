import Image from "next/image";
import Link from "next/link";
import React from "react";

const VoucherDigitalItems = [
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
  {
    id: 5,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/tinder.png",
    title: "Tinder",
  },
  {
    id: 6,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/minecraft_v2.png",
    title: "Minecraft",
  },
  {
    id: 7,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/steam.png",
    title: "Steam Wallet USD",
  },
  {
    id: 8,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/steam.png",
    title: "Steam Wallet IDR",
  },
  {
    id: 9,
    url: "https://a.m.dana.id/resource/imgs/item-digital/games/Steam-Game-CD-Keys.png",
    title: "Steam Game CD Keys",
  },
  {
    id: 10,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/playstation_network.png",
    title: "Playstation Network",
  },
  {
    id: 11,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/nintendo_eshop_card.png",
    title: "Nintendo Eshop Card",
  },
  {
    id: 12,
    url: "https://a.m.dana.id/resource/imgs/dana-game/G-tune.png",
    title: "G-Tune",
  },
  {
    id: 13,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/wetv.png",
    title: "Wetv",
  },
  {
    id: 14,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/viu.png",
    title: "Viu",
  },
  {
    id: 15,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/twitch-gift-cards.png",
    title: "Twitch Gift Card",
  },
  {
    id: 16,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/okcucpid.png",
    title: "OkCupid Voucher",
  },
  {
    id: 17,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/gemscool.png",
    title: "Gemscool",
  },
  {
    id: 18,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/amazon_gift_card.png",
    title: "Amazon Gift Card",
  },
  {
    id: 19,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/mola_tv.png",
    title: "Mola TV",
  },
  {
    id: 20,
    url: "https://a.m.dana.id/resource/imgs/item-digital/vouchers/megaxus.png",
    title: "Megaxus",
  },
];

const VoucherDigitalList = () => {
  return (
    <>
      {" "}
      <div className="mx-4 grid grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-4 gap-3 ">
        {VoucherDigitalItems.map((item) => {
          return (
            <div className="flex flex-col items-center" key={item.id}>
              <Link href={"/games/purchase"}>
                <Image
                  className="rounded-md bg-auto"
                  src={item.url}
                  height={300}
                  width={400}
                  alt="/"
                />
                <p className="text-md flex text-wrap text-white">
                  {item.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VoucherDigitalList;
