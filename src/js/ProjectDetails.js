import "../css/ProjectDetails.css";
import { ReactComponent as BackArrowIcon } from "../images/arrow-left-line.svg";

function ProjectDetails( {name, children} ) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,    // Scroll to the top of the page
            left: 0,   // Stay at the left position
            behavior: 'smooth'  // Enable smooth scrolling
        });
    };

    return (

        <div style={{maxWidth: '70%', margin: '0 auto'}}>
            <div style={{position: 'absolute', top: 120, left: 50}}>
                <div
                    style={{
                        width: '4rem',
                        height: '4rem',
                        borderRadius: '50%',
                        backgroundColor: '#000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                    }}
                >
                    <BackArrowIcon style={{ fill: 'white !important' }} width="2rem" height="2rem" />
                </div>
            </div>

            <div className="TitleContent">
                <h1>{name}</h1>
            </div>
            <div className="DetailsContent">
                {children}
                <button className="buttonMain go-to-top" onClick={scrollToTop}>Go to top</button>
            </div>
        </div>

    )
}

export default ProjectDetails