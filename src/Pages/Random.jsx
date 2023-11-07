import React, { useState, useEffect } from "react";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import "../Assets/CSS/input.css";

function Random() {
  const targetDate = new Date("2023-09-23 22:25:30");
  const [loading, setLoading] = useState(true);

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

export default Random;
