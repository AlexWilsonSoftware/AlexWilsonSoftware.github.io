import "../css/ProjectDetails.css"
import mainScreen from "../images/ResourceStockpiling/MainScreen.png"
import setupScreen from "../images/ResourceStockpiling/SetupScreen.png"

export const resourceStockpilingDescription = (
    <>
        <p>Made for <em>SENG201</em>, this was my very first project in <strong>Java</strong>. Fueled by just having learnt what <em>statically typed</em> meant, me and my partner Isaac Macdonald built a tower-defense type game using the <strong>JavaFX</strong> library. </p>

        <img src={setupScreen} alt="Setup Screen" style={{maxWidth: "40%"}}/>

        <p>We dubbed the game 'Blood, Sweat, and Tears'. The player could buy and sell towers, organise their inventory, and play a round of the game.</p>

        <img src={mainScreen} alt="Main Screen" style={{maxWidth: "40%"}}/>

        <p>In hindsight, there were many many things that we didn't understand about Java, project management, code style, and many more. However, we managed to hand in a <em>relatively</em> bug free project, even if we wrote all of the <strong>JUnit</strong> testing a few hours before the deadline. </p>

        <p>Even if there are many architecture and UI choices that make me shudder, I learnt a lot from this project, and came out of it a much better Java programmer than when I started. </p>

        <p>If you're brave enough, you can find the full source code on my <a href="https://github.com/AlexWilsonSoftware/SENG201-Pair-Project---Resource-Stockpiling" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
    </>
);