import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css"; // MUST be here
import Carousel from "../components/carousel/Carousel"; // Importing your new component

export const metadata: Metadata = {
  title: "JLDesigns - Home",
  description: "Welcome to JLDesigns, showcasing my created projects and skills.",
};

export default function Home() {
  return (
    <div className="container-fluid min-vh-100 d-flex flex-column p-0">
      <main className="container flex-grow-1 py-5">
        
        {/* Hero Section */}
        <section className="row justify-content-center align-items-center mb-5">
          
          {/* Hero Text Column */}
          <div className="col-lg-8 col-xl-6 text-center">
            <h1 className="display-3 fw-bold mb-3">JL Designs</h1>
            <hr className="border-2 border-primary mx-auto" style={{ width: '50px' }} />
            <p className="lead text-muted mb-4">
              Showcasing storied developer skills through a demonstration of projects.
            </p>
          </div>

          {/* Carousel Column */}
          <div className="col-lg-10 col-xl-11 px-5 position-relative">
            <Carousel />
          </div>
          
        </section>

        {/* Call to Action Section */}
        <div className="bg-light p-4 rounded-4 shadow-sm border">
          <div className="row align-items-center gy-3 text-center">
            <div className="col-md-4">
              <Link href="/projects" className="btn btn-primary btn-lg w-100">
                View My Projects
              </Link>
            </div>
            <div className="col-md-4">
              <a
                href="https://github.com/langjam350"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-dark btn-lg w-100"
              >
                GitHub Profile
              </a>
            </div>
            <div className="col-md-4 text-md-end">
              <span className="h5 mb-0 fw-bold">#### Commits in the last year!</span>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-top py-4 text-center">
        <div className="container">
          <p className="mb-0 text-secondary">
            © {new Date().getFullYear()} JLDesigns. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}