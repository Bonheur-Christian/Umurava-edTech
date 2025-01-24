interface ChallengesProps {
  challenges: string[];
  timeLine: string;
}

export default function Challenges({ challenges, timeLine }: ChallengesProps) {
  return (
    <div className="flex justify-between">
      {challenges.map((challenge, index) => (
        <div
          key={index}
          className="border-2 border-gray-200 rounded-xl p-6 w-[32%] space-y-4"
        >
          <div className="bg-[#2B71F0] py-12 rounded-xl flex justify-center items-center h-[200px]">
            <img src="./images/logo.png" alt="Umurava logo" />
            <p className="text-2xl font-bold text-white">Umurava</p>
          </div>
          <p className="text-xl font-semibold text-gray-800">{challenge}</p>

          <p className="font-medium">Skills needed:</p>
          <div className="flex gap-4">
            <button className="border-2 border-[#2B71F0] py-2 px-3 rounded-2xl text-[#2B71F0] font-medium ">
              UX/UI Design
            </button>
            <button className="border-2 border-[#2B71F0] py-2 px-3 rounded-2xl text-[#2B71F0] font-medium ">
              Research
            </button>
            <button className="border-2 border-[#2B71F0] py-2 px-3 rounded-2xl text-[#2B71F0] font-medium ">
              User Research
            </button>
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

          <button className="bg-[#2B71F0] text-white font-medium px-3 py-2 rounded-md">
            View Challenge
          </button>
        </div>
      ))}
    </div>
  );
}
