import './App.css';
import Card from './Card';
import Navbar from "./Navbar";

function App() {
    return (
        <div>
            <Navbar/>
            <div style={{maxWidth: '60%', margin: '0 auto'}}>
                {/* Main Card */}
                <Card title="Hi, I'm Alex" image="/Headshot.png" className="main-card">
                    <p>I'm a software developer passionate about building great applications.</p>
                </Card>

                {/* Project Cards */}
                <div className="projects">
                    <Card title="Project 1">
                        <p>This project was about redesigning a website using React and CSS.</p>
                    </Card>
                    <Card title="Project 2">
                        <p>A simple weather app that fetches data from an API and displays the weather.</p>
                    </Card>
                    <Card title="Project 3">
                        <p>I built a fun game using JavaScript and HTML5 canvas.</p>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default App;
