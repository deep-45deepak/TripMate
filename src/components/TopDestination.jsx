import React from 'react'

function TopDestination() {
  return (
    <div>
         {/* Destination Section */}
      <section id="Destination" className="destinations text-center py-20 px-10 bg-mintcream">
        <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 text-4xl font-bold py-10">Top Destinations For Your Next Vacation</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Bali", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e" },
            { name: "Bangkok", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/07/sicily.jpg?w=500&h=400&s=1" },
            { name: "Cancún", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRpRdaXzzRmAwVbDBkDxzIo64nXLsQ9q5Plw&s" },
            { name: "Nha Trang", image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=500&h=400&s=1" },
          ].map(({ name, image }) => (
            <div
              key={name}
              className="bg-cover bg-center h-40 rounded-lg text-white flex items-center justify-center text-xl font-semibold shadow-lg"
              style={{ backgroundImage: `url('${image}')` }}
            >
              {name}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default TopDestination