import Feedback from "../components/Feedback/Feedback.jsx";
import './Homework_04.css'
import { useState } from "react";
function Homework_04() {
 //C деструктуризацией
  const [like, setLike] = useState(0);

  const [dislike, setDislike] = useState(0);

  const handleDislike = () => { 
    setDislike((preValue) => {
        return preValue +1;
    });
  };

  const handleReset = () => {
    setLike (0)
    setDislike(0)
  };
 
  const handleLike = () => {
    setLike((preValue) => {
        return preValue +1;
    });
  };
  return (
        <div className="Homework_04_block">
            <Feedback
            ResetResults={handleReset}
            Like={handleLike}
            Dislike={handleDislike}
            dislike_count={dislike}
            like_count={like}
            />
        </div>
    );
}

export default Homework_04;
