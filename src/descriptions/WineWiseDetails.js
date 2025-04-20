import "../css/ProjectDetails.css"
import viewWines from "../images/WineWise/ViewWines.png"
import map from "../images/WineWise/Map.png"
import adminScreen from "../images/WineWise/AdminScreen.png"
import wineDetails from "../images/WineWise/WineDetails.png"

export const wineWiseDescription = (
    <>
        <p><strong>WineWise</strong> is a <strong>JavaFX</strong>-based kiosk application designed to help users discover, browse, and review wines. Built as part of the <em>SENG202</em> course at the University of Canterbury, WineWise is intended to be used in wineries, liquor stores, or tourist iSites for users to learn more about local wines.</p>
        <p>
            WineWise was written in <strong>Java</strong>, and stores its data locally using an <strong>SQLite</strong> database.
        </p>
        <img src={viewWines} alt="View Wines Page" style={{maxWidth: "50%"}}/>
        <p>
            For testing, we used <strong>JUnit</strong> 5 for unit, <strong>Cucumber</strong> for acceptance tests, and did manual testing along the way.
        </p>
        <img src={wineDetails} alt="Wine Details Page" style={{maxWidth: "50%"}}/>
        <p>
            Some cool features were the admin’s ability to manage flagged reviews and position wineries directly on the map.
        </p>
        <img src={adminScreen} alt="Admin Screen" style={{maxWidth: "50%"}}/>
        <p>
            As a part of the course, we gave weekly presentation to the rest of the class on our progress, with full demos with each deliverable. This significantly increased my public speaking skills, and presentation preparation.
        </p>
        <img src={map} alt="Map" style={{maxWidth: "50%"}}/>
        <p>
            I worked on this project alongside Luke Armstrong, Oliver Barclay, Felix Blanchard, and Ryan Hamilton. We got chucked in the deep end with this one, but learnt plenty in the process of making plenty (and I mean <em>plenty</em>) of mistakes. WineWise really helped me level up my experience with JavaFX, database management, and writing clean, testable code.
        </p>
        <p>
            The full source code is available on my <a href="https://github.com/AlexWilsonSoftware/SENG202-WineWise" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </p>
    </>
);
