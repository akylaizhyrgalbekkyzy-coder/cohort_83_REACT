// import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import "./styles.css";
function Lesson_03() {
  const homerSimpson = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Nuclear Security Specialist",
    hobby: "Bear, TV, FastFood",
    avatarURL:
      "https://i.pinimg.com/736x/c8/e1/c2/c8e1c2206c98cfbdb48d793c219d01e1.jpg",
  };
  const margeSimpson = {
    firstName: "Marge",
    lastName: "Simpson",
    job: "No Job",
    hobby: "cooking",
    avatarURL:
      "https://i.pinimg.com/736x/74/70/9f/74709f0aa1e90ffb6de1f43ac19fa87a.jpg",
  };
  const bartSimpson = {
    firstName: "Bart",
    lastName: "Simpson",
    job: "No job",
    hobby: "Skate",
    avatarURL:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/Bart_Simpson_200px.png",
  };
    const sendRequest = () => {
    console.log("Request sended");
  };
    const sayHi = (fullName) => {
    console.log(`Hi, ${fullName}`)
  }
  return (
    <div className="lesson_03_wrapper">
      <div className="cards_container">
        <Card
          firstName={homerSimpson.firstName}
          lastName={homerSimpson.lastName}
          job={homerSimpson.job}
          hobby={homerSimpson.hobby}
          avatar={homerSimpson.avatarURL}
        />
        <Card
          firstName={margeSimpson.firstName}
          lastName={margeSimpson.lastName}
          job={margeSimpson.job}
          hobby={margeSimpson.hobby}
          avatar={margeSimpson.avatarURL}
        />
        <Card
          firstName={bartSimpson.firstName}
          lastName={bartSimpson.lastName}
          job={bartSimpson.job}
          hobby={bartSimpson.hobby}
          avatar={bartSimpson.avatarURL}
        />
      </div>
      {/* <Button name= {"Get univercities"} type="submit" /> */}
      <div className="button_control">
        <button onClick={sendRequest} className="button" type="button">Simple button trigger</button> 
         <button onClick={() => sayHi("Homer Simpson")} className="button" type="button">Simple button trigger with arguments</button>
      </div>
    </div>
  );
}
export default Lesson_03;