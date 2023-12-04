import React, { useState } from 'react';
import { useEffect } from 'react';
import "./cotizationBanner.scss";
import CotizationBannerInner from './cotizationBannerInner/cotizationBannerInner';
import { getDolarCotizations, getEuroCotizations, getPesosChilenos, getPesosUruguayos, getRealesCotizations } from '../../../services/monedaApi';



const CotizationBanner = () => {

    const [moneys, setMoneys] = useState([{}]);

    useEffect(() => {
        getDolarCotizations().then((dolar) => {
            setMoneys(dolar)
        });
    }, [])

    return (
        <>
            <section className='dolarBanner bg-slate-500'>
                <ul className='row-money'>
                    {
                        moneys.map((moneys, idx) => {
                            return <CotizationBannerInner moneysCotizations={moneys} key={idx} />
                        })
                    }
                </ul>
            </section>
        </>
    )
}

export default CotizationBanner;