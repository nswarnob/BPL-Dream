import React, { use } from 'react';
import PlayersCard from '../PlayersCard/PlayersCard';


const Availible = ({ fetchPromises, setAvailibleBalance, availibleBalance, selectedPlayers, setSelectedPlayers }) => {

    const playersData = use(fetchPromises);

    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-w[1280px] mx-auto my-0 p-2'>

            {
                playersData.map(player => <PlayersCard selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} player={player} setAvailibleBalance={setAvailibleBalance} availibleBalance={availibleBalance} ></PlayersCard>)
            }

        </div>
    );
};

export default Availible;