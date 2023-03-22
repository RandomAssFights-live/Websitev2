import React from 'react';
import '../Assets/CSS/input.css'

function DaytonHS() {
    return (
        <div>
            <div>
                <div className='border border-transparent rounded-lg p-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/gBWNCC.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/HKVRN.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/JZFCtr.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/RYALrB.mp4" controls='controls' width='250' height='400'></video>
                    </div>
                </div>
                <div className='border border-transparent rounded-lg p-4'>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/North%20America/Ohio/Dayton%20HS/XSZSik.mp4" controls='controls' width='250' height='400'></video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DaytonHS;