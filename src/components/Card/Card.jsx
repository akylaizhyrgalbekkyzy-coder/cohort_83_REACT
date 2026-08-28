import "./styles.css"


function Card () {
 const homerSimpson = {
  avatarURL: "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg" ,
  fullName: "Homer Simpson",
  occupation: "Safety Inspector / Nuclear Technician",
  hobby: "watching television, drinking Duff beer at Moe's Tavern, and eating junk food",
};
    console.log(homerSimpson.fullName)
    return (
        <div className = "HW_page_wrapper">
            <div className="Homers_card">
                <p className="card_title">Important name: {homerSimpson.fullName}</p>
                <img className="avatar" src={homerSimpson.avatarURL} alt="Homer Simpson"/>
                <p className="card_info">Occupation: {homerSimpson.occupation}</p>
                <p className="card_info">Hobby: {homerSimpson.hobby}</p>
            </div>
        </div>
    );
}
export default Card;