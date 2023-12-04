import React from 'react';
import "./cotizationbannerinner.scss"

const CotizationBannerInner = ({ moneysCotizations }) => {
  return (
    <>
      <li>
        <h6 className='uppercase'><i className="bi bi-cash"></i> {moneysCotizations.moneda} {moneysCotizations.casa}</h6>
        <h6 className='uppercase'><i className="bi bi-bag-heart-fill"></i> Compra: $ {moneysCotizations.compra}</h6>
        <h6 className='uppercase'><i className="bi bi-bag-fill"></i> Venta: $ {moneysCotizations.venta}</h6>
      </li>
    </>
  )
}

export default CotizationBannerInner;