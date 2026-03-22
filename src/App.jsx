import "./style.css";
import {useEffect, useState} from 'react';
import Headercontainer from "./components/containers/headercontainer";
import Footercontainer from "./components/containers/footercontainer";
import Homepage from "./components/sites/homepage";
import {HashRouter, Routes, Route} from 'react-router-dom';
import Portfolio from "./components/sites/portfolio";
import Cv from "./components/sites/cv";
import Ommig from "./components/sites/ommig";

export default function App() {
    const [bgimg, setbgimg] = useState(() => localStorage.getItem('bgimg') || 'default');

    useEffect(() => {
        document.body.classList.toggle('digitalrain', bgimg === 'digitalrain');
        localStorage.setItem('bgimg', bgimg);
    }, [bgimg]);

  return (
    <HashRouter>
        <div className="App">
    <Headercontainer theme={bgimg} setbgimg={setbgimg} />
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/cv" element={<Cv />} />
        <Route path="/ommig" element={<Ommig />} /> 
        <Route path="*" element={<Homepage />} />
    </Routes>
    <Footercontainer />
    </div>
    </HashRouter>
  )
}