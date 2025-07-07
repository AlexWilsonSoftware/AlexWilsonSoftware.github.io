import '../css/App.css';
import MainCard from "./MainCard";
import AboutMe from "./AboutMe";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import headshot from '../images/Headshot4.png';
import anotherHeadshot from '../images/AnotherHeadshot.png';
import { homeHelperDescription } from '../descriptions/HomeHelperDetails';
import { personalWebsiteDescription } from '../descriptions/PersonalWebsiteDetails';
import { gameReviewSiteDescription } from '../descriptions/GameReviewSiteDetails';
import { wineWiseDescription } from '../descriptions/WineWiseDetails';
import { pongDescription } from '../descriptions/PongDetails';
import { resourceStockpilingDescription } from "../descriptions/ResourceStockpilingDetails";
import { albumNotesDescription } from "../descriptions/AlbumNotesDetails";
import { HashRouter, Route, Routes, Link } from 'react-router-dom';


function App() {
    return (
        <HashRouter>
            <div className="app-content">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={
                        <div style={{maxWidth: '70%', margin: '0 auto'}}>
                            {/* Main Card */}
                            <MainCard title="Kia Ora, I'm Alex" image={headshot} className="main-card">
                                <p style={{marginBottom: "3rem"}}>I'm a software developer.</p>
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
                    <Route path="/projects/homehelper" element={<ProjectDetails name="Home Helper">
                        {homeHelperDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/albumnotes" element={<ProjectDetails name="Album Notes">
                        {albumNotesDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/personalwebsite" element={<ProjectDetails name="Personal Website">
                        {personalWebsiteDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/gamereviewsite" element={<ProjectDetails name="Game Review Site">
                        {gameReviewSiteDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/winewise" element={<ProjectDetails name="WineWise">
                        {wineWiseDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/pong" element={<ProjectDetails name="Pong">
                        {pongDescription}
                    </ProjectDetails>}/>
                    <Route path="/projects/resourcestockpiling" element={<ProjectDetails name="Resource Stockpiling">
                        {resourceStockpilingDescription}
                    </ProjectDetails>}/>
                    <Route path="/about" element={
                        <div style={{maxWidth: '70%', margin: '0 auto'}}>
                            {/* About Me Page */}
                            <AboutMe image={anotherHeadshot} className="main-card"></AboutMe>
                        </div>
                    }/>
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
