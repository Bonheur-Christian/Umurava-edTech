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
import { CiSearch } from "react-icons/ci";
import { VscListFilter } from "react-icons/vsc";

export default function AdminChallengesDetails() {
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar
        logoImageUrl="/images/logo.png"
        profileImageUrl="/images/profile.png"
        href={["/", "/challenges", "/settings", "/help", "/family"]}
      />
      <div className="ml-[20%] w-[80%]">
        <div className="border-b-2 border-gray-300">
          <TopBar profileImageUrl="/images/profile.png" />
        </div>
        <div className="flex items-center w-[96%] justify-between">
          <div className="flex gap-6 items-center ps-10 py-6">
            <div className="border border-gray-200 hover:bg-gray-100 duration-500 rounded-md px-4 py-4">
              <HiArrowSmallLeft />
            </div>
            <p className="text-gray-600 text-xl">Go Back</p>
            <p className="text-gray-400 text-xl">Challenges & Hackathons \</p>
            <a href="" className="text-[#2B71F0] text-xl">
              Design a Dashboard for Sokofund
            </a>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center text-xl text-gray-500">
              <CiSearch />
              <p>Search</p>
            </div>
            <div className="flex gap-2 items-center text-xl text-gray-500">
              <VscListFilter />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-10 flex gap-12 border-t-2 border-gray-200">
          <div className="w-[55%] border-2 border-gray-200 rounded-xl py-10 px-10 space-y-6">
            <div className="bg-[#2B71F0] rounded-xl flex justify-center items-center h-[350px]">
              <Image
                src="/images/logo.png"
                alt="Umurava logo"
                width={100}
                height={100}
              />
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

          <div className="w-[38%] space-y-12">
            <div className="border-2 border-gray-200 rounded-xl px-8 py-10 space-y-6">
              <h1 className="text-2xl text-gray-800 font-bold">
                Key Instructions:
              </h1>
              <p className="text-gray-600 text-xl pb-4">
                You are free to schedule the clarification call with the team
                via this
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
              <div className="py-6 flex gap-8 ">
                <button className="bg-red-500 hover:bg-blue-700 duration-500 rounded-xl px-10 py-6 text-white text-xl font-medium w-[50%]">
                  Delete
                </button>
                <button className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-xl px-10 py-6 text-white text-xl font-medium w-[50%]">
                  Edit
                </button>
              </div>
            </div>
            <div className="border-2 border-gray-200 rounded-xl px-8">
              <div className="border-b-2 border-gray-100 mx-[-2rem] w-[113%] ps-8 flex items-center gap-3 py-8">
                <p className="text-2xl text-gray-700 font-bold ">
                  Participants
                </p>
                <p className="bg-[#2B71F0] text-white px-4 rounded-xl">250</p>
              </div>
              <Participants
                profileImageUrl="/images/profile.png"
                participant="Hilaire Sh"
                role="Product Designer"
              />
              <Participants
                profileImageUrl="/images/profile.png"
                participant="Christian Manzi"
                role="UX/UI Designer"
              />
              <Participants
                profileImageUrl="/images/profile.png"
                participant="Jolly Mutesi"
                role="Content Creator"
              />
              <Participants
                profileImageUrl="/images/profile.png"
                participant="Dr. Samuel Smith"
                role="Mental Health Professional"
              />
              <Participants
                profileImageUrl="/images/profile.png"
                participant="Dr. Lily Chen"
                role="Dermatologist"
              />

              <div className="py-6">
                <button className="bg-[#2B71F0] hover:bg-blue-700 duration-500 rounded-xl px-10 py-6 text-white text-xl font-medium w-full">
                  View All
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

const Participants: React.FC<{
  profileImageUrl: string;
  participant: string;
  role: string;
}> = ({ profileImageUrl, participant, role }) => {
  return (
    <div className="py-8 border-b-2 border-gray-100 mx-[-2rem] w-[113%] ps-8 flex items-center gap-3">
      <Image src={profileImageUrl} alt="Umurava logo" width={50} height={50} />
      <div className="">
        <p className="text-xl text-gray-700 font-medium ">{participant}</p>
        <p className="text-gray-500 font-medium">{role}</p>
      </div>
    </div>
  );
};
