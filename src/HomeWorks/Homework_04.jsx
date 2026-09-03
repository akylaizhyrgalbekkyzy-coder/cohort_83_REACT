import Feedback from "../components/Feedback/Feedback.jsx";
import './Homework_04.css'
import { useState } from "react";
function Homework_04() {
 //C деструктуризацией
  const [count, setCount] = useState(0);
  console.log(count)

  const handleDislike = () => { 
    setCount((preValue) => {
        return preValue -1;
    });};

  const handleReset = () => {
    setCount (() => {
        return 0;
    });
  }
 
  const handleLike = () => {
    setCount((preValue) => {
        return preValue +1;
    });
  };
  return (
        <div className="Homework_04_block">
            <Feedback
            ResetResults={handleReset}
            Like={handleLike}
            Dislike={handleDislike}
            numbers={count}
            />
        </div>
    );
}

export default Homework_04;
