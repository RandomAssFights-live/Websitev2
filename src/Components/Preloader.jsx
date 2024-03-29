import React from "react";

const Preloader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border-t-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
    </div>
  );
};

export default Preloader;
