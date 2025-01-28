import ChallengeDetails from "@/components/ChallengeDetails";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { IoMailOutline } from "react-icons/io5";
import { BiBriefcase } from "react-icons/bi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import Image from "next/image";

export default function Details() {
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        logoImageUrl="../images/logo.png"
        profileImageUrl="../images/profile.png"
      />
      <div className="ml-[20%] w-[80%]">
        <div className="border-b-2 border-gray-300">
          <TopBar profileImageUrl="../images/profile.png" />
        </div>
        <div className="flex gap-6 items-center ps-10 py-6">
          <div className="border border-gray-200 rounded-md px-4 py-4 ">
            <HiArrowSmallLeft />
          </div>
          <p className="text-gray-600 text-xl ">Go Back</p>
          <p className="text-gray-400 text-xl">Challenges & Hackathons \</p>
          <a href="" className="text-[#2B71F0] text-xl ">
            Design a Dashboard for Sokofund
          </a>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-10 flex gap-12 border-t-2 border-gray-200">
          <div className="w-[55%] border-2 border-gray-200 rounded-xl py-10 px-10 space-y-6">
            <div className="bg-[#2B71F0]  rounded-xl flex justify-center items-center h-[350px]">
              <Image src="../images/logo.png" alt="Umurava logo" />
              <p className="text-2xl font-bold text-white">Umurava</p>
            </div>
            <div>
              <ChallengeDetails
                projectName="Payroll and HR Management System"
                description="A Fintech company that is developing a Digital Financial
        Platform designed for businesses and their workforce in Africa is
        partnering with Umurava to run a Skills Challenge for Product Design.
        This Fintech Company offers Payroll Management System to Employers and
        Embedded Financial services and products to Employees and Gig Workers
        across Africa."
              />
            </div>
          </div>

          <div className="w-[38%]">
            <div className="border-2 border-gray-200 rounded-xl px-8 py-10 space-y-6">
              <h1 className="text-2xl text-gray-800 font-bold">
                Key Instructions:
              </h1>
              <p className="text-gray-600 text-xl pb-4">
                You are free to schedule the clarification call with the team via
                this
              </p>
              <div className="space-y-6">
                <Instructions
                  icon={<IoMailOutline size={30} />}
                  title="talent@umurava.africa"
                  description="Contact Email "
                />
                <Instructions
                  icon={<BiBriefcase size={30} />}
                  title="Web Design"
                  description="Challenge Category"
                />
                <Instructions
                  icon={<FaRegCalendarAlt size={30} />}
                  title="7 Days"
                  description="Duration"
                />
                <Instructions
                  icon={<AiOutlineDollar size={30} />}
                  title="$150-$400"
                  description="Money Prize"
                />
              </div>
              <div className="py-6">
                <button className="bg-[#2B71F0] rounded-xl px-10 py-6 text-white text-xl font-medium w-full">
                  Submit your work
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Instructions: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="bg-[#D0E0FC] text-[#2B71F0] rounded-full px-3 py-3">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-semibold text-gray-800">{title}</p>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
};
