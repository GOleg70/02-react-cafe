import style from "./VoteOptions.module.css";
import type { VoteType } from "../../types/votes";

interface VoteOptionsProps {
  onVote: (type: VoteType) => void;
  onReset: () => void;
  canReset: boolean;
}

export default  function VoteOptions({ onVote, onReset ,canReset}: VoteOptionsProps){

    return (<div className={style.container}>
  <button className={style.button} onClick={()=>onVote("good")}>Good</button>
  <button className={style.button} onClick={()=>onVote("neutral")}>Neutral</button>
      <button className={style.button} onClick={() => onVote("bad")}>Bad</button>
      {canReset &&
        <button className={`${style.button} ${style.reset}`} onClick={()=>onReset()}>Reset</button>
      }
  
</div>)
    
};



