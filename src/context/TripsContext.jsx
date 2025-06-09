
import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const TripsContext = createContext();

export const TripsProvider = ({ children }) => {
  const [domesticTrips, setDomesticTrips] = useState([]);
  const [foreignTrips, setForeignTrips] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrips = async () => {
    try {
      setLoading(true);
      const domesticResponse = await axios.get('/preferences/domestic-trip');
      const foreignResponse = await axios.get('/preferences/foreign-trip');

      setDomesticTrips(domesticResponse.data.sort(() => 0.5 - Math.random()));
      setForeignTrips(foreignResponse.data.sort(() => 0.5 - Math.random()));
    } catch (error) {
      console.error('Error fetching trips: context', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <TripsContext.Provider value={{ domesticTrips, foreignTrips, loading, fetchTrips }}>
      {children}
    </TripsContext.Provider>
  );
};

export const useTrips = () => useContext(TripsContext);



