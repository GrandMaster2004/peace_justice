import React from "react";
import "./home.css";
import hero from "../assets/hero-bg.png";
const Home = () => {
  return (
    <>
      <header class="header">
        <nav class="navbar">
          <h2 class="logo">
            <a href="#">Explorer</a>
          </h2>
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" id="hamburger-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
              width="24"
            >
              <path
                d="M3 12h18M3 6h18M3 18h18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </label>
          <ul class="links">
            <li>
              <a href="#">Purpose</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Education</a>
            </li>
            {/* <li>
              <a href="#">Portfolio</a>
            </li> */}
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div class="buttons">
            <a href="#" class="signin">
              Sign In
            </a>
            <a href="#" class="signup">
              Sign Up
            </a>
          </div>
        </nav>
      </header>
      <section class="hero-section">
        <div class="hero">
          <h2>Peace, Justice and Strong Institutions</h2>
          <p>
            “Where justice is denied, where poverty is enforced, where ignorance
            prevails, and where any one class is made to feel that society is an
            organized conspiracy to oppress, rob and degrade them, neither
            persons nor property will be safe.” - Frederick Douglass.
          </p>
          <div class="buttons">
            <a href="#" class="join">
              Join Now
            </a>
            <a href="#" class="learn">
              Learn More
            </a>
          </div>
        </div>
        <div class="img">
          <img src={hero} alt="hero image" />
        </div>
      </section>
    </>
  );
};

export default Home;
