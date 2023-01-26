import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import FontAdd from './components/FontAdd';
import FontStore from './components/FontStore';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontadd" element={<FontAdd />} />
        <Route path="/fontstore" element={<FontStore />} />
      </Routes>
      <Footer/>
    </> 
  );
}

export default App;
