import React from 'react';
import SelectedPlayerCard from '../SelectedPlayerCard/SelectedPlayerCard';

const Selected = ({ selectedPlayers, removePlayers }) => {
    return (
        <div className='mx-w[1280px] mx-auto my-0 mt-10 space-y-4'>

            {
                selectedPlayers.map(player => <SelectedPlayerCard removePlayers={removePlayers} player={player} ></SelectedPlayerCard>)
            }
        </div>
    );
};

export default Selected;