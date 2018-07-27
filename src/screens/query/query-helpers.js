import { 
    apiKey,
} from '../../variables';

export let getPlaces = ({
    query,
    lat,
    lng,
}) =>
    fetch('https://my-little-cors-proxy.herokuapp.com/' + 
    'https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=6000' +
    '&key=' + apiKey +
    '&keyword=' + query +
    '&location=' + lat + ',' + lng
    ).then(result => result.json())

export let calcDistance = ({
    lat: lat1,
    lng: lng1
}, {
    lat: lat2,
    lng: lng2
}) => {
    let R = 6378137; // Earth’s mean radius in meter
    let dLat = rad(lat2 - lat1);
    let dLong = rad(lng2 - lng1);
    let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(lat1)) * Math.cos(rad(lat2)) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c;
    return (d * 0.62137119) / 1609.344;
}

let rad = (x) => {
    return x * Math.PI / 180;
  };