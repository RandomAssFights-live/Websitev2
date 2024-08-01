import React, { useState, useRef, useEffect } from 'react';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const [progress, setProgress] = useState({});
    const [uploading, setUploading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [uploadRates, setUploadRates] = useState({});
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [canceledCount, setCanceledCount] = useState(0);
    const [uploadStarted, setUploadStarted] = useState(false);
    const xhrRefs = useRef({});

    useEffect(() => {
        if (!uploading && uploadedFiles.length + canceledCount === files.length && uploadStarted) {
            if (uploadedFiles.length === files.length) {
                setSuccessMessage('All videos uploaded successfully!');
            } else if (uploadedFiles.length > 0) {
                setSuccessMessage(`Uploaded ${uploadedFiles.length} video(s) successfully.`);
            }
        }
    }, [uploading, uploadedFiles.length, canceledCount, files.length, uploadStarted]);

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);

        if (selectedFiles.length > 0) {
            if (selectedFiles.some(file => !file.type.startsWith('video/'))) {
                clearMessages();
                setErrorMessage('Please select valid video files.');
                return;
            }

            const newFiles = selectedFiles.filter(file => !files.some(f => f.name === file.name));
            if (files.length + newFiles.length > 3) {
                clearMessages();
                setErrorMessage('You can upload a maximum of 3 videos at a time.');
                return;
            }

            setFiles(prevFiles => [...prevFiles, ...newFiles]);
            setProgress(prevProgress => ({
                ...prevProgress,
                ...Object.fromEntries(newFiles.map(file => [file.name, 0]))
            }));
            setUploadRates(prevRates => ({
                ...prevRates,
                ...Object.fromEntries(newFiles.map(file => [file.name, null]))
            }));
            clearMessages();
        }
    };

    const uploadFile = (file) => {
        const formData = new FormData();
        formData.append('file', file);

        const xhr = new XMLHttpRequest();
        xhrRefs.current[file.name] = xhr;
        xhr.open('POST', 'https://api-cdn.randomassfights.live/upload/upload.php', true);

        const startTime = new Date().getTime();
        let lastUploadedBytes = 0;

        xhr.upload.onprogress = (event) => {
            if (event.lengthComputable) {
                const percentComplete = Math.round((event.loaded / event.total) * 100);
                setProgress(prevProgress => ({ ...prevProgress, [file.name]: percentComplete }));

                const currentTime = new Date().getTime();
                const elapsedTime = (currentTime - startTime) / 1000;
                const bytesUploaded = event.loaded - lastUploadedBytes;
                lastUploadedBytes = event.loaded;

                const rate = bytesUploaded / elapsedTime;
                const rateMbps = (rate * 8) / (1024 * 1024);
                setUploadRates(prevRates => ({ ...prevRates, [file.name]: rateMbps.toFixed(2) }));
            }
        };

        xhr.onload = () => {
            if (xhr.status === 200) {
                const uploadTime = new Date().toLocaleString();
                setUploadedFiles(prevFiles => [...prevFiles, { name: file.name, time: uploadTime }]);
                clearMessages();
                setSuccessMessage(`All files were uploaded successfully!`);
                removeFile(file.name);
            } else {
                setErrorMessage(`File upload failed: ${xhr.responseText}`);
            }
            setUploading(false);
        };

        xhr.onerror = () => {
            setErrorMessage('Error uploading file. Please check the server URL and CORS settings.');
            setUploading(false);
        };

        setUploading(true);
        setUploadStarted(true);
        xhr.send(formData);
    };

    const startUploads = () => {
        if (files.length === 0) return;
        clearMessages();
        setUploading(true);
        files.forEach(file => uploadFile(file));
    };

    const cancelUpload = (fileName) => {
        const xhr = xhrRefs.current[fileName];
        if (xhr) {
            xhr.abort();
            setProgress(prevProgress => ({ ...prevProgress, [fileName]: 0 }));
            setUploadRates(prevRates => ({ ...prevRates, [fileName]: null }));
            setErrorMessage('Upload canceled.');
            delete xhrRefs.current[fileName];
        }
        removeFile(fileName);
        setCanceledCount(prevCount => prevCount + 1);
    };

    const removeFile = (fileName) => {
        setFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
        setProgress(prevProgress => {
            const { [fileName]: removed, ...rest } = prevProgress;
            return rest;
        });
        setUploadRates(prevRates => {
            const { [fileName]: removed, ...rest } = prevRates;
            return rest;
        });
    };

    const clearMessages = () => {
        setErrorMessage('');
        setSuccessMessage('');
    };

    return (
        <div className="flex flex-col items-center mt-4 p-4 border border-gray-700 rounded-lg bg-gray-800">
            <input
                type="file"
                accept="video/*"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
                multiple
            />
            {files.length === 0 ? (
                <label
                    htmlFor="fileInput"
                    className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
                >
                    Select Videos
                </label>
            ) : (
                <>
                    <div className="text-white mb-2">
                        {files.map(file => (
                            <div key={file.name} className="mb-2">
                                <div className="flex flex-col items-start">
                                    <div className="flex items-center">
                                        <div className="mr-2">Filename: {file.name}</div>
                                        {progress[file.name] !== undefined && (
                                            <div className="text-sm text-white">
                                                Progress: {progress[file.name]}%<br />
                                                Upload Rate: {uploadRates[file.name] ? `${uploadRates[file.name]} Mbps` : 'Calculating...'}
                                            </div>
                                        )}
                                        {progress[file.name] < 100 && (
                                            <button
                                                onClick={() => cancelUpload(file.name)}
                                                className="bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700 ml-2"
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </div>
                                    {progress[file.name] < 100 && (
                                        <div className="mt-2 w-full">
                                            <div className="bg-gray-300 rounded-full h-2">
                                                <div
                                                    className="bg-blue-600 h-2 rounded-full"
                                                    style={{ width: `${progress[file.name]}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <button
                                        onClick={() => removeFile(file.name)}
                                        className="bg-gray-600 text-white py-1 px-2 rounded hover:bg-gray-700 mt-2"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    {!uploading && files.length > 0 && (
                        <button
                            onClick={startUploads}
                            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                        >
                            Start Uploads
                        </button>
                    )}
                </>
            )}
            {uploading && (
                <div className="mt-2 text-center text-sm text-white">
                    Uploading {files.length} videos<br />
                    Uploaded: {uploadedFiles.length}/{files.length}
                </div>
            )}
            {uploadedFiles.length > 0 && (
                <div className="mt-4">
                    <h3 className="text-white mb-2">Uploaded Videos</h3>
                    <ul className="text-white">
                        {uploadedFiles.map(file => (
                            <li key={file.name}>
                                {file.name} - Uploaded at: {file.time}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {successMessage && (
                <div className="text-green-500 mt-2">
                    {successMessage}
                </div>
            )}
            {errorMessage && <div className="text-red-500 mt-2">{errorMessage}</div>}
        </div>
    );
};

export default Upload;
