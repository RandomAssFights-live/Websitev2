// import React, { useState, useEffect } from 'react';

// const NewContentAlert = () => {
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     const lastPopupTime = localStorage.getItem('lastPopupTime');
//     const currentTime = new Date().getTime();

//     if (!lastPopupTime || (currentTime - parseInt(lastPopupTime) > 30 * 60 * 1000)) {
//       setShowAlert(true);
//     }
//   }, []);

//   const handleClose = () => {
//     localStorage.setItem('lastPopupTime', new Date().getTime().toString());
//     setShowAlert(false);
//   };

//   return (
//     <>
//       {showAlert && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-4 rounded shadow-md">
//             <button className="absolute top-0 right-0 mr-2 mt-1 text-gray-500 hover:text-black" onClick={handleClose}>
//               Close
//             </button>
//             <p>This is your new content alert.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default NewContentAlert;
