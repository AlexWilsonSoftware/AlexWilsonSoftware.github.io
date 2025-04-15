import "../css/Tag.css";

function Tag({ name, style }) {
    return (
        <div className="tag" style={style}>
            <span>
                {name}
            </span>
        </div>
    )
}

export default Tag;