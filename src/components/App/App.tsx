import CafeInfo from "../CafeInfo/CafeInfo";
import style from "./App.module.css";
import VoteStats from "../VoteStats/VoteStats";
import VoteOptions from "../VoteOptions/VoteOptions";
import type { Votes, VoteType } from "../types/votes";
import { useState } from "react";
import Notification from "../Notification/Notification";

export default function App() {
    const [vote, setVote] = useState<Votes>({
    good: 0,
	neutral: 0,
	bad: 0

    });
    
    const handleVote = (type:  VoteType) => {
        setVote(prevVotes => ({
            ...prevVotes,
            [type]: prevVotes[type] + 1,
        }));
    };
    
const resetVotes = () => {
    setVote({
        good: 0,
        neutral: 0,
        bad: 0
    });

    

};

    const totalVotes = vote.good + vote.neutral + vote.bad;
    
    const positiveRate = totalVotes
    ? Math.round((vote.good / totalVotes) * 100)
    : 0

        return (
            <div className={style.app}>
                
                <CafeInfo />
                <VoteOptions
                    onVote={handleVote}
                    onReset={resetVotes}
                    canReset={totalVotes > 0} />
                
                {totalVotes>0? < VoteStats  votes={vote} 
                totalVotes={totalVotes} 
                positiveRate={positiveRate}
                /> : <Notification
               /> }
                

                
                
            </div>
        );
}



