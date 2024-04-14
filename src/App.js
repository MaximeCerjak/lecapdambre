import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import Introduction from './components/Intro/Introduction';
import NosServices from './components/Services/Services';
import SeasonTable from './components/SeasonTable/SeasonTable';
import NosChambres from './components/Rooms/Rooms';
import FormulaireReservation from './components/Reservation/Reservation';
import Footer from './components/Footer/Footer';
import CGV from './components/CGV/Cgv';
import NotFound from './components/NotFound/NotFound';

function App() {
  const [language, setLanguage] = useState('fr');

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Header language={language} setLanguage={setLanguage}/>
              <Carousel language={language}/>
              <Introduction language={language}/>
              <NosServices language={language}/>
              <SeasonTable language={language}/>
              <NosChambres language={language}/>
              <SeasonTable language={language}/>
              <FormulaireReservation language={language}/>
              <Footer language={language}/>
            </>
          } />
          <Route path="/cgv" element={<CGV language={language}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

