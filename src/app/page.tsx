import { GoHome } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import ChallengeCard from "@/components/ChallengeCard";
import { IoEyeOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Challenges from "@/components/Challenges";
import { VscSettingsGear } from "react-icons/vsc";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { GoGift } from "react-icons/go";
import { GoSignOut } from "react-icons/go";
import workSans from "../fonts/fonts";


export default function Home() {
  return (
    <div className={`flex ${workSans.className}`}>
      <div className="w-[20%] min-h-screen bg-[#2B71F0] text-center py-6 px-6">
        <div className="min-h-screen space-y-6">
          <img src="./images/logo.png" alt="" className="text-white" />
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <GoHome className=" font-bold " size={25} />
            <p className=" font-normal text-xl">DashBoard</p>
          </div>
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <FaRegFileLines className=" font-bold" size={25} />
            <p className="font-normal text-xl">Challenges & Hackathons</p>
          </div>
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <HiOutlineUserPlus className=" font-bold" size={25} />
            <p className=" font-normal text-xl">Community</p>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <VscSettingsGear className="font-bold" size={20} />
            <p className="text-xl font-normal">Settings</p>
          </div>
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <TfiHeadphoneAlt className="font-bold" size={20} />
            <p className="text-xl font-normal">Help Center</p>
          </div>
          <div className="flex items-center gap-4 text-white hover:text-[#2B71F0] hover:bg-white hover:rounded-md py-3 px-2 duration-700">
            <GoGift className="font-bold" size={20} />
            <p className="text-xl font-normal">Refer family & friends</p>
          </div>

          <div className="text-white text-xl flex gap-8 items-center py-12 px-3">
            <img src="./images/profile.png" alt="Profile image" className="w-10 h-10" />
            <section>
              <p className="text-start">Hilaire Sh</p>
              <p>hilaire@uidesign</p>
            </section>
            <GoSignOut className="font-bold" size={25}/>
          </div>
        </div>
      </div>
      <div className="w-[80%]">
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

            <img
              src="./images/profile.png"
              className="w-12  h-12 "
              alt="Profile Image"
            />
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-6 ps-10 pe-10">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl text-gray-800 font-bold">
                Welcome back Hilaire,{" "}
              </h1>
              <p className="text-gray-500 font-normal text-xl">
                Build Work Experience Through Skills Challenges
              </p>
            </div>

            <button className="rounded-md bg-[#2B71F0] hover:bg-blue-700 flex gap-2 items-center text-white text-xl px-6 py-6 mt-10">
              <IoEyeOutline size={25} />
              View Profile
            </button>
          </div>
          <div className="flex justify-between py-12">
            <ChallengeCard title="Completed Challenges" number="05" />
            <ChallengeCard title="Open Challenges" number="200" />
            <ChallengeCard title="Ongoing Challenges" number="200" />
          </div>
          <div className="flex justify-between py-6">
            <p className="text-xl font-medium "> Recent Challenges</p>
            <div className="text-[#2B71F0] flex justify-between items-center gap-2">
              <p className="font-medium">See all</p>
              <SlArrowRight />
            </div>
          </div>
          <Challenges
            challenges={[
              "Design a Dashboard for SokoFund, Fintech Product",
              "Design a Dashboard for SokoFund, Fintech Product",
              "Design a Dashboard for SokoFund, Fintech Product",
            ]}
            timeLine="12"
          />
        </div>
      </div>
    </div>
  );
}
