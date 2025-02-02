"use client";
import Image from "next/image";
import Link from "next/link";

interface ChallengesProps {
  challengeId: number;
  challengeName: string;
  timeLine: string;
  status: string;
  skillsRequired: string[];
}

export default function Challenges({
  challengeId,
  challengeName,
  timeLine,
  status,
  skillsRequired,
}: ChallengesProps) {
  return (
      <div className="border-2 border-gray-200 rounded-xl px-6 w-[30%]">
        <div className="space-y-6 border-b-2 border-gray-200 py-6 ">
          <div className="relative bg-[#2B71F0] py-12 mb-6 rounded-xl flex justify-center items-center h-[200px] ">
            <Image
              src="/images/logo.png"
              alt="Umurava logo"
              width={50}
              height={50}
            />
            <p className="text-2xl font-bold text-white">Umurava</p>
            <button className={`absolute top-4 right-2 ${status ==="open" ?"bg-[#0F973D]":status ==="ongoing"? "bg-orange-500":"bg-red-500"  }  text-white font-bold px-6 py-1 rounded-full`}>
              {status}
            </button>
          </div>

          <Link
            href={`challenges/details/${challengeId}`}
            className="text-2xl font-semibold text-gray-800 truncate block overflow-hidden whitespace-nowrap"
          >
            {challengeName}
          </Link>
          <p className="font-medium">Skills needed:</p>
          <div className="flex gap-4">
            {skillsRequired.map((item, index) => (
              <SkillsButton key={index} skill={item} />
            ))}
          </div>
          <p>
            <span className="font-medium">Seniority Level:</span>{" "}
            <span className="font-medium text-gray-500">
              (Junior, Intermediate , Senior)
            </span>
          </p>
          <p>
            <span className="font-medium">Timeline:</span>{" "}
            <span className="font-medium text-gray-500">{timeLine} Days</span>
          </p>
        </div>
        <div className="py-6">
          <button className="bg-[#2B71F0] text-white font-medium px-3 py-2 rounded-md border-t-2 border-gray-200">
            View Challenge
          </button>
        </div>
      </div>
  );
}

const SkillsButton: React.FC<{ skill: string }> = ({ skill }) => {
  return (
    <button className="border-2 border-[#2B71F0] py-2 px-2 rounded-2xl text-[#2B71F0] font-medium ">
      {skill}
    </button>
  );
};
