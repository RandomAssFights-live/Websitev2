import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import "../Assets/CSS/input.css";

function OCHS() {
  const targetDate = new Date("2024-02-29 03:44:20");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    // Parse the page parameter from the URL
    const searchParams = new URLSearchParams(location.search);
    const page = parseInt(searchParams.get("page")) || 1;
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [location.search]);

  const videoSources = [
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/2f6ECU.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/3DNayt.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/3EQgc2.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/5Cmedn.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/68zUat.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/C1vNad.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/dTnqx6.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/FUV2gD.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/k0BkwK.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/M0qBmC.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/mtrQK8.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/Nxm0H4.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/rv8TPe.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/RyqzX6.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/w1hXBX.mp4",
    "https://cdn.randomassfights.live/Static/Videos/North%20America/Pennsylvania/Oil%20City%20High%20School/ZqxV93.mp4",
  ];

  // Calculate the start and end indices for the videos on the current page
  const videosPerPage = 8; // Adjust this value based on your requirement
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  const paginatedVideos = videoSources.slice(startIndex, endIndex);

  // Handle pagination button clicks
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    const totalPages = Math.ceil(videoSources.length / videosPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <CountdownTimer targetDate={targetDate} />
          <div className="border border-transparent rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              {paginatedVideos.map((source, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden bg-black"
                  style={{ width: "200px", height: "400px", margin: "auto" }}
                >
                  <video
                    className="w-full h-full"
                    src={source}
                    controls
                    style={{ objectFit: "contain" }}
                  ></video>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button
                className="bg-nav-black text-white px-4 py-2 rounded mr-2"
                onClick={handlePrevPage}
                disabled={currentPage === 1}
              >
                Prev Page
              </button>
              {[
                ...Array(Math.ceil(videoSources.length / videosPerPage)).keys(),
              ].map((pageNumber) => (
                <Link
                  key={pageNumber}
                  to={`${location.pathname}?page=${pageNumber + 1}`}
                  className={
                    currentPage === pageNumber + 1
                      ? "mx-2 font-bold bg-blue-500 text-white px-4 py-2 rounded"
                      : "mx-2 bg-nav-black text-white px-4 py-2 rounded"
                  }
                >
                  {pageNumber + 1}
                </Link>
              ))}
              <button
                className="bg-nav-black text-white px-4 py-2 rounded ml-2"
                onClick={handleNextPage}
                disabled={
                  currentPage === Math.ceil(videoSources.length / videosPerPage)
                }
              >
                Next Page
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default OCHS;
