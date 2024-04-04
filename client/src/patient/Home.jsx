import React from 'react';

const PatientPage = ({ setToken }) => {


  const handleButton1Click = () => {
    // Handle button 1 click
    console.log("Button 1 clicked");
  };

  const handleButton2Click = () => {
    // Handle button 2 click
    console.log("Button 2 clicked");
  };

  const handleButton3Click = () => {
    // Handle button 3 click
    console.log("Button 3 clicked");
  };

  const handleButton4Click = () => {
    // Handle button 4 click
    console.log("Button 4 clicked");
  };

  return (
    <div className="patient-page">
      <h1>Patient Page</h1>
      <p>Welcome to the Patient Page. Here you can access patient-specific features.</p>
      <div className="button-container">
        <button onClick={handleButton1Click}>Create and send an emergency alert </button>
        <button onClick={handleButton2Click}>Fitness games page </button>
        <button onClick={handleButton3Click}>Enter daily information </button>
        <button onClick={handleButton4Click}>Checklist of common signs and symptoms </button>
        <LogoutButton setToken={setToken} />
      </div>
    </div>
  );
};

const LogoutButton = ({ setToken }) => {
  const handleLogout = () => {
    // Perform logout logic here (e.g., clear token)
    setToken(null);
    // Handle successful logout (e.g., redirect user)
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default PatientPage;