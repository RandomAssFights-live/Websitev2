import React, { useState, useEffect } from "react";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import "../Assets/CSS/input.css";

function Random() {
  const targetDate = new Date("2023-11-11 04:13:57");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const videoSources = [
    "https://cdn.randomassfights.live/Videos/Random/VxALlH.mp4",
    "https://cdn.randomassfights.live/Videos/Random/XOfKzH.mp4",
    "https://cdn.randomassfights.live/Videos/Random/DjfgTz.mp4",
    "https://cdn.randomassfights.live/Videos/Random/GJh5DX.mp4",
    "https://cdn.randomassfights.live/Videos/Random/Ufdzj4.mp4",
    "https://cdn.randomassfights.live/Videos/Random/dWrE2P.mp4",
    "https://cdn.randomassfights.live/Videos/Random/bVh71w.mp4",
    "https://cdn.randomassfights.live/Videos/Random/aYq5Ta.mp4",
    "https://cdn.randomassfights.live/Videos/Random/5FD4Q8.mp4",
    "https://cdn.randomassfights.live/Videos/Random/UJ9aZS.mp4",
    "https://cdn.randomassfights.live/Videos/Random/LKOAs5.mp4",
    "https://cdn.randomassfights.live/Videos/Random/Gf4HaZ.mp4",
    "https://cdn.randomassfights.live/Videos/Random/VGf23Z.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/New%20Mexico/LK5AZ.mp4",
    "https://cdn.randomassfights.live/Videos/Random/HyF4Rz.mp4",
    "https://cdn.randomassfights.live/Videos/Random/LkO6Hz.mp4",
    "https://cdn.randomassfights.live/Videos/Random/SBX3A15.mp4",
  ];

  // Calculate the start and end indices for the videos on the current page
  const videosPerPage = 8; // Adjust this value based on your requirement
  const startIndex = (currentPage - 1) * videosPerPage;
  const endIndex = startIndex + videosPerPage;

  const paginatedVideos = videoSources.slice(startIndex, endIndex);

  // Handle pagination button clicks
  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
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
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber + 1)}
                  className={
                    currentPage === pageNumber + 1
                      ? "mx-2 font-bold bg-blue-500 text-white px-4 py-2 rounded"
                      : "mx-2 bg-nav-black text-white px-4 py-2 rounded"
                  }
                >
                  {pageNumber + 1}
                </button>
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

export default Random;
