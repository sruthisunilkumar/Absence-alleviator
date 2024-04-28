
import React, { useState } from 'react';
import LoginPage from './login.jsx'; // Import the LoginPage component
import SignupPage from './signup.jsx'; // Import the SignupPage component
import RegisterPage from './register.jsx'; // Import the RegisterPage component
import './App.css'; // Import CSS file for styling

const App = () => {
  const [currentPage, setCurrentPage] = useState('welcome'); // State to manage current page

  // Event handler to navigate to the login page
  const handleLoginButtonClick = () => {
    setCurrentPage('login');
  };

  // Event handler to navigate to the signup page
  const handleSignupButtonClick = () => {
    setCurrentPage('signup');
  };

  // Event handler to navigate to the register page
  const handleRegisterButtonClick = () => {
    setCurrentPage('register');
  };

  // Function to render the current page based on the currentPage state
  const renderPage = () => {
    switch (currentPage) {
      case 'welcome':
        return (
          <div className="welcome-page">
            <h1>Welcome to ABSENCE ALLEVIATOR</h1>
..........................................................................................................................................................................................................................................................            <p>Please select an option below:</p>
            <button onClick={handleLoginButtonClick}>Go to Login</button>
            <button onClick={handleSignupButtonClick}>Go to Signup</button>
            <button onClick={handleRegisterButtonClick}>Go to Register</button>
          </div>
        );
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignupPage />;
      case 'register':
        return <RegisterPage />;
      default:
        return null;
    }
  };

  return <div className="app-container">{renderPage()}</div>;
};

export default App;
