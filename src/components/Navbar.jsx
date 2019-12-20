import React from 'react'
import '../components/Navbar.scss'

const Navbar = (props) => {
    return (
        <nav className={'mainNavbar'}>
            <ul>
                <li><a href={'#'}>
                        <div className="logo"> </div>
                    </a>
                </li>
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#'}>About</a></li>
                <li><a href={'#'}>Portfolio</a></li>
                <li><a href={'#'}>Services</a></li>
                <li><a href={'#'}>Contact</a></li>
                <li className={'myAccount'}><a href={'#'}>My Account</a></li>
            </ul>
            </nav>
    )
}



export default Navbar
