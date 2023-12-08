import './App.scss';
import Navbar from './components/shared/navbar/navbar';
import Footer from './components/shared/footer/footer';
import ReactRouter from './config/react-router';
import CotizationBanner from "./components/services/cotizationBanner/cotizationBanner";

function App() {

  return (
    <>
      <Navbar />
      <CotizationBanner />
      <ReactRouter />
      <Footer />
    </>
  )
}

export default App;
