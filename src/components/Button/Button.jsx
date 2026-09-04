// Lesson_02:
// import "./Button.css";
// function Button() {
//   return <button className="button_component">Get animal data</button>;
// }
// export default Button;
/////////////////////////////////////////////

// Lesson_03:
// import "./Button.css";
// function Button({name}) {
//   return <button className="button_component">{name}</button>;
// }
// export default Button;

///////////////////////////////////////////////////////

//Lesson_04
import "./Button.css";
function Button({name, type = "button", onClick}) {
  return <button onClick={onClick} className="button_component" type={type}>{name}</button>;
}
export default Button;