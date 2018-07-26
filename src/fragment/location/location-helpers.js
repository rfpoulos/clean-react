export let success = (pos, updateCurrentLocation) => {
    let crd = pos.coords;
    updateCurrentLocation({ lat: crd.latitude, lng: crd.longitude })
};