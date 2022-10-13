const map = L.map('map').setView([37.8, -96], 4);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//L.geoJson(statesData).addTo(map);
for (let i = 0; i <chinookUsSalesLatLng.length; i++) {
    let currentMarker = L.marker([chinookUsSalesLatLng[i].lat, chinookUsSalesLatLng[i].lng]);
    let  popup = L.popup().setContent(chinookUsSales.city + chinookUsSales.state);
    currentMarker.bindPopup(popup).openPopup();
    currentMarker.addTo(map);
};

var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

//L.marker([38.575947, -121.475962], {icon: redIcon}).addTo(map);
    const homeMarker = L.marker([38.575947, -121.475962], {icon: redIcon}, { bounceOnAdd: true });
    homeMarker.bindPopup('Our New Store', {
        closeButton: true
    });
    homeMarker.addTo(map);

/*const chinookPopups = L.marker([currentMarker], { bounceOnAdd: true });
chinookPopups.bindPopup(chinookUsSales.city + chinookUsSales.state, {
    closeButton: true
});
chinookPopups.addTo(map);


 */
