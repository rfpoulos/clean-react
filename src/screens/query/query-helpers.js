import { 
    apiKey,
    server,
} from '../../variables';

export let getTrails = (query) =>
    fetch(server + 'walkbytitle/' + query, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers ({
            "Content-Type": "application/json",
            "authorization": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjU5LCJpYXQiOjE1MzIzNjA2MzEsImV4cCI6MTUzMjk2NTQzMX0.KMoECWf8eWv_WEAO98duZC7a9v5AYgRpk6ww2K00BJY'
        })
    }).then(result => result.json())