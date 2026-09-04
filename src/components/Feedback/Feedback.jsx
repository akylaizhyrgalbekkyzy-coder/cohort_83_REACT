import Button from "../Button/Button.jsx";
import './Feedback.css'
function Feedback({Like,Dislike,ResetResults,like_count,dislike_count}) {
    return (
        <div className="feedback_container">
        <Button name="Dislike" onClick={Dislike} />
        <span className="Numbers_block">{dislike_count}</span>
        <Button name="Reset_results" onClick={ResetResults} />
        <Button name="Like" onClick={Like} />
        <span className="Numbers_block">{like_count}</span>
        </div>
    );
}

export default Feedback;
