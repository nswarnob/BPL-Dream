import React, { use } from 'react';
import userImg from '../../assets/user1.png'
import reportImg from '../../assets/report.png'

const Availible = ({ fetchPromises }) => {

    const playersData = use(fetchPromises);
    console.log(playersData)
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-y-5 mt-10'>

      {
        playersData.map( player => <div class="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img
                        src={player.image}
                        alt="Shoes" />
                </figure>
                <div class="mt-4 space-y-3">
                    <div className='flex' ><img src={userImg} alt=""  />
                        <h2 class="card-title ml-2"> {player.name} </h2>
                        </div>
                    <div className='flex items-center justify-between pb-2 border-b-1 border-gray-300'>
                        <div className='flex gap-3'>
                            <img src={reportImg} alt="" className='w-[25px] h-[25px]'/>
                             <span> {player.country} </span>
                        </div>
                        <button className='btn btn-sm rounded-1xl'> {player.role} </button>                  
                    </div>
                     <div className='flex justify-between font-bold'>
                        <span >Rating</span>
                        <span> {player.rating} </span>
                     </div>
                      <div className='flex justify-between'>
                        <p> {player.battingStyle} </p>
                        <p> {player.bowlingStyle} </p>
                      </div>


                    <div class="card-actions flex justify-between items-center">
                        <p className='font-medium'> ${player.price} </p>
                        <button class="btn bg-white rounded-1xl">Choose player</button>
                    </div>
                </div>
            </div> )
      }




            
        </div>
    );
};

export default Availible;