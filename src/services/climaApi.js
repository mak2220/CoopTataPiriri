let uri = " https://api.openstreetmap.org";

let getLocation = async() => {
    let url = await fetch(`${uri}`);
    let data = url.json();
    return data;
}