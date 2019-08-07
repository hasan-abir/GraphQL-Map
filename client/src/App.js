import React from 'react'
import './App.scss'
import SearchFastfood from './components/SearchFastFood'
import headerLogo from './headerLogo.svg'


export default function App() {
    return (
        <div>
            <header>
                <img src={headerLogo} alt=""/>
                <h2>Fast Food Chains in Dhaka, Bangladesh<br/> and some of their branches</h2>
            </header>
            <SearchFastfood />           
        </div>
    )
}

