import React from 'react';




const SelectedPlayerCard = ({player, removePlayers}) => {
    
  const handleRemove =(player)=>{ 
    removePlayers(player)
    }

    

    return (
        <div className='border-1 border-gray-400 flex justify-between items-center p-2 rounded-xl'>
                  <div className='flex items-center gap-4'>
                    <img src={player.image} alt="" className='h-[50px] w-[50px] rounded-xl' />
                    <div>
                        <h4 className='font-medium text-xl'>{player.name}</h4>
                        <p className='text-gray-600'>{player.role}</p>
                    </div>
                  </div>
                  <div>
                    <p onClick={()=> handleRemove(player)} className='text-xl bg-gray-300 rounded-full p-3'>X</p>
                  </div>
            </div>
    );
};

export default SelectedPlayerCard;