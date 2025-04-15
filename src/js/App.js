import '../css/App.css';
import MainCard from "./MainCard";
import Navbar from "./Navbar";
import Projects from "./Projects";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";
import headshot from '../images/Headshot4.png';
import { project1Description } from '../descriptions/Project1';
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
                            <MainCard title="Hi, I'm Alex" image={headshot} className="main-card">
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
                    <Route path="/project1" element={<ProjectDetails name="Project 1">
                        {project1Description}
                    </ProjectDetails>}/>
                </Routes>
                <Footer/>
            </div>
        </HashRouter>
    );
}

export default App;
