const chinookUsSales = {
    Sheet1: [
        {
            city: 'Salt Lake City',
            state: 'Utah',
            amount: 7,
            'lat, lng': '40.758701, -111.876183',

        },{
            city: 'Tucson',
            state: 'Arizona',
            amount: 7,
            'lat, lng': '32.253460, -110.911789',

        },{
            city: 'Reno',
            state: 'Nevada',
            amount: 7,
            'lat, lng': '39.530895, -119.814972',
        },{
            city: 'Redmond',
            state: 'Oregon',
            amount: 7,
            'lat, lng': '44.272621, -121.173920'
        },{
            city: 'Orlando',
            state: 'Florida',
            amount: 7,
            'lat, lng': '28.538336, -81.379234'
        },{
            city: 'New York City',
            state: 'New York',
            amount: 7,
            'lat, lng': '40.730610, -73.935242'
        },{
            city: 'Mountain View',
            state: 'California',
            amount: 14,
            'lat, lng': '37.386051, -122.083855',

        },{
            city: 'Madison',
            state: 'Wisconsin',
            amount: 7,
            'lat, lng': '43.073051, -89.402130',

        },{
            city: 'Fort Worth',
            state: 'Texas',
            amount: 7,
            'lat, lng': '32.768799, -97.309341',
        },{
            city: 'Cupertino',
            state: 'California',
            amount: 7,
            'lat, lng': '39.530895, -119.814972'
        },{
            city: 'Reno',
            state: 'Nevada',
            amount: 7,
            'lat, lng': '37.322905, -122.032284'
        },{
            city: 'Chicago',
            state: 'Illinois',
            amount: 7,
            'lat, lng': '41.881832, -87.623177',
        },{
            city: 'Boston',
            state: 'Massachusetts',
            amount: 7,
            'lat, lng': '42.361145, -71.057083',
        },
    ],
};

const chinookUsSalesLatLng = chinookUsSales.Sheet1.map((sighting) => {
    const latLngString = sighting["lat, lng"];

    const latLngArray = latLngString.split(", ");

    return {
        lat: parseFloat(latLngArray[0]),
        lng: parseFloat(latLngArray[1]),
    };
});



