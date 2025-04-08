import '../css/Card.css';

function Card({ title, children, image, className }) {
    return (
        <div className={`card ${className}`}>
            <div className="card-content">
                <div className="image-content">
                    {image && <img src={image} alt={title} className="card-image"/>}
                </div>
                <div className="text-content">
                    <h2>{title}</h2>
                </div>
                <div className="tag-content">
                    <div>{children}</div>
                </div>

            </div>
        </div>
    );
}


export default Card;
