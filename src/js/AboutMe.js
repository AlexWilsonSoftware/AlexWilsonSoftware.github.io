import "../css/MainCard.css";
import "../css/AboutMe.css";
import Tag from "./Tag";
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function AboutMe({ image, className }) {
    return (
        <div className={`card ${className}`}>
            <div className="main-card-content">
                <div className="main-image-content fade-in-up" style={{animationDelay: '0.2s'}}>
                    {image && <img src={image} alt="Me" className="card-image"/>}
                    <div className="title-content">
                        <h2>Key Skills</h2>
                    </div>
                    <div className="tag-content">
                        <Tag name="Java"/>
                        <Tag name="Python"/>
                        <Tag name="C"/>
                        <Tag name="JavaScript"/>
                        <Tag name="HTML"/>
                        <Tag name="CSS"/>
                        <Tag name="Git"/>
                        <Tag name="React"/>
                        <Tag name="Thymeleaf"/>
                        <Tag name="Dask"/>
                        <Tag name="Bootstrap"/>
                        <Tag name="Spring Boot"/>
                        <Tag name="JavaFX"/>
                        <Tag name="Junit"/>
                        <Tag name="Node.js"/>
                        <Tag name="Scrum"/>
                    </div>
                    <div className="title-content">
                        <h2>Get In Touch</h2>
                    </div>
                    <div style={{display: 'flex', alignItems: 'start', flexDirection: 'column', gap: 0}}>
                        <p style={{marginBottom: 0}}>
                            021 079 0730 &nbsp;| &nbsp;<a href="mailto:wilsonalex558@gmail.com">wilsonalex558@gmail.com</a>
                        </p>
                    </div>

                </div>
                <div className="main-text-content about-me-text-content fade-in-up" style={{animationDelay: '0.3s'}}>
                    <h1>A Bit About Me</h1>
                    <div>
                    <p>
                            My name is Alex Wilson, and I am a third-year Software Engineering student at the
                            University
                            of Canterbury. I have a strong passion for software development and enjoy bringing ideas
                            to
                            life. With both backend and frontend skills, I'm particularly interested in full-stack
                            development, user-centered design, and clean usable code.
                        </p>
                        <p>
                            Throughout my degree, I’ve worked on a range of projects that have strengthened my
                            skills in
                            languages like Java, Python, and JavaScript, and tools like Git, React, and SQL. I love
                            working in collaborative environments and enjoy expanding my skill set.
                        </p>
                        <p>
                            Outside of coding, you'll often find me on my bike, listening to music,
                            or watching movies.
                        </p>
                    </div>
                    <button
                        className="buttonMain"
                        onClick={() => window.open('/resume.pdf', '_blank')}
                    >
                        View My Resumé
                    </button>

                </div>
            </div>
        </div>
    );
}


export default AboutMe;