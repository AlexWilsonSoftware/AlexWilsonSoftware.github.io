import "../css/ProjectDetails.css"
import myRenovations from "../images/HomeHelper/MyRenovations.png"
import editTask from "../images/HomeHelper/EditTask.png"
import editProfile from "../images/HomeHelper/EditProfile.png"
import profileScreen from "../images/HomeHelper/ProfileScreen.png"
import renovationTasks from "../images/HomeHelper/RenovationTasks.png"

export const homeHelperDescription = (
    <>
            <p><strong>Home Helper</strong> is a full-stack web application I’m building with a team of 6 other developers as part of <em>SENG302</em>, a year-long software engineering course at the University of Canterbury. The purpose of the app is for users to keep track of ongoing renovations and their associated tasks.</p>

            <p>Right now, the app lets users create personal profiles, log ongoing renovations, and break those renovations down into specific tasks + more.</p>

            <img src={myRenovations} alt="My Renovations Page" />

            <p>The project uses a prescribed tech stack: <strong>Spring Boot</strong> for the backend, <strong>Thymeleaf</strong> for the templating engine, and <strong>Bootstrap</strong> for the front-end styling. It’s been a great opportunity to work within a structured framework while still leaving room for creativity. Team's can also perform spikes to get PO approval to expand/alter this tech stack</p>

            <p>For testing, we use <strong>JUnit</strong> and <strong>Mockito</strong> for unit and integration tests, and <strong>Cucumber</strong> for acceptance testing. On top of that, we do regular manual testing for final touches.</p>

            <img src={editTask} alt="Edit Task Modal" />

            <p>For this project, we apply the <strong>Scrum framework</strong>. We follow a structured agile process: daily scrums, sprint planning, backlog grooming, retrospectives. We use UC’s own online Scrum board to track tasks and progress, which keeps everyone on the same page.</p>

            <img src={editProfile} alt="Edit Profile Page" />

            <p>As part of the team, I’ve contributed to both frontend and backend development, tackled integration challenges, and even helped iron out bugs that only appear when the test pipeline decides to have a meltdown.</p>

            <p>This course has been a new challenge for me — managing a large codebase, coordinating with six other developers (Judy Kim, Martyn Gascoigne, Suyeon Park, Abilash Sivasith, Cole Bramwell, and Jacob Sheridan), and keeping up with other coursework. It's been really satisfying about being part of a big, collaborative build.</p>

            <img src={profileScreen} alt="Profile Screen" />

            <p>The site isn’t publicly deployed just yet, but it will be soon. In the meantime, you can explore the codebase over on my <a href="https://github.com/AlexWilsonSoftware/HomeHelper" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>

            <p>Working on Home Helper has deepened my skills in full-stack development, agile methodology, testing strategies, and teamwork. I’m excited to see where we take it next!</p>

            <img src={renovationTasks} alt="Renovation Tasks Page" />
    </>
);

