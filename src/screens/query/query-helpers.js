import { 
    apiKey,
    server,
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