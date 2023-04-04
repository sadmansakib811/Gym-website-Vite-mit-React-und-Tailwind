import { useState } from 'react'
import cover from './img/cover.jpg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import PriceList from './components/PriceList.jsx/PriceList'

function App() {
  

  const scrollToPriceList = () => {
    document.getElementById("priceList").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <Navbar></Navbar>
      {/* cover pic */}
      <div className="relative">
      <img
        src={cover}
        alt="Gym Cover"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Welcome to our gym</h1>
        <p className="text-lg mt-4">Get fit, feel great, and have fun!</p>
        <button onClick={scrollToPriceList} className="mt-8 px-6 py-3 bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none">
          Join Now
        </button>
      </div>
    </div>
      
      <PriceList></PriceList>
    </div>
  )
}

export default App
