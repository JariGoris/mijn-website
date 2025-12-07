let mapP = L.map('mapP1').setView([51.397507, 4.794749], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mapP);

// plaats icon.png als marker op de map
let markerIconP1 = L.icon({
    iconUrl: './assets/images/icon.png',
    iconSize: [60, 60],
    iconAnchor: [0, 60],
    popupAnchor: [0, 0]
});

L.marker([51.396000, 4.796000], ).addTo(mapP);