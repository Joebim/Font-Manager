import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Header from './global_components/Header';
import Home from './components/Home';
import Sidebar from './global_components/Sidebar';
import Footer from './global_components/Footer';
import FontAdd from './components/FontAdd';
import FontStore from './components/FontStore';
import FontTemplateStore from './components/FontTemplateStore';
import FontLab from './components/FontLab';
import AboutPage from './components/About';
import ViewFont from './global_components/ViewFont';
import ViewTemplate from './global_components/ViewTemplate';
import FontLoad from './global_components/FontLoad';

function App() {

  FontLoad()
  return (
    <>
      <Sidebar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fontadd" element={<FontAdd />} />
        <Route path="/fontstore" element={<FontStore />} />
        <Route path="/fontlab/:id" element={<FontLab />} />
        <Route path="/fonttemplatestore" element={<FontTemplateStore />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/fontstore/:id" element={<ViewFont />} />
        <Route path="/fonttemplatestore/:id" element={<ViewTemplate />} />
      </Routes>
      <Footer/>
    </> 
  );
}

export default App;
