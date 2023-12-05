import './App.scss';
import Navbar from './components/shared/navbar/navbar';
import Footer from './components/shared/footer/footer';
import ReactRouter from './config/react-router';
import CotizationBanner from "./components/services/cotizationBanner/cotizationBanner";
import { useEffect } from 'react';
import { getLocation } from './components/services/cotizationBanner/locationIp/locationIp';

function App() {

  useEffect(() => {
    console.log(getLocation())
  }, [])

  return (
    <>
      <Navbar />
      <CotizationBanner />
      <ReactRouter />
      <Footer />
    </>
  )
}

export default App
