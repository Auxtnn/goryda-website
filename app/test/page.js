"use client"

import React, {useEffect, useState} from 'react'

const page = () => {

  const [response, setResponse] = useState(null);

    //Function to send driver's availablility to the backend
    const sendDriverAvailability = async (driverId, name) => {

      
      const driverData = {
        id: driverId,
        name: name,
        location: {
          latitude: 40.7128, // Rider's latitude
          longitude: -74.0060, // Rider's longitude
        },
      };
    
      // Send data to backend
        await fetch('http://127.0.0.1:8000/api/driver-available', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(driverData),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Error:', error);
      });
    };

  useEffect(() => {
    const API_URL = 'http://127.0.0.1:8000/api/get-available-drivers'
    const API_KEY = 'my_api_key_1'

 
      const riderRequest = {
        rider_id: 123, // Your rider's ID
        location: {
          latitude: 49.7128, // Rider's latitude
          longitude: -77.0060, // Rider's longitude
        },
      };

    const fetchResponse = async () => {
      try {
        const response = await fetch(API_URL, {
          method: 'GET',
          headers: {
            // 'API-Key': API_KEY,
            'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': '*',
          },
          // body: JSON.stringify(riderRequest),
        });
    
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
    
        const responseData = await response.json();
        setResponse(responseData);
        console.log('Response:', responseData);
        // Handle the response data here
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle errors here
      }
    }
   fetchResponse()
   sendDriverAvailability(12345, 'Boluwatifee olaadre')
  }, [])


  return (
    <div>
      {JSON.stringify(response)}
    </div>
  )
}

export default page