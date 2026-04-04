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
    <div className="container-fluid p-0">
      <main>
        {/* The Grey Wrapper:
            - container: Maintains your intentional partial width.
            - min-vh-100: Stretches from the very top to the very bottom.
            - d-flex flex-column: Allows us to use 'mt-auto' on the footer.
            - bg-secondary-subtle: Your professional grey background.
        */}
        <div className="golden-ratio-width bg-secondary-subtle min-vh-100 d-flex flex-column p-0 side-shadow">
          
          {/* Main Content Area */}
          <div className="flex-grow-1 px-4 px-md-5 py-5">
            {/* Hero Section */}
            <section className="row justify-content-center align-items-center mb-5 mt-lg-4">
              <div className="col-lg-8 col-xl-6 text-center">
                <h1 className="display-3 fw-bold mb-3">JL Designs</h1>
                <hr className="border-2 border-primary mx-auto" style={{ width: '50px' }} />
                <p className="lead text-muted mb-4">
                  Showcasing storied developer skills through a demonstration of projects.
                </p>
              </div>

              {/* Carousel Column */}
              <div className="d-flex justify-content-center w-100 position-relative">
                <div className="golden-inner-carousel px-lg-5">
                  <Carousel />
                </div>
              </div>
            </section>

            {/* Call to Action Section */}
            <div className="bg-white p-4 rounded-4 shadow-sm border mt-4">
              <div className="row align-items-center gy-3 text-center">
                <div className="col-md-4">
                  <a
                    href="https://github.com/langjam350"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-dark btn-lg w-100"
                  >
                    Resume
                  </a>
                </div>
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

              </div>
              <div className="row align-items-center gy-3 text-center p-4">
                <div className="col-md-4">
                  <Link href="/principles" className="btn btn-primary btn-lg w-100">
                    Principles
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="/social-media" className="btn btn-primary btn-lg w-100">
                    Social Media
                  </Link>
                </div>
                <div className="col-md-4">
                  <Link href="/blog" className="btn btn-primary btn-lg w-100">
                    Blog
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Footer: Now inside the grey box and pushed to the bottom */}
          <footer className="mt-auto py-4 text-center border-top border-secondary-subtle">
            <p className="mb-0 text-secondary">
              © {new Date().getFullYear()} JLDesigns. All rights reserved.
            </p>
          </footer>
          
        </div>
      </main>
    </div>
  );
}