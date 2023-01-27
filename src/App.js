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
import FontTemplateStore from './components/FontTemplateStore';
import FontLab from './components/FontLab';
import AboutPage from './components/About';

function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontadd" element={<FontAdd />} />
        <Route path="/fontstore" element={<FontStore />} />
        <Route path="/fontlab" element={<FontLab />} />
        <Route path="/fonttemplatestore" element={<FontTemplateStore />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer/>
    </> 
  );
}

export default App;
