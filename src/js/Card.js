import '../css/Card.css';
import { Link } from 'react-router-dom';

function Card({ title, children, image, className, link }) {
    return (
        <div className={`card ${className}`}>
            <div className="card-content">
                <div className="image-content">
                    {image && <img src={image} alt={title} className="card-image" />}
                </div>
                <div className="text-content">
                    <Link to={link} className="ProjectName">
                        <h2>{title}</h2>
                    </Link>
                </div>
                <div className="tag-content">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Card;
