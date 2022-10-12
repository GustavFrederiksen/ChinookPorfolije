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
}


/*

for (let i = 0; i < chinookUsSalesLatLng.length; i++) {
    L.to([chinookUsSalesLatLng[i].lat, chinookUsSalesLatLng[i].lng]).onmouseover(map);
    console.log(i)
}*/



/*const popup = L.popup();

function onMapClick() {
    popup
        .setLatLng(chinookUsSalesLatLng)
        .setContent(chinookUsSales.city + chinookUsSales.state + chinookUsSalesLatLng.toString())
        .openOn(map);
}


map.on('click', onMapClick);

 */


/*
map.addLayer();
    const markers =[];
    const marker1 = L.marker([chinookUsSalesLatLng],{title: 'marker_1'}).addTo(map).bindPopup('marker 1');
    markers.push(marker1);

    marker1.on('mouseover', function (ev){
        marker1.openPopup();
})

 */