import React, { createContext, useContext, useState } from 'react';

const TripFormContext = createContext();

export const TripFormProvider = ({ children }) => {
    const [tripFormData, setTripFormData] = useState({
        formInput: null,
        recommendations: null,
    });

    return (
        <TripFormContext.Provider value={{ tripFormData, setTripFormData }}>
            {children}
        </TripFormContext.Provider>
    );
};

export const useTripForm = () => useContext(TripFormContext);
