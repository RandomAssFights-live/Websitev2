import React, { useState, useEffect } from "react";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import "../Assets/CSS/input.css";

function DaytonHS() {
  const targetDate = new Date("2023-04-09 17:04:35");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const videoSources = [
    "https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/HKVRN.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/RYALrB.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/XSZSik.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/gBWNCC.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/JZFCtr.mp4",
    // Add more video URLs as needed
  ];

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <CountdownTimer targetDate={targetDate} />
          <div className="border border-transparent rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
              {videoSources.map((source, index) => (
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
          </div>
        </div>
      )}
    </div>
  );
}

export default DaytonHS;
