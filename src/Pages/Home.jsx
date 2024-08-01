import React from "react";
import Upload from "../Components/Upload";

function Home() {
  return (
    <div>
      <div>
        <div className="pt-4 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold font-abril-ratface font-rubik mb-8 text-center text-white">
            Random Ass Fights
          </h1>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.randomassfights.live/Static/Assets/Logo/IMG/G2Q8BaZcFz.png"
              alt="RandomAssFights"
              className="rounded-lg overflow-hidden"
            />
          </div>
          <div>
            <h1 className="pt-4 text-4xl font-bold font-abril-ratface font-rubik mb-8 text-center text-white">
              Want to add a video?
            </h1>
          </div>
          <div className="">
            <p className="font-semi-bold font-abril-ratface font-rubik mb-8 text-center text-white">
              <Upload />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
