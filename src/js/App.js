import '../css/App.css';
import MainCard from "./MainCard";
import Navbar from "./Navbar";
import Projects from "./Projects"
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

const basename = process.env.NODE_ENV === 'production' ? 'AlexWilsonSoftware.github.io' : '';

function App() {
    return (
        <BrowserRouter basename={basename}>
            <div>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={
                        <div style={{maxWidth: '70%', margin: '0 auto'}}>
                            {/* Main Card */}
                            <MainCard title="Hi, I'm Alex" image="/Headshot4.png" className="main-card">
                                <p style={{marginBottom: "3rem"}}>I'm a software developer passionate about building great applications.</p>
                                <Link to="/projects">
                                    <button className="buttonMain">Projects</button>
                                </Link>
                                <Link to="/about">
                                    <button className="buttonSecondary">About Me</button>
                                </Link>
                            </MainCard>
                        </div>
                    } />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
