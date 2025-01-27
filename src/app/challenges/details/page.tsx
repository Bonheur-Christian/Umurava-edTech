import ChallengeDetails from "@/components/ChallengeDetails";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import { HiArrowSmallLeft } from "react-icons/hi2";

export default function Details() {
  return (
    <div className={`flex ${workSans.className}`}>
      <SideBar logoImageUrl="../images/logo.png" />
      <div className="w-[80%]">
        <div className="border-b-2 border-gray-300">
          <TopBar profileImageUrl="../images/profile.png" />
        </div>
        <div className="flex gap-6 items-center ps-10 py-6">
          <div className="border border-gray-200 rounded-md px-4 py-4 ">
            <HiArrowSmallLeft />
          </div>
          <p className="text-gray-700 text-xl ">Go Back</p>
          <p className="text-gray-700 text-xl">Challenges & Hackathons \</p>
          <a href="" className="text-[#2B71F0] text-xl ">
            Design a Dashboard for Sokofund
          </a>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-10 pe-10 flex items-center border-t-2 border-gray-200">
          <div className="w-[55%] border-2 border-gray-200 rounded-xl py-10 px-6">
            <div className="bg-[#2B71F0]  rounded-xl flex justify-center items-center h-[350px]">
              <img src="../images/logo.png" alt="Umurava logo" />
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

          <div></div>
        </div>
      </div>
    </div>
  );
}
