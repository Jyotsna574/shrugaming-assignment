import React from 'react'

function Header() {
    return (
        <header>
            <nav className="nav">
                
                <ul className="nav-items">
                    <li><a>PremiumCore</a></li>
                    <li><a><button className='DASHBOARD'>Dashboard</button></a></li>
                    <li><a>Chats</a></li>
                    <li><a>Requests</a></li>
                    <li><a>Announcements</a></li>
                </ul>
                <div className='profile'>
                    {/* <img src=''></img> */}
                    <h1>Vasma Graphix </h1>
                    <h2>Seller</h2>
                </div>
            </nav>
        </header>
    )
 }
 export default Header;
 