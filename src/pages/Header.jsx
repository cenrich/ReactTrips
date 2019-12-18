import React from 'react'
import '../pages/Header.scss'

const Header = (props) => {
    return (
        <header>
            <div className={"mainHeader"}>
                <h2>Welcome to Ada Flights</h2>
                <h1>Cheap Flights Best Deals</h1>
                <h3>Search hundreds of travel sites at once</h3>
            </div>
        </header>
    )
}



export default Header