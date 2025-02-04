"use client";

import ChallengeCard from "@/components/ChallengeCard";
import { IoEyeOutline } from "react-icons/io5";
import { SlArrowRight } from "react-icons/sl";
import Challenges from "@/components/Challenges";
import workSans from "../fonts/fonts";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import Link from "next/link";

export default function Home() {
  const challenges = [
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "open",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "closed",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "closed",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "open",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "open",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
    {
      id: 1,
      name: "Design a dashboard for SokoFund, FinTech Product",
      time: "12",
      status: "closed",
      skills: ["UX/UI Design", "Research", "User Research"],
    },
  ];
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        logoImageUrl="/images/logo.png"
        profileImageUrl="/images/profile.png"
        href={["/", "/challenges", "/settings", "/help", "/family"]}
      />
      <div className="ml-[20%] w-[80%]">
        <TopBar profileImageUrl="/images/profile.png" />
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
              <Link href={"/challenges"} className="font-medium">See all</Link>
              <SlArrowRight />
            </div>
          </div>
          <div className="flex items-center gap-16 flex-wrap">
            {challenges.map((item, index) => (
              <Challenges
                key={index}
                challengeId={item.id}
                challengeName={item.name}
                status={item.status}
                skillsRequired={item.skills}
                timeLine={item.time}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
