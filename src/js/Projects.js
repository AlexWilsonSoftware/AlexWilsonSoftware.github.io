import React from 'react';
import Card from "./Card";
import Tag from "./Tag";
import projectImage from '../images/project.jpg';
import anotherProjectImage from '../images/anotherproject.jpg';
import "../css/Projects.css";

const green = "#65CD6F";
const yellow = "#FFED47"

function Projects() {
    return (
        <div style={{maxWidth: '80%', margin: '0 auto', minHeight: '90vh'}}>
            {/* Project Cards */}
            <div className="projects">
                <Card title="Home Helper" image={projectImage} link="/project1" className="fade-in-up" style={{animationDelay: '0.2s'}}>
                    <div>
                        <Tag name="Ongoing" style={{backgroundColor: yellow, borderColor: yellow}}/>
                        <Tag name="Java" />
                        <Tag name="Scrum" />
                        <Tag name="JavaScript" />
                        <Tag name="HTML" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Personal Website" image={anotherProjectImage} className="fade-in-up" style={{animationDelay: '0.25s'}}>
                    <div>
                        <Tag name="Ongoing" style={{backgroundColor: yellow, borderColor: yellow}}/>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Game Review Site" image={anotherProjectImage} className="fade-in-up" style={{animationDelay: '0.3s'}}>
                    <div>
                        <Tag name="Ongoing" style={{backgroundColor: yellow, borderColor: yellow}}/>
                        <Tag name="TypeScript" />
                        <Tag name="Bruno" />
                        <Tag name="React" />
                    </div>
                </Card>
                <Card title="WineWise" image={anotherProjectImage} className="fade-in-up" style={{animationDelay: '0.35s'}}>
                    <div>
                        <Tag name="Complete" style={{backgroundColor: green, borderColor: green}}/>
                        <Tag name="Java" />
                        <Tag name="SQL" />
                        <Tag name="JUnit" />
                        <Tag name="Cucumber" />
                    </div>
                </Card>
                <Card title="Pong" image={projectImage} className="fade-in-up" style={{animationDelay: '0.4s'}}>
                    <div>
                        <Tag name="Complete" style={{backgroundColor: green, borderColor: green}}/>
                        <Tag name="C" />
                        <Tag name="IR Communication" />
                        <Tag name="Microcontrollers" />
                    </div>
                </Card>
                <Card title="Resoruce Stockpiling" image={anotherProjectImage} className="fade-in-up" style={{animationDelay: '0.45s'}}>
                    <div>
                        <Tag name="Complete" style={{backgroundColor: green, borderColor: green}}/>
                        <Tag name="Java" />
                        <Tag name="Junit" />
                        <Tag name="Game Design" />
                        <Tag name="JavaFX" />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Projects;
