import "../css/ProjectDetails.css"
import homeScreen from "../images/PersonalWebsite/HomeScreen.png"
import { Link } from "react-router-dom";

//TODO : Add screenshot of project page when all thumbnails are in
export const personalWebsiteDescription = (
    <>
        <p>I designed and programmed this website during some time off from uni, aimed to showcase my portfolio and projects. This website is build using <strong>React</strong> and deployed with <strong>Github Pages</strong>. This was my first project using React, so I'm sure the codebase is a little bit of a mess (or a lot a bit of a mess) but I learnt a lot by throwing myself into the deep end.</p>

        <img src={homeScreen} alt="Home Screen"></img>

        <p>Using some new UI design skills learned from <Link to="/projects/homehelper" className="project-link">Home Helper</Link>, I designed this website to look clean, presentable, and usable. I also paid special effort into the layout being responsive and dynamic.</p>

        <p>You can view the codebase for this project on my <a href="https://github.com/AlexWilsonSoftware/AlexWilsonSoftware.github.io" target="_blank" rel="noopener noreferrer">GitHub</a>. </p>
    </>
);