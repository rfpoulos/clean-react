import { apiKey } from '../../variables';

export let getPlaceById = (id) =>
    fetch('https://my-little-cors-proxy.herokuapp.com/' + 
    'https://maps.googleapis.com/maps/api/place/details/json?' +
    'key=' + apiKey +
    '&placeid=' + id +
    '&fields=formatted_address,geometry,formatted_phone_number,name'
    ).then(result => result.json())