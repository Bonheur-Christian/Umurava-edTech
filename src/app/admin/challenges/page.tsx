import ChallengeCategoryCard from "@/components/ChallengeCategoriesCard";
import Challenges from "@/components/Challenges";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import Link from "next/link";
import { GoPlus } from "react-icons/go";

export default function AdminChallenges() {
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
          <div>
            <h1 className="text-3xl text-gray-800 font-bold">Challenges</h1>
            <p className="text-gray-500 font-normal text-xl">
              Join a challenge or a hackathon to gain valuable work experience,
            </p>
          </div>
          <div className="flex gap-4 items-center border-b-2 border-gray-100 py-6">
            <ChallengeCategoryCard category="All Challenges" number={0} />
            <ChallengeCategoryCard category="Completed Challenges" number={0} />
            <ChallengeCategoryCard category="open Challenges" number={0} />
            <ChallengeCategoryCard category="Ongoing Challenges" number={0} />
            <Link
              href=""
              className="bg-[#2B71F0] hover:bg-blue-700 rounded-xl text-white font-medium px-6 py-4 flex gap-4 items-center"
            >
              <GoPlus size={30} />
              <p>Create New Challenge</p>
            </Link>
          </div>

          <div className="space-y-10 py-10">
            <Challenges
              href="challenges/details"
              challenges={[
                "Design a Dashboard for SokoFund, Fintech Product",
                "Design a Dashboard for SokoFund, Fintech Product",
                "Design a Dashboard for SokoFund, Fintech Product",
              ]}
              timeLine="12"
            />
            <Challenges
              href="challenges/details"
              challenges={[
                "Design a Dashboard for SokoFund, Fintech Product",
                "Design a Dashboard for SokoFund, Fintech Product",
                "Design a Dashboard for SokoFund, Fintech Product",
              ]}
              timeLine="12"
            />
          </div>
          <div className="flex justify-between items-center py-10">
            <button className="text-[#98A2B3] rounded-xl py-3 px-12 bg-white">
              Previous
            </button>
            <button className="text-white rounded-xl py-3 px-12 bg-[#2B71F0]">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
