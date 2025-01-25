"use client";

import { GoHome } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoGift } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

export default function SideBar() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  const router = useRouter();

  const handleNavigation = (section: string, path: string) => {
    setActiveSection(section);
    router.push(path);
  };

  return (
    <div className="w-[20%] min-h-screen bg-[#2B71F0] text-center py-6 px-6">
      <div className="min-h-screen space-y-6">
        <img src="./images/logo.png" alt="" className="text-white" />
        <SidebarItem
          href="/"
          icon={<GoHome className=" font-bold " size={25} />}
          label="Dashboard"
        />
        <SidebarItem
          href="/challenges"
          icon={<FaRegFileLines className=" font-bold" size={25} />}
          label="Challenges & Hackathons"
        />
        <div
          onClick={() => handleNavigation("Community", "/community")}
          className={`flex items-center gap-4 cursor-pointer${
            activeSection === "Community"
              ? "bg-white text-[#2B71F0] rounded-md"
              : "hover:bg-white hover:text-[#2B71F0] hover:rounded-md text-white"
          }  py-3 px-2 duration-300`}
        >
          <HiOutlineUserPlus className=" font-bold" size={25} />
          <p className=" font-normal text-xl">Community</p>
        </div>
      </div>
      <div className="space-y-4">
        <div
          onClick={() => handleNavigation("Settings", "/settings")}
          className={`flex items-center gap-4 ${
            activeSection === "Settings"
              ? "bg-white text-[#2B71F0] rounded-md"
              : "hover:bg-white hover:text-[#2B71F0] hover:rounded-md text-white"
          }  py-3 px-2 duration-300`}
        >
          <VscSettingsGear className="font-bold" size={20} />
          <p className="text-xl font-normal">Settings</p>
        </div>

        <SidebarItem
          href="/help"
          icon={<TfiHeadphoneAlt className="font-bold" size={20} />}
          label="Help center"
        />

        <div className="text-white text-xl flex gap-8 items-center py-12 px-3">
          <img
            src="./images/profile.png"
            alt="Profile image"
            className="w-10 h-10"
          />
          <section>
            <p className="text-start">Hilaire Sh</p>
            <p>hilaire@uidesign</p>
          </section>
          <GoSignOut className="font-bold" size={25} />
        </div>
      </div>
    </div>
  );
}

const SidebarItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  href: string;
}> = ({ icon, label, href }) => {
  const path = usePathname();

  const isActive = (pathname: string) => {
    return pathname === path;
  };

  return (
    <Link
      href={href}
      className={`flex items-center gap-4 ${
        isActive(href)
          ? "bg-white text-[#2B71F0] rounded-md"
          : "hover:bg-white hover:text-[#2B71F0] hover:rounded-md text-white"
      }  py-3 px-2 duration-300`}
    >
      {icon}
      <p className="text-xl font-normal">{label}</p>
    </Link>
  );
};
