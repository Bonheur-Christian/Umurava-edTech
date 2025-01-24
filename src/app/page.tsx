import { GoHome } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import ChallengeCard from "@/components/ChallengeCard";
import { IoEyeOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Challenges from "@/components/Challenges";

export default function Home() {
  return (
    <div className="flex">
      <div className="w-[20%] min-h-screen bg-[#2B71F0] text-center py-6 px-6 space-y-6">
        <img src="./images/logo.png" alt="" className="text-white" />
        <div className="flex items-center gap-2 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2">
          <GoHome className=" font-bold " size={30} />
          <p className=" font-normal text-xl">DashBoard</p>
        </div>
        <div className="flex items-center gap-2 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2">
          <FaRegFileLines className=" font-bold" size={30} />
          <p className="font-normal text-xl">Challenges & Hackathons</p>
        </div>
        <div className="flex items-center gap-2 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2">
          <HiOutlineUserPlus className=" font-bold" size={30} />
          <p className=" font-normal text-xl">Community</p>
        </div>
      </div>
      <div className="w-[80%]">
        <div className="flex justify-between items-center pb-4 ps-10 pe-10">
          <div className="relative w-[40%] mt-4">
            <svg
              className="absolute top-1/2 left-4 -translate-y-1/2 w-5 h-5 text-gray-400 cursor-pointer"
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
              className="pl-12 pr-4 py-2 w-full bg-[#F9FAFB] rounded-md shadow-sm focus:outline-none text-sm"
            />
          </div>
          <div className="flex items-center gap-2 pt-2">
            <IoNotificationsOutline
              className="bg-gray-200 rounded-full px-2 py-2 w-10 h-10 text-slate-700"
              size={25}
            />

            <img
              src="./images/avatar.png"
              className="w-12  h-12 "
              alt="Profile Image"
            />
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-6 ps-10 pe-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-2xl text-gray-600 font-bold">
                Welcome back Hilaire,{" "}
              </h1>
              <p className="text-gray-500 font-normal">
                Build Work Experience Through Skills Challenges
              </p>
            </div>

            <button className="rounded-md bg-[#2B71F0] hover:bg-blue-700 flex gap-2 items-center text-white px-2 py-4">
              <IoEyeOutline size={20} />
              View Profile
            </button>
          </div>
          <div className="flex justify-between py-12">
            <ChallengeCard title="Completed Challenges" number="05" />
            <ChallengeCard title="Open Challenges" number="200" />
            <ChallengeCard title="Ongoing Challenges" number="200" />
          </div>
          <div className="flex justify-between">
            <p className="text-md font-medium "> Recent Challenges</p>
            <div className="text-[#2B71F0] flex justify-between items-center gap-2">
              <p className="font-medium">See all</p>
              <SlArrowRight />
            </div>
          </div>
          <Challenges
            challenges={["test", "test", "test", "test"]}
            timeLine="12"
          />
        </div>
      </div>
    </div>
  );
}
