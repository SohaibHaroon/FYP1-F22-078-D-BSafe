import React from 'react';
import Profiles from './profiles'
import { Leaderboard } from './database';
import './leaderboard.css'


const Board = () =>{
    
    const seeRank=(e)=>{
     console.log(e.target);
    }

    return(
        <>
            <div className="board">
                <h1>Leaderboard</h1>
                <div className='duration'>
                    <button onClick={seeRank}>See Your Rank</button>
                </div>
                <Profiles Leaderboard={Leaderboard}/>
            </div>
        </>
    )
}

export default Board;
