import Image from "next/image";
import { IoNotificationsOutline } from "react-icons/io5";

interface TopBarProps {
  profileImageUrl: string;
}

export default function TopBar({ profileImageUrl}:TopBarProps) {
  return (
    <>
      <div className="flex justify-between items-center pb-4  ps-10 pe-10">
        <div className="relative w-[55%] mt-4">
          <svg
            className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-700 cursor-pointer"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a6 6 0 104.472 10.154l3.38 3.381a1 1 0 001.415-1.414l-3.38-3.381A6 6 0 008 2zm4 6a4 4 0 11-8 0 4 4 0 018 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            type="search"
            placeholder="Search here..."
            className="pl-12 pr-4 py-4 w-full bg-[#F9FAFB] rounded-md shadow-sm focus:outline-none text-sm"
          />
        </div>
        <div className="flex items-center gap-2 pt-2">
          <IoNotificationsOutline
            className="bg-gray-200 rounded-full px-2 py-2 w-10 h-10 text-slate-700"
            size={25}
          />

          <Image
            src={profileImageUrl}
            alt="Profile Image"
            width={50}
            height={50}
          />
        </div>
      </div>
    </>
  );
}
