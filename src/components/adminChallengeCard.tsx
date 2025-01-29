import { SlArrowDown } from "react-icons/sl";
import { HiArrowSmallUp } from "react-icons/hi2";

interface adminChallengeCardProps {
  title: string;
  number: string;
  time: string;
  icon: React.ReactNode;
  width: string;
}

export default function AdminChallengeCard({
  title,
  number,
  time,
  icon,
  width,
}: adminChallengeCardProps) {
  return (
    <div
      className={`border-2 border-gray-200 rounded-xl w-[${width}%] py-4 px-6 space-y-6`}
    >
      <div className="flex items-center gap-2 justify-end ">
        <p className="text-gray-400">{time}</p>
        <SlArrowDown className="text-gray-600" />
      </div>
      <div className="flex  items-center gap-6 pb-8">
        {icon}
        <div className="rounded-md space-y-3">
          <p className="text-gray-500 font-medium text-xl">{title}</p>
          <div className="flex items-center gap-2">
            <h2 className="text-[#344054] text-xl font-bold">{number}</h2>
            <div className="text-blue-500 bg-[#E7F6EC] rounded-full px-3 hover:bg-[#2B71F0] hover:text-white flex gap-2 items-center">
              <HiArrowSmallUp className="" size={16} />
              <p className="text-sm">15%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
