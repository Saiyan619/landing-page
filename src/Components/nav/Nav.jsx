import React, { useState } from 'react';
import Hamburger from 'hamburger-react';
import './nav.css';

const Nav = () => {
    const [isOpen, setOpen] = useState(false);

    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div>
            <nav>
                <div>
                    <img className="hero_logo" src="./5b680f7ddc6fa8394a12fc7f_logo-spoon-white.svg" alt="Logo" />
                </div>

                <div className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>

                <div
                    className={isOpen ? 'list_and_btn_container_active' : 'list_and_btn_container'}
                >
                    <ul>
                        <li onClick={() => handleScroll('section1')}>Features</li>
                        <li onClick={() => handleScroll('section3')}>Premium</li>
                        <li onClick={() => handleScroll('section4')}>Pricing</li>
                        <li onClick={() => handleScroll('section5')}>About</li>
                        <li onClick={() => handleScroll('section7')}>Sign-In</li>
                    </ul>

                    <div>
                        <button className="nav_btn">Get started</button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav
