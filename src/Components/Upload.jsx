// import React, { useState } from 'react';

// const Upload = () => {
//     const [file, setFile] = useState(null);

//     const handleFileChange = (e) => {
//         setFile(e.target.files[0]);
//     };

//     const uploadFile = async () => {
//         if (!file) {
//             alert('Please select a file first');
//             return;
//         }

//         const formData = new FormData();
//         formData.append('file', file);

//         try {
//             // const response = await fetch('https://api.randomassfights.live/upload.php', {
//             const response = await fetch('http://172.16.0.186/upload/upload.php', {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 alert('File uploaded successfully!');
//             } else {
//                 const errorText = await response.text();
//                 alert(`File upload failed: ${errorText}`);
//             }
//         } catch (error) {
//             console.error('Error uploading file:', error);
//             alert(`Error uploading file: ${error.message}`);
//         }
//     };

//     return (
//         <div className="flex flex-col items-center mt-4">
//             <input
//                 type="file"
//                 onChange={handleFileChange}
//                 className="mb-2 p-2 border border-gray-300 rounded"
//             />
//             <button
//                 onClick={uploadFile}
//                 className="bg-nav-black text-white py-2 px-4 rounded hover:bg-blue-600"
//             >
//                 Upload
//             </button>
//         </div>
//     );
// };

import React, { useState } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setProgress(0);
        setErrorMessage('');
    };

    const uploadFile = () => {
        if (!file) {
            alert('Please select a file first');
            return;
        }

        // Define FormData here
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'http://172.16.0.186/upload/upload.php', true);

        // Progress tracking
        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            setUploading(false);
            setProgress(0); // Reset progress after upload
            if (xhr.status === 200) {
                alert('File uploaded successfully!');
            } else {
                const errorText = xhr.responseText;
                setErrorMessage(`File upload failed: ${errorText}`);
            }
        };

        xhr.onerror = () => {
            setUploading(false);
            setProgress(0);
            setErrorMessage('Error uploading file. Please check the server URL and CORS settings.');
        };

        setUploading(true);
        xhr.send(formData);
    };

    return (
        <div className="flex flex-col items-center mt-4">
            <input
                type="file"
                onChange={handleFileChange}
                className="mb-2 p-2 border border-gray-300 rounded"
            />
            <button
                onClick={uploadFile}
                className="bg-nav-black text-white py-2 px-4 rounded hover:bg-blue-600"
                disabled={uploading}
            >
                Upload
            </button>
            {uploading && (
                <div className="mt-2 w-full">
                    <div className="bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="text-center text-sm mt-1">{progress}%</div>
                </div>
            )}
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
    );
};

export default Upload;
