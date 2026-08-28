// this is my code:
// import "./styles.css"


// function Card () {
//  const homerSimpson = {
//   avatarURL: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg" ,
//   fullName: "Homer Simpson",
//   occupation: "Safety Inspector / Nuclear Technician",
//   hobby: "watching television, drinking Duff beer at Moe's Tavern, and eating junk food",
// };
//     console.log(homerSimpson.fullName)
//     return (
//         <div className = "HW_page_wrapper">
//             <div className="Homers_card">
//                 <p className="card_title">Important name: {homerSimpson.fullName}</p>
//                 <img className="avatar" src={homerSimpson.avatarURL} alt="Homer Simpson"/>
//                 <p className="card_info">Occupation: {homerSimpson.occupation}</p>
//                 <p className="card_info">Hobby: {homerSimpson.hobby}</p>
//             </div>
//         </div>
//     );
// }
// export default Card;


// this is a teacher code:
import "./styles.css";
import Button from "../../components/Button/Button"

function Card(props) {
    const{firstName,lastName, job, hobby, avatar} = props;
    console.log(props);
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="User Avatar" />
      <div className="card_info">
        <span className="info_title">Fullname: </span>
        <p>{`${firstName} ${lastName}`}</p>
      </div>
      <div className="card_info">
        <span className="info_title"> Job: </span>
        <p>{job}</p>
      </div>
      <div className="card_info">
        <span className="info_title">Hobby: </span>
        <p>{hobby}</p>
      </div>
      <Button name="Get user info"/>
    </div>
  );
}
export default Card;