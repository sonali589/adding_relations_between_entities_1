import React from "react";

function DestinationCard({ destination }) {
    return (
        <div className="destination-card">
            <img src={destination.image}  alt={destination.name} />
            <h2>{destination.name}</h2>
            <p>{destination.location}</p>
            <p>{destination.description}</p>
            <p><strong>{destination.price}</strong></p>
            


        </div>
    );
}

export default DestinationCard;