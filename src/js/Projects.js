import React from 'react';
import Card from "./Card";
import Tag from "./Tag"
import "../css/Projects.css";

function Projects() {
  return (
      <div style={{maxWidth: '70%', margin: '0 auto'}}>
          {/* Project Cards */}
          <div className="projects">
              <Card title="Project 1" image="/project.jpg">
                  <div>
                      <Tag name="React" />
                      <Tag name="CSS" />
                      <Tag name="UI Design" />
                  </div>
              </Card>
              <Card title="Project 1" image="/anotherproject.jpg">
                  <div>
                      <Tag name="React" />
                      <Tag name="CSS" />
                      <Tag name="UI Design" />
                  </div>
              </Card>
              <Card title="Project 1" image="/project.jpg">
                  <div>
                      <Tag name="React" />
                      <Tag name="CSS" />
                      <Tag name="UI Design" />
                  </div>
              </Card>
              <Card title="Project 1" image="/project.jpg">
                  <div>
                      <Tag name="React" />
                      <Tag name="CSS" />
                      <Tag name="UI Design" />
                  </div>
              </Card>
              <Card title="Project 1" image="/anotherproject.jpg">
                  <div>
                      <Tag name="React" />
                      <Tag name="CSS" />
                      <Tag name="UI Design" />
                  </div>
              </Card>
              <Card title="Project 1" image="/anotherproject.jpg">
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