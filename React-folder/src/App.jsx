import { Suspense, useState } from 'react'
import './App.css'
import Availible from './Components/Availible Players/Availible'
import Selected from './Components/Selected Players/Selected'
import Nav from './Components/Navbar/nav'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}
const fetchPromises = fetchPlayers();

function App() {
  const [availibleBalance, setAvailibleBalance] = useState(600000)
  const [toggle, setToggle] = useState(true)
  const [selectedPlayers, setSelectedPlayers] = useState([])

  // lift up state 
  const removePlayers = (player) => {
    const remove = selectedPlayers.filter(p => p.name !== player.name)
    setSelectedPlayers(remove);
    setAvailibleBalance(availibleBalance + player.price)
  }


  return (
    <>
    <ToastContainer position="top-right" autoClose={2000} />
      <Nav availibleBalance={availibleBalance} ></Nav>

      <div className=' mt-6 flex items-center justify-between mx-w[1280px] mx-auto my-0 p-2'>
        <h3 className='font-bold text-2xl'>{toggle === true ? "Availible Players" : `Selected Players (${selectedPlayers.length})`} </h3>
        <div className=''>
          <button onClick={() => setToggle(true)} className={`p-2 border-1 border-gray-300 rounded-l-xl ${toggle === true && "bg-amber-200"} `}>Availible</button>
          <button onClick={() => setToggle(false)} className={`p-2 border-1 border-gray-300 rounded-r-xl border-l-0 ${toggle === false && "bg-amber-200"} `} >Selected <span>({selectedPlayers.length})</span> </button>
        </div>
      </div>
      {
        toggle ? <Suspense fallback={<div className="flex justify-center items-center h-screen w-full">
          <span className="loading loading-spinner loading-lg"></span>
        </div>} >
          <Availible selectedPlayers={selectedPlayers} setSelectedPlayers={setSelectedPlayers} fetchPromises={fetchPromises} availibleBalance={availibleBalance} setAvailibleBalance={setAvailibleBalance} ></Availible>
        </Suspense> : <Selected removePlayers={removePlayers} selectedPlayers={selectedPlayers} ></Selected>
      }



    
    </>
  )
}

export default App
