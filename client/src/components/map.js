import React, { useState, useEffect } from 'react';
import ugmLogo from '../assets/ugm.png';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet/dist/leaflet';
import 'leaflet-draw/dist/leaflet.draw.css';
import 'leaflet-draw/dist/leaflet.draw';

function Map({missionName}) {

    useEffect(() => {
        const GSP_coord = [-7.770121424862446, 110.37784742786181];

        ///---- UGM
        const UGMIcon = L.icon({
            iconUrl: ugmLogo,
            iconSize: [80, 80],
            popupAnchor: [-3, -76]
        });

        //map layer attributes
        const osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const osm = L.tileLayer(osmUrl, {
            maxZoom: 18,
            attribution: osmAttrib
        });
        const googleUrl = 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}';
        const googleAttrib = 'Google Maps';
        const google = L.tileLayer(googleUrl, {
            maxZoom: 18,
            attribution: googleAttrib
        });

        var map = L.map('mapid', {
            center: GSP_coord,
            zoom: 18,
            minZoom: 5
        })

        const markUGM = L.marker(GSP_coord, {
            icon: UGMIcon,
            title: 'Grha Sabha Pramana',
            bubblingMouseEvents: true
        }).bindTooltip("Grha Sabha Pramana").openTooltip();

        markUGM.addTo(map)
        markUGM.on('click', function (e) {
            map.flyTo([e.latlng.lat, e.latlng.lng], 18);
        })

        var drawnItems = new L.FeatureGroup();

        L.control.layers({
            "Street View": osm.addTo(map),
            "Satelite": google
        }, { 'drawlayer': drawnItems }, { position: 'topright', collapsed: false }).addTo(map);

        var drawControl = new L.Control.Draw({
            draw: {
                polygon: {
                    allowIntersection: false,
                    showArea: true
                }
            },
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        map.on('draw:created', e => {
            drawnItems.addLayer(e.layer);
        })

        return () => {
            map.off()
            map.remove()
        }
    })

    return (
        <div style={{width:'85%'}}>
            <div id="mission-title">
                <p>Active Mission: {missionName}</p>
            </div>
            <div>
                <div id='mapid' style={{ height: '93vh' }}></div>
            </div>
        </div>

    )
}

export default Map;
