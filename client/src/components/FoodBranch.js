import React, {useState} from 'react'
import {mapPin} from './Svg'
import Map from './Map'

export default function FoodBranch({branch, classList}) {
    const [isOpen, setIsOpen] = useState(false)

    const onClick = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <div key={branch.id} className={classList}>
            <h1>{branch.name}</h1>
            <h2><span>Address:</span> {branch.address}</h2>
            <h2><span>Number:</span> {branch.number}</h2>
            <p>Opening Hours -</p>
            <ul>
                <li><span>Monday:</span> {branch.monday}</li>
                <li><span>Tuesday:</span> {branch.tuesday}</li>
                <li><span>Wednesdayy:</span> {branch.wednesday}</li>
                <li><span>Thursday:</span> {branch.thursday}</li>
                <li><span>Friday:</span> {branch.friday}</li>
                <li><span>Saturday:</span> {branch.saturday}</li>
                <li><span>Sunday:</span> {branch.sunday}</li>
            </ul>
            <button onClick={onClick}>{mapPin} Location on Map</button>
            <div className={isOpen? 'map map-active': 'map'}>
                <Map name={branch.name} latitude={branch.latitude} longitude={branch.longitude} id={branch.id} isOpen={isOpen}/>
            </div>
        </div>
    )
}
