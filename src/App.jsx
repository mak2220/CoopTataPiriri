import './App.scss';
import Navbar from './components/shared/navbar/navbar';
import Footer from './components/shared/footer/footer';
import ReactRouter from './config/react-router';

function App() {

  return (
    <>
      <div className='flex flex-col h-screen'>
        <header>
          <Navbar />
        </header>
        <main className=' bg-black text-white font-bold font-sans'>
          <ReactRouter />
        </main>
        
        <footer>
          <Footer />
        </footer>
      </div>

    </>
  )
}

export default App;
