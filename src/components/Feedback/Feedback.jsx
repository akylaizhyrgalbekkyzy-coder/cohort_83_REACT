import Button from "../Button/Button.jsx";
import './Feedback.css'
function Feedback({Like,Dislike,ResetResults,numbers}) {
    return (
        <div className="feedback_container">
        <Button name="Dislike" onClick={Dislike} />
        <span className="Numbers_block">{numbers}</span>
        <Button name="Reset_results" onClick={ResetResults} />
        <Button name="Like" onClick={Like} />
        <span className="Numbers_block">{numbers}</span>
        </div>
    );
}

export default Feedback;
