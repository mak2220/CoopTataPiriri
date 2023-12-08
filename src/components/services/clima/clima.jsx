import React, { useEffect, useState } from 'react';
import "./clima.scss";

const Clima = () => {

    let [clima, setClima] = useState({});

    useEffect(() => {
        getLocation();
    }, [])


    let getData = async (long, lat) => {
        let urlAPI = "https://fcc-weather-api.glitch.me/api";
        let url = await fetch(`${urlAPI}/current?lon=${long}&lat=${lat}`);
        let data = await url.json();
        return data;
    }

    let getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            getData(position.coords.longitude, position.coords.latitude).then((data)=> setClima(data));
        })
    }


    return (
        <>
            <section className="clima">
                <h2 className='text-white'><i className="bi bi-geo-alt-fill"></i> {clima.name}</h2>
                <h5 className='text-white ml-8'>{Math.floor(clima.main?.temp)} º C</h5>
            </section>
        </>
    )
}


export default Clima;