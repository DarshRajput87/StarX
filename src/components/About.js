import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="typing-container">
      <h1 className="title">About StarX</h1>
      <div className="sentence-box">
        <p>
          <strong>StarX</strong> is a modern web platform designed to help users
          improve their skills and connect with technology in a creative way.
        </p>
        <p>
          Our mission is to provide engaging tools and experiences that inspire
          learning, growth, and innovation. Whether you’re a developer, designer,
          or enthusiast, StarX offers interactive features like typing tests,
          tutorials, and more—all built with a focus on simplicity and user
          experience.
        </p>
        <p>
          <em>Join us on our journey to make the web a better place for everyone!</em>
        </p>
      </div>
      <div className="Btn-container">
        <a href="/" className="Btn-Learn">
          Back to Home
        </a>
      </div>
    </div>
  );
}