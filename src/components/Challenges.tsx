
interface ChallengesProps{
    challenges:string[],
    timeLine:string
}

export default function Challenges({challenges, timeLine}:ChallengesProps){
    return(
        <div className="flex justify-between">
            {
                challenges.map((challenge, index)=>(
                    <div key={index} className="border border-gray-200 rounded-md p-4 w-[20%]">
                         <div className="bg-[#2B71F0] py-12 rounded-md flex justify-center items-center">
                            <img src="./images/logo.png" alt="Umurava logo" />
                            <p className="text-2xl font-bold text-white">Umurava</p>
                         </div>
                         <p>{challenge}</p>
                         

                    </div>
                ))
            }
        </div>
    )
}