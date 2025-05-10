import React from "react";
import "../style/About.css";

export default function About() {
  return (
    <main className="main">
      <h1 className="about-title">About Us</h1>
      <div className="about-container">
      <p className="about-text">
        Chambix is a dynamic TI job platform committed to connecting job seekers
        with the best employment opportunities. Our mission is to empower
        individuals by providing a user-friendly platform to search for jobs
         and explore companies. Every day, we help countless people
        find their IT path and life-changing job opportunities. Chambix is a
        proud initiative driven by a passionate team dedicated to transforming
        the IT job search experience, making it more accessible and impactful for
        everyone.
      </p>
      <img src="../../public/about-us.png" alt="" />
      </div>

    </main>
  );
}
