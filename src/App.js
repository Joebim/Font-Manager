import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Home />
      <Footer/>
    </> 
  );
}

export default App;
