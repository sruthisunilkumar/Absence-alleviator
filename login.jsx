// AnimatedLoginForm.jsx
import React from 'react';
import './sty2.css'; // Import the CSS file for styling

const AnimatedLoginForm = () => {
  return (
    <div className="container">
      <div className="login-box">
        <h2>Login</h2>
        <form action="#">
          <div className="input-box">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input type="password" required />
            <label>Password</label>
          </div>
          <div className="forget-pass">
            <a href="#">Forget your password?</a>
          </div>
          <button type="submit" className="btn">
            Login
          </button>
          <div className="signup-link">
            <nav>
              <ul>
                <li>
                  <a href="signup.html">Signup</a>
                </li>
              </ul>
            </nav>
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

export default AnimatedLoginForm;
