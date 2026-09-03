import Button from "../Button/Button.jsx";
import './Feedback.css'
function Feedback({Like,Dislike,ResetResults}) {
    return (
        <div className="feedback_container">
        <Button name="Dislike" onClick={Dislike} />
        <Button name="Reset_results" onClick={ResetResults} />
        <Button name="Like" onClick={Like} />
        </div>
    );
}

export default Feedback;
