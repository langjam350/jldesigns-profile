"use client";

import Image from "next/image";
import { useEffect } from "react";

const projectSlides = [
  {
    id: 1,
    title: "Wellness World Wide Web",
    description: "A premier Web App allowing users to track the microbiome in their body through diet tracking and predictive analytics.",
    image: "/project1.png", 
  },
  {
    id: 2,
    title: "Astrological Program",
    description: "Program using Skyfield, a python extension, to generate astrological reports given user input.",
    image: "/project2.jpg",
  },
  {
    id: 2,
    title: "Nodewave Analyzer",
    description: "Web                                                                                                                                App using node js to analyze the output from the NeuroSky Mindwave headset, providing insights into brain wave states.",
    image: "/project2.jpg",
  },
];

export default function Carousel() {
  useEffect(() => {
    // Ensure Bootstrap JS is loaded for the arrows to work
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    /* We removed shadow and overflow-hidden from here so the buttons can "hang" out */
    <div id="projectCarousel" className="carousel slide mb-5 position-relative" data-bs-ride="carousel">
      
      {/* Inner Container for rounding & shading */}
      <div className="carousel-inner shadow rounded-4 overflow-hidden">
      {projectSlides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`}>
          {/* Changed height from "600px" to auto.
              Added aspect-ratio: 5 / 3.
          */}
          <div className="position-relative w-100" style={{ aspectRatio: "5 / 3" }}>
              <Image
              src={slide.image}
              alt={slide.title}
              fill
              style={{ objectFit: "cover" }}
              className="d-block w-100"
              priority={index === 0}
              />
              <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded-3 p-2">
              <h5>{slide.title}</h5>
              <p>{slide.description}</p>
              </div>
          </div>
          </div>
      ))}
      </div>
      {/* Control Buttons */}
      <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#projectCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#projectCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}