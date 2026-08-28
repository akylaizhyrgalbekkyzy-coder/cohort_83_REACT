// Lesson_02:
// import "./styles.css";
// function Button() {
//   return <button className="button_component">Get animal data</button>;
// }
// export default Button;


// Lesson_03:
import "./styles.css";
function Button({name}) {
  return <button className="button_component">{name}</button>;
}
export default Button;