import React, {useState, useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import {
  Main,
  AboutMe,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import FadeIn from './components/FadeIn';
import CV from './pages/CV';
import Reflection from './pages/Reflection';
import CoverLetter from './pages/CoverLetter';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <FadeIn transitionDuration={700}>
            <Routes>
                <Route path="/" element={
                    <>
                        <Main/>
                        <AboutMe/>
                        <Expertise/>
                        <Timeline/>
                        <Project/>
                        <Contact/>
                    </>
                }/>
                <Route path="/cv" element={<CV/>}/>
                <Route path="/reflection" element={<Reflection/>}/>
                <Route path="/cover-letter" element={<CoverLetter/>}/>
            </Routes>
        </FadeIn>
        <Footer />
    </div>
    );
}

export default App;