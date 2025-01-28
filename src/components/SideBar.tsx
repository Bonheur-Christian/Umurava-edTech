"use client";

import { GoHome } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoGift } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { LiaTelegramPlane } from "react-icons/lia";
import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

interface SidebarItemProps {
  logoImageUrl: string;
  profileImageUrl: string;
}

export default function SideBar({
  logoImageUrl,
  profileImageUrl,
}: SidebarItemProps) {
  const [communityModalVisible, setCommunityVisible] = useState(false);
  return (
    <div className="w-[20%] h-screen fixed overflow-auto  bg-[#2B71F0] text-center flex flex-col justify-between p-6">
      <div className="space-y-6">
        <Image
          src={logoImageUrl}
          alt="Umurava Logo"
          className="text-white"
          width={50}
          height={50}
        />
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

        <SidebarItem
          onClick={() => setCommunityVisible(true)}
          label="Community"
          icon={<HiOutlineUserPlus className=" font-bold" size={25} />}
        />
      </div>
      <div className="space-y-4">
        <SidebarItem
          href="/settings"
          icon={<VscSettingsGear className="font-bold" size={20} />}
          label="Settings"
        />
        <SidebarItem
          href="/help"
          icon={<TfiHeadphoneAlt className="font-bold" size={20} />}
          label="Help center"
        />
        <SidebarItem
          href="/family"
          icon={<GoGift className="font-bold" size={20} />}
          label="Refer family & friends"
        />
        <div className="text-white text-xl flex gap-4 items-center py-8 px-3">
          <Image
            src={profileImageUrl}
            alt="Profile image"
            width={60}
            height={50}
          />
          <section>
            <p className="text-start">Hilaire Sh</p>
            <p>hilaire@uidesign</p>
          </section>
          <GoSignOut className="font-bold ms-6" size={30} />
        </div>
      </div>
      <Modal
        communityModalVisible={communityModalVisible}
        handleClose={() => setCommunityVisible(false)}
      />
    </div>
  );
}

const SidebarItem: React.FC<{
  label: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}> = ({ icon, label, href, onClick }) => {
  const path = usePathname();

  const isActive = (pathname: string) => {
    return pathname === path;
  };

  return (
    <Link
      onClick={onClick}
      href={href || "#"}
      className={`flex items-center gap-4 ${
        href && isActive(href)
          ? "bg-white text-[#2B71F0] rounded-md"
          : "hover:bg-white hover:text-[#2B71F0] hover:rounded-md text-white"
      }  py-3 px-2 duration-300`}
    >
      {icon}
      <p className="text-xl font-normal">{label}</p>
    </Link>
  );
};

const Modal: React.FC<{
  communityModalVisible: boolean;
  handleClose: () => void;
}> = ({ communityModalVisible, handleClose }) => {
  if (!communityModalVisible) {
    return null;
  }

  return createPortal(
    <div
    onClick={handleClose}
    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
  >
    <div
      onClick={(e) => e.stopPropagation()} 
      className="bg-white rounded-xl py-24 space-y-6 px-20 text-center w-[30%] shadow-lg"
    >
     
      <LiaTelegramPlane
        size={100}
        className="bg-[#D0E0FC] rounded-full text-[#2B71F0] p-6 mx-auto mb-6"
      />

      <h2 className="text-2xl font-bold text-black">Join our WhatsApp Community</h2>
      <p className="text-gray-600 text-lg mx-auto">
        Get notified about the latest projects and hackathons.
      </p>

      <button
        className="bg-blue-600 text-white text-lg py-3 px-8 rounded-xl font-medium hover:bg-blue-700"
      >
        Join
      </button>
    </div>
  </div>,

    document.body
  );
};
