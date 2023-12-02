import './App.scss';
import Navbar from './components/shared/navbar/navbar';
import Footer from './components/shared/footer/footer';
import ReactRouter from './config/react-router';

function App() {

  return (
    <>
      <Navbar />
      <div className='flex flex-col h-screen'>
        <ReactRouter />
      </div>
      <Footer />
    </>
  )
}

export default App
