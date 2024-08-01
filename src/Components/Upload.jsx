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

        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api-cdn.randomassfights.live/upload/upload.php', true);

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setProgress(percentComplete);
            }
        };

        xhr.onload = () => {
            setUploading(false);
            setProgress(0);
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
        <div className="flex flex-col items-center mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
            <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
            />
            {!file ? (
                <label
                    htmlFor="fileInput"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
                >
                    Select Media
                </label>
            ) : (
                <>
                    <div className="text-white mb-2">
                        Filename: {file.name}
                    </div>
                    <button
                        onClick={uploadFile}
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 disabled:bg-gray-500"
                        disabled={uploading}
                    >
                        Upload
                    </button>
                </>
            )}
            {uploading && (
                <div className="mt-2 w-full">
                    <div className="bg-gray-300 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="text-center text-sm mt-1 text-white">Progress: {progress}%</div>
                </div>
            )}
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
    );
};

export default Upload;
