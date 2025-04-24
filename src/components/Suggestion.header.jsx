import React from 'react'

function SuggestionHeader() {
  return (
    <div>
              <header className="p-2 md:px-10">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="font-bold bg-gradient-to-r from-teal-500 via-blue-400 to-pink-500 text-transparent bg-clip-text text-2xl">
            TripMate
          </div>
          <ul className="w-auto space-x-6 text-xl hidden md:flex">
            <li><a href="/" className="hover:text-blue-500 text-blue-500  font-semibold">Home</a></li>
            <li><a href="#Destination" className="hover:text-blue-400 text-teal-500 font-semibold">Top Destinations</a></li>
            <li><a href="#Contact" className="hover:text-blue-500 text-teal-500 font-semibold">Contact</a></li>
          </ul>
          <a href="/login" className="bg-red-500 text-white px-4 py-2 rounded-lg active:bg-green-700">Log Out</a>
        </nav>
      </header>
    </div>
  )
}

export default SuggestionHeader;