import React from 'react'
import { Leaderboard } from './database';
import first_position from './first_pos.png'
import second_position from './second_pos.png'
import third_position from './third_pos.png'
export default function profiles({ Leaderboard }) {

Leaderboard.sort((a, b) => b.score - a.score);
let i=0;
Leaderboard.forEach((e) => {
    e.rank = ++i;
    if (e.rank === 1)
        e.badge = 'https://github.com/SohaibHaroon/BSafe/blob/main/first_pos.png?raw=true'
    else if (e.rank === 2)
        e.badge = 'https://github.com/SohaibHaroon/BSafe/blob/main/second_pos.png?raw=true'
    else if (e.rank === 3)
        e.badge = 'https://github.com/SohaibHaroon/BSafe/blob/main/third_pos.png?raw=true'
    else
        e.badge =''
});

  return (
        <div id="profile">
            {Item(Leaderboard)}
        </div> 
  )
}


function Item(data){
    
    return (

        <>
            {
                data.map((value, index) => (
                    <div className="flex" key={index}>
                        <div className="item">
                            <div className='medal'>
                               <img src={value.badge}/>
                            </div>
                            <img src={value.img} alt="" />
                            <div className="info">
                                <h3 className='name text-dark'>{value.name}</h3>    
                                <span>{value.username}</span>
                            </div>                
                        </div>
                        <div className="item">
                            <span>{value.score}</span>
                        </div>
                    </div>
                    )
                )
            }
        </>

        
    )
}