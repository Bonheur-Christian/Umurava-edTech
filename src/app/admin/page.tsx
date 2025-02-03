"use client";
import { SlArrowRight } from "react-icons/sl";
import Challenges from "@/components/Challenges";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import AdminChallengeCard from "@/components/adminChallengeCard";
import { TiDocumentText } from "react-icons/ti";

export default function AdminDashboard() {
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
        href={[
          "/admin",
          "admin/challenges",
          "admin/settings",
          "admin/help",
          "admin/family",
        ]}
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
          </div>
          <div className="flex  gap-6 py-12">
            <AdminChallengeCard
              width="50"
              title="Total Challenges"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              width="50"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
          </div>
          <div className="flex  gap-6 py-12">
            <AdminChallengeCard
              width="50"
              title="Total Challenges"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              width="50"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
            <AdminChallengeCard
              width="50"
              title="Total Participants"
              number="29,450"
              time="This Week"
              icon={
                <TiDocumentText
                  className="text-[#2B71F0]/70 bg-[#D0E0FC] rounded-full py-2 px-2"
                  size={70}
                />
              }
            />
          </div>

          <div className="flex justify-between py-6">
            <p className="text-xl font-medium "> Recent Challenges</p>
            <div className="text-[#2B71F0] flex justify-between items-center gap-2">
              <p className="font-medium">See all</p>
              <SlArrowRight />
            </div>
          </div>
          <div className="py-10 flex items-center gap-16 flex-wrap">
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
