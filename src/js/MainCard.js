import '../css/MainCard.css';

function MainCard({ title, children, image, className }) {
    return (
        <div className={`card ${className}`}>
            <div className="main-card-content">
                <div className="main-text-content fade-in-up" style={{animationDelay: '0.2s'}}>
                    <h1>{title}</h1>
                    <div>{children}</div>
                </div>
                <div className="main-image-content fade-in-up" style={{animationDelay: '0.3s'}}>
                    {image && <img src={image} alt={title} className="card-image"/>}
                </div>
            </div>
        </div>
    );
}


export default MainCard;
