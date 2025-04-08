import '../css/MainCard.css';

function MainCard({ title, children, image, className }) {
    return (
        <div className={`card ${className}`}>
            <div className="main-card-content">
                <div className="main-text-content">
                    <h1>{title}</h1>
                    <div>{children}</div>
                </div>
                <div className="main-image-content">
                    {image && <img src={image} alt={title} className="card-image"/>}
                </div>
            </div>
        </div>
    );
}


export default MainCard;
