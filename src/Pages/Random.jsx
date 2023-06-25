import React from 'react';
import '../Assets/CSS/input.css'

function Random() {
    return (
        <div>
            <div>
                <div className='border border-transparent rounded-lg p-4'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/Random/VxALlH.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/Random/XOfKzH.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/Random/DjfgTz.mp4" controls='controls' width='250' height='400'></video>
                        <video className='h-[23rem]' src="https://cdn.randomassfights.live/Videos/Random/GJh5DX.mp4" controls='controls' width='250' height='400'></video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Random;
