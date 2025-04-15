import "../css/ProjectDetails.css";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function ProjectDetails( {name, children} ) {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate('/projects');
    };

    return (

        <div style={{maxWidth: '70%', margin: '0 auto'}}>
            <div style={{position: 'absolute', top: '10%', left: '2%'}}>
                <div
                    onClick={handleBackClick}
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
                    className = "backArrow"
                >
                    <IoArrowBack size={32} color="white"/>
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