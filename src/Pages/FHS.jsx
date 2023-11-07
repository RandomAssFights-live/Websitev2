import React, { useState, useEffect } from "react";
import Preloader from "../Components/Preloader";
import CountdownTimer from "../Components/Timer";
import "../Assets/CSS/input.css";

function FHS() {
  const targetDate = new Date("2023-11-04 16:55:16");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const videoSources = [
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/3nO4nw.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/4fcgtw.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/6Aln0U.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/cqIvTk.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/FZ3zEZ.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/ifHS5j.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/ioIacB.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/lTvL0D.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/nuxA43.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Ot8A25.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/vCveMp.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/VNnFxs.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/wg2gJN.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/wHiIbL.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/LoP45F.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/GhMk4.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Jh92Lp.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/GH8SZ.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/PlO54z.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/5xHj5k.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/Gh532S.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/H53AS1.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/AfE3Q1.mp4",
    "https://cdn.randomassfights.live/Videos/North%20America/Pennsylvania/Franklin%20High%20School/lOj92E.mp4",

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

export default FHS;
