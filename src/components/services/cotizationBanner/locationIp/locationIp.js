let getLocation = () => {
    return navigator.geolocation.getCurrentPosition((position) => position, (err) => console.log(err));
}


export {
    getLocation
}