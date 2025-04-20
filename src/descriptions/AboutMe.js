import "../css/ProjectDetails.css"
import anotherHeadshot from "../images/AnotherHeadshot.png"
import Tag from "../js/Tag";

export const aboutMeDescription = (
    <>

        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '4rem', maxWidth: '70%', margin: '0 auto', padding: '2rem'}}>
            <img src={anotherHeadshot} alt="Headshot"
                 style={{width: '50rem', height: '100%', objectFit: 'contain'}}/>
            <div>
                <p style={{maxWidth: '40%', margin: '0 1rem'}}>
                    My name is Alex, and I am a software developer. My name is Alex, and I am a software developer. My
                    name
                    is Alex, and I am a software developer. My name is Alex, and I am a software developer. My name is
                    Alex,
                    and I am a software developer.</p>
                <h2>Key Skills</h2>
                <div>
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
            </div>

        </div>


    </>
);