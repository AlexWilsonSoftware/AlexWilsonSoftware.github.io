import "../css/ProjectDetails.css"
import midGame from "../images/Pong/MidGame.png"
import endGame from "../images/Pong/EndGame.png"

export const pongDescription = (
    <>
        <p>Pong was built as an assignment for <em>ENCE260</em> at the University of Canterbury, where we had to choose a game to implement. In a pair, with Mary Ellani Ballado, we implemented Pong on the UC FunKit 4, a microcontroller designed at UC for simple projects. </p>

        <p>This proved to be an interesting challenge, as we made the game logic from scratch, and we were limited to an LED screen of only 7x5 pixels.</p>

        <img src={midGame} alt="Mid Game" style={{maxWidth: "30%"}}/>

        <p>This was my first project in <strong>C</strong>, which we used building of supplied files from UC. For this project, we used a <strong>makefile</strong> for compilation, and <strong>Git</strong> to manage out codebase.</p>

        <p>This project was a very different way of thinking than other projects I have done, and really made me realise how much worse embedded systems programmers have it when it comes to bug fixing... From managing the game state, to IR communication, to working in a pair, I learnt a lot from this project.</p>

        <img src={endGame} alt="End Game" style={{maxWidth: "30%"}}/>

        <p>The source code can be found on my <a href="https://github.com/AlexWilsonSoftware/ENCE260-Pong" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </>
);