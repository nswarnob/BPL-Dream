import { Suspense } from 'react'
import './App.css'
import Availible from './Components/Availible Players/Availible'
import Selected from './Components/Selected Players/Selected'
import Nav from './Components/Navbar/nav'


const fetchPlayers = async () => {
  const res = await fetch('/players.json')
  return res.json();
}



function App() {

  const fetchPromises = fetchPlayers();


  return (
    <>
      <Nav></Nav>
     
      <Suspense fallback={<div className="flex justify-center items-center h-screen w-full">
      <span className="loading loading-spinner loading-lg"></span>
    </div>} >
        <Availible fetchPromises={fetchPromises} ></Availible>
      </Suspense>

      <Selected></Selected>
    </>
  )
}

export default App
