import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/Navbar.min.css'

function Navbar() {
    return (
        <nav className='bg-nav-black p-[17px] text-center font-bold text-white font-abril-fatface font-rubik'>
            <Link className='text-lg p-[6px]' to='/'>Home</Link>
            <Link className='text-lg p-[6px]' to='/Schools/Districts/FHS'>Franklin HS</Link>
            <Link className='text-lg p-[6px]' to='/Schools/Districts/OCHS'>Oil City HS</Link>
        </nav>
    );
}

export default Navbar;