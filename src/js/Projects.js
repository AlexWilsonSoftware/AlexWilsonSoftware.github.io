import React from 'react';
import Card from "./Card";
import Tag from "./Tag";
import projectImage from '../images/project.jpg';
import anotherProjectImage from '../images/anotherproject.jpg';
import "../css/Projects.css";

function Projects() {
    return (
        <div style={{maxWidth: '80%', margin: '0 auto'}}>
            {/* Project Cards */}
            <div className="projects">
                <Card title="Project 1" image={projectImage} link="/project1">
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Project 2" image={anotherProjectImage}>
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Project 3" image={projectImage}>
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Project 4" image={anotherProjectImage}>
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Project 5" image={anotherProjectImage}>
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
                <Card title="Project 6" image={projectImage}>
                    <div>
                        <Tag name="React" />
                        <Tag name="CSS" />
                        <Tag name="UI Design" />
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Projects;
