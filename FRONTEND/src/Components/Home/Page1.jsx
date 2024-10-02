import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./css/Page1.css";

const Page1 = () => {
  const navigate = useNavigate(); // Create an instance of useNavigate

  // Function to handle button click
  const handleStartBlogging = () => {
    navigate('/write'); // Navigate to the WriteAndUpdate page
  };

  return (
    <div className="page container home-pg1 d-flex justify-content-center align-items-center">
      <div className="page1-container p-5">
        <button onClick={handleStartBlogging}>Start Blogging!</button> {/* Attach the function to the button */}
      </div>
    </div>
  );
};

export default Page1;
