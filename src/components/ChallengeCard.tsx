import { TiDocumentText } from "react-icons/ti";

interface ChallengeCardProps {
  title: string;
  number: string;
}

export default function ChallengeCard({ title, number }: ChallengeCardProps) {
  return (
    <div className="border border-gray-200 rounded-e-md p-3 w-[25%]">
      <div className="flex justify-between items-center gap-2">
        <div className="border-s-8 border-[#2B71F0] rounded-md p-2">
          <p className="text-[#344054] font-medium">{title}</p>
          <h2 className="text-[#344054] text-xl font-bold">{number}</h2>
        </div>
        <TiDocumentText className="text-[#2B71F0] bg-[#D0E0FC] rounded-full py-2 px-2" size={50}/>
      </div>
    </div>
  );
}
