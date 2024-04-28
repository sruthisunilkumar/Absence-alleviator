// SignupForm.jsx

import React from 'react';
import './sty3.css'; // Import the CSS file for styling

const SignupForm = () => {
  return (
    <div className="container">
      <div className="signup-box">
        <h2>Signup</h2>
        <form action="#">
          <div className="input-box">
            <input type="text" required />
            <label>Full Name</label>
          </div>
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">
            Signup
          </button>
          <div className="login-link">
            <p>
              Already have an account?{' '}
              <nav>
                <ul>
                  <li>
                    <a href="log1.html">Login</a>
                  </li>
                </ul>
              </nav>
            </p>
          </div>
        </form>
      </div>
      {/* Animation spans (assuming they are used for CSS animations) */}
      {[...Array(50).keys()].map((i) => (
        <span key={i} style={{ '--i': i }}></span>
      ))}
    </div>
  );
};

export default SignupForm;
