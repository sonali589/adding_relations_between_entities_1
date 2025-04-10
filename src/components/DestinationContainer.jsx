import React from 'react';
import DestinationCard from './DestinationCard'; 

function DestinationContainer({ destinations }) {
  return (
    <div className="destination-container">
      {destinations.map((destination) => (
        <DestinationCard key={destination.id} destination={destination} />
      ))}
    </div>
  );
}

export default DestinationContainer;
