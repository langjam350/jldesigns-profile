"use client";

import Image from "next/image";
import { useEffect } from "react";

const projectSlides = [
  {
    id: 1,
    title: "Wellness World Wide Web",
    description: "A premier tool allowing users to track the microbiome in their body through diet tracking and predictive analytics.",
    image: "/project1.png", 
  },
  {
    id: 2,
    title: "Project Two",
    description: "Brief description of your second featured project.",
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
      
      {/* Rounding and shadow go HERE on the inner container */}
      <div className="carousel-inner shadow rounded-4 overflow-hidden">
        {projectSlides.map((slide, index) => (
          <div key={slide.id} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="5000">
            <div className="position-relative" style={{ height: "700px" }}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                style={{ objectFit: "cover" }}
                className="d-block w-100"
              />
              <div className="carousel-caption d-none d-md-block bg-dark rounded-3 p-2">
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