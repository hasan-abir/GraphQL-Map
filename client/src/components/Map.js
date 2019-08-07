import React, { Component } from 'react'
import L from 'leaflet'

export default class Map extends Component {
    componentDidMount() {
        this.map = L.map(this.props.id).setView([this.props.latitude, this.props.longitude], 18);

        const marker = L.marker([this.props.latitude, this.props.longitude]).addTo(this.map);

        const popup = `<p>${this.props.name}</p>`

        marker.bindPopup(popup, {
            maxWidth: 'auto'
        }).openPopup();

        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            minZoom: 18,
            id: 'mapbox.streets',
            // accessToken: 'pk.eyJ1IjoiYWJpcm1lYWRvd3MiLCJhIjoiY2p5cHVqdzY1MGUzcDNodWd1aXA1MnVwdyJ9.2oPWD8a4wnf6vLSiJvnFLA'
        }).addTo(this.map);
    }
    
    render() {
        return (
            <div>
                <div id={this.props.id} style={{height: '250px'}}></div>
            </div>
        )
    }
}
