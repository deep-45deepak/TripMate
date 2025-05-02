import React from "react";

export default function FacilityList({ facilities }) {
  if (!facilities.length)
    return <p className="text-center text-gray-600">No facilities to show.</p>;

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
      {facilities.map((facility, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.02] transition-transform"
        >
          <h2 className="text-xl font-semibold text-blue-700">
            {facility.name}
          </h2>
          <p className="text-gray-700 text-sm">{facility.vicinity}</p>
          {facility.rating && (
            <p className="text-yellow-600 text-sm">
              Rating: {facility.rating}
            </p>
          )}
          {facility.opening_hours && (
            <p className="text-sm text-green-600">
              {facility.opening_hours.open_now ? "Open Now" : "Closed"}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
