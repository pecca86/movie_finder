import StarBar from "../rating/StarBar";
import Button from "../button/Button";

const MovieCardFooter = ({ children }) => {
    return (
        <div className="movie-card-footer">
            {children}
        </div>
    )
};

export default MovieCardFooter;