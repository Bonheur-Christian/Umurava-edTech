"use client";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import workSans from "@/fonts/fonts";
import { HiArrowSmallLeft } from "react-icons/hi2";
import { useState, ChangeEvent, useEffect } from "react";

export default function AdminEditChallengesDetails() {
  const [text, setText] = useState<string>("• ");
  const [requirementsText, setRequirementsText] = useState<string>("•");
  const [deliverablesText, setDeliverablesText] = useState<string>("•");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let value = e.target.value;

    if (value.endsWith("\n")) {
      value += "• ";
    }

    setText(value);
  };

  const handleRequirementsChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (value.endsWith("\n")) {
      value += "• ";
    }
    setRequirementsText(value);
  };

  const handleDeliverablesChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    let value = e.target.value;

    if (value.endsWith("\n")) {
      value += "• ";
    }
    setDeliverablesText(value);
  };

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
            <p className="text-gray-400 text-xl">Challenges & Hackathons /</p>
            <a
              href="/admin/challenges/edit"
              className="text-[#2B71F0] text-xl font-medium"
            >
              Create New Challenge
            </a>
          </div>
        </div>
        <div className="bg-[#F9FAFB] py-12 ps-10 flex gap-12 border-t-2 border-gray-200">
          <form className="bg-white border-2 border-gray-200 rounded-xl py-6 px-2 w-[60%] mx-auto">
            <div className="space-y-2">
              <legend className="text-3xl font-semibold text-center">
                Edit a Challenge
              </legend>
              <p className="text-gray-500 text-xl text-center">
                Fill out these details to build your broadcast
              </p>
            </div>
            <div className="px-6 space-y-6">
              <div className="">
                <label htmlFor="title" className="block text-xl text-gray-600">
                  Challenge/ Hackathon title
                </label>
                <input
                  type="text"
                  value={"Design a Dashboard For SoKofund"}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-2  xl"
                />
              </div>
              <div className="flex items-center w-full gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="deadline"
                    className="block text-xl text-gray-600"
                  >
                    Deadline
                  </label>
                  <input
                    type="text"
                    value={"24/12/2024"}
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-2xl"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="duration"
                    className="block text-xl text-gray-600"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    value={"7 Days"}
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-2xl"
                  />
                </div>
              </div>
              <div className="flex items-center w-full gap-6">
                <div className="flex-1">
                  <label
                    htmlFor="prize"
                    className="block text-xl text-gray-600"
                  >
                    Money Prize
                  </label>
                  <input
                    type="text"
                    value={"$150"}
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-2xl"
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-xl text-gray-600"
                  >
                    Contact Email
                  </label>
                  <input
                    type="text"
                    value={"talent@umurava.africa"}
                    className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 outline-none focus:border-red-300 text-2xl"
                  />
                </div>
              </div>
              <div className="py-4">
                <label
                  htmlFor="duration"
                  className="block text-xl text-gray-600"
                >
                  Project Brief
                </label>
                <textarea
                  value={
                    "A Fintech company that is developing a Digital Financial Platform designed for businesses and their workforce in Africa is partnering with Umurava to run a Skills Challenge for Product Design. This Fintech Company offers Payroll Management System to Employers and Embedded Financial services and products to Employees and Gig Workers across Africa."
                  }
                  name="projectBrief"
                  id="projectBrief"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-2xl"
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 50 characters
                </p>
              </div>
              <div className="py-4">
                <label
                  htmlFor="projectDescription"
                  className="block text-xl text-gray-600"
                >
                  Project Description
                </label>
                <textarea
                  name="projectDescription"
                  id="projectDescription"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-2xl"
                  value={text}
                  onChange={handleChange}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 250 characters
                </p>
              </div>
              <div className="py-4">
                <label
                  htmlFor="requirements"
                  className="block text-xl text-gray-600"
                >
                  Project Requirements
                </label>
                <textarea
                  name="requirements"
                  id="requirements"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-2xl"
                  value={requirementsText}
                  onChange={handleRequirementsChange}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 500 characters
                </p>
              </div>
              <div className="py-4">
                <label
                  htmlFor="deliverable"
                  className="block text-xl text-gray-600"
                >
                  Deliverables
                </label>
                <textarea
                  name="deliverable"
                  id="deliverable"
                  rows={7}
                  className="border-2 border-gray-100 rounded-xl w-full px-4 py-6 text-gray-500 outline-none focus:border-red-300 text-2xl"
                  value={deliverablesText}
                  onChange={handleDeliverablesChange}
                />
                <p className="text-xl text-gray-500">
                  {" "}
                  Keep this simple of 500 characters
                </p>
              </div>
              <div className="flex items-center gap-10 w-full">
                <button className="border-2 border-[#2B71F0] bg-white hover:bg-[#2B71F0] hover:text-white duration-500 text-[#2B71F0] rounded-xl py-6 px-6 w-[35%] text-xl">
                  Cancel
                </button>
                <button className="border-2 border-[#2B71F0] bg-[#2B71F0] hover:bg-blue-800 duration-500 text-white rounded-xl py-6 px-6 flex-1 text-xl">
                  Update challenge
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
