"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/components/Navbar/Logo";
import NavMobile from "./NavMobile";
import Link from "next/link";
import { MdCancel, MdHome } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";
import { button } from "@nextui-org/react";
import { GoArrowLeft } from "react-icons/go";

const Navlinks = [
  {
    title: "Beranda",
    href: "/",
  },
  {
    title: "Game",
    href: "games",
  },
  {
    title: "Voucher Digital",
    href: "voucherdigital",
  },
  {
    title: "News & Events",
    href: "newsdanevents",
  },
  {
    title: "More",
    href: "/",
  },
];

const Navbar = () => {
  const [openToggle, setOpenToggle] = useState<boolean | null>(false);
  const [search, setSearch] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setOpenToggle(null);
    };

    window.addEventListener("routeChangeComplete", handleRouteChange);

    return () => {
      window.addEventListener("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  const toggle = () => {
    setOpenToggle(!openToggle);
  };

  const handleSearch = () => {
    setSearch(true);
  };

  return (
    <div className=" bg-[#201343]">
      <div>
        <div className="wrapper flex items-center justify-between px-3 lg:px-0 h-24 w-full">
          <div className="flex items-center text-slate-200 ">
            <Logo />
            <div className="hidden lg:flex flex-row text-lg mx-5 py-1 gap-5 items-center min-w-[450px]">
              {Navlinks.map((link) => (
                <Link key={link.title} href={link.href}>
                  <button className="hidden lg:flex flex-row text-lg h-16 items-center w-auto text-center text-wrap focus:border-b border-blue-800 border-solid">
                    {link.title}
                  </button>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative flex my-auto ml-5 lg:hidden">
              <button onClick={handleSearch}>
                <CiSearch color="white" size={25} />
                {search && (
                  <div className="fixed z-[50] flex items-center w-full bg-[#201343] border h-24 top-0 left-0 px-5 py-2">
                    <button>
                      <GoArrowLeft size={40} color="white" className="mx-5" />
                    </button>
                    <input
                      type="text"
                      placeholder="Lagi cari app atau game?"
                      className="flex py-2 w-full mr-5"
                    />
                  </div>
                )}
              </button>
            </div>
            <div className="hidden lg:flex absolute ml-2">
              <CiSearch color="black" size={25} />
            </div>

            <input
              className="hidden lg:flex rounded-md pl-10 py-3 pr-32 w-60 max-w-80"
              type="text"
              placeholder="Lagi cari app atau game?"
            />
            <div className="lg:hidden py-auto mt-2">
              <button onClick={toggle}>
                {openToggle ? (
                  <MdCancel color="white" size={35} />
                ) : (
                  <IoMenu color="white" size={35} />
                )}
              </button>
            </div>
            {openToggle ? null : (
              <Link
                href={"/login"}
                className="bg-blue-800 flex px-4 py-3 text-white rounded-md"
              >
                <button>MASUK</button>
              </Link>
            )}
          </div>
          {openToggle && <NavMobile />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
