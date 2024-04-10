import Star from "./Star";
import { useEffect, useRef, useState } from "react";

const StarBar = () => {
    const [score, setScore] = useState(0);
    const [tempScore, setTempScore] = useState(0);

    const starRef = useRef(0);

    useEffect(() => {
        starRef.current = score;
        console.log('starRef.current:', starRef.current);
        console.log('score:', score);
    }, [score]);

    return (
        <div className="star-bar">
            <div>Rate the movie!</div>
            <div className="stars">
                {Array(5)
                    .fill()
                    .map((_, i) => {
                        if (tempScore ? i < tempScore : i < score) {
                            return <Star
                                key={i}
                                filled
                                onClick={() => setScore(i + 1)}
                                onMouseEnter={() => setTempScore(i+1)}
                                onMouseLeave={() => setTempScore(0)}
                            />;
                        }
                        return <Star
                            key={i}
                            onClick={() => setScore(i + 1)}
                            onMouseEnter={() => setTempScore(i+1)}
                            onMouseLeave={() => setTempScore(0)}
                        />;
                    })}
            </div>
        </div>
    );
}

export default StarBar;