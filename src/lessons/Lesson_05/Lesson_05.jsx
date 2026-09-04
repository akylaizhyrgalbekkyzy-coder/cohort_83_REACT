// Создать компонент Lesson_05
// В этом компоненте создайте блок с кнопками 
// "Burger", "Fries", "Cola", "Salad", "Ketchup", "Ice-cream"
// Над кнопками должен быть абзац "Menu"
// Под блоком с кнопками должна быть карточка в которой мы 
// будем с помощью этих кнопок добавлять ингредиенты в меню
// Отобразить Lesson_05 на странице
import { v4 } from 'uuid';
import './Lesson_05.css'
import { useState } from 'react';
function Lesson_05() {

    const [dishes,setDishes] = useState([]); //dishes is a empty array,and setDishes is changed array

    const addDishes = (name) => {
        setDishes((prevDishes) => [...prevDishes,name]);  //spread is adding new element at the END + ... in this [...N] 
    };

    // const dishesList = [];
    // for (let i=0; i < dishes.length; i++) {
    //     dishesList.push(<li key={i}>{dishes[i]}</li>);
    //     }; //это я сама написалаЭ

    // а это пример препода:
    const dishesList = dishes.map((dishesEL) => {
        return <li key = {v4()} >{dishesEL}</li>
    });

    const deleteDishes = () => {
        setDishes ([]);
    };

    return (
    <div className="list_container">
        <p> Menu </p>
        <div className="menu_line">
            <button onClick={() => addDishes("Burger")}>Burger</button>
                <button onClick={() => addDishes("Fries")}>Fries</button>
                <button onClick={() => addDishes("Cola")}>Cola</button>
                <button onClick={() => addDishes("Salad")}>Salad</button>
                <button onClick={() => addDishes("Ketchup")}>Ketchup</button>
                <button onClick={() => addDishes("Ice-cream")}>Ice-cream</button>
        </div>
        <div className="list_of_dishes">
            <p>Total: </p> 
            {/* это лист <ul>...</ul> чтобы выводить список непронумерованный,пронумерованный список по <ol>...</ol> */}
            <ol>{dishesList}</ol> 
            </div>
        <div className='delete_button' onClick={deleteDishes}>Delete.</div>
    </div>
    );
}

export default Lesson_05;



//Teachers code:

// import { useState } from "react";
// import Button from "../../components/Button/Button";
// import "./styles.css";
// function Lesson_05() {
//   const [order, setOrder] = useState([]);
//   const buttonNames = [
//     "Burger",
//     "Fries",
//     "Cola",
//     "Salad",
//     "Ketchup",
//     "Ice-cream",
//   ];
//   const buttons = buttonNames.map((buttonEl) => {
//     return (
//       <div className="button_control">
//         <Button
//           name={buttonEl}
//           onClick={() => {
//             setOrder((prevValue) => [...prevValue, buttonEl]);
//           }}
//         />
//       </div>
//     );
//   });
//   //Представим, что у нас в order храниться массива ["Cola", "Fries", "Burger"]
//   // нам нужно из массива ["Cola", "Fries", "Burger"] получить новый массив [<li>Cola</li>, <li>Fries</li>, <li>Burger</li>]
//   const orderList = order.map((orderEl) => {
//     return <li className="order_item">{orderEl}</li>;
//   });
//   console.log(orderList);
//   return (
//     <div className="lesson_05_wrapper">
//       <div className="menu_wrapper">
//         <h1 className="menu">Menu:</h1>
//         <div className="button_wrapper">
//           {/* <div className="button_control">
//             <Button
//               name="Burger"
//               onClick={() => {
//                 setOrder((prevValue) => [...prevValue, "Burger"]);
//               }}
//             />
//           </div>
//           <div className="button_control">
//             <Button
//               name="Fries"
//               onClick={() => {
//                 setOrder((prevValue) => [...prevValue, "Fries"]);
//               }}
//             />
//           </div>
//           <div className="button_control">
//             <Button
//               name="Cola"
//               onClick={() => {
//                 setOrder((prevValue) => [...prevValue, "Cola"]);
//               }}
//             />
//           </div>
//           <div className="button_control">
//             <Button
//               name="Salad"
//               onClick={() => {
//                 setOrder((prevValue) => [...prevValue, "Salad"]);
//               }}
//             />
//           </div>
//           <div className="button_control">
//             <Button
//               name="Ketchup"
//               onClick={() => {
//                 // ["Ketchup"] => ["Ketchup", "Ketchup"]
//                 setOrder((prevValue) => {
//                   return [...prevValue, "Ketchup"];
//                 });
//               }}
//             />
//           </div>
//           <div className="button_control">
//             <Button
//               name="Ice-cream"
//               onClick={() => {
//                 setOrder((prevValue) => [...prevValue, "Ice-cream"]);
//               }}
//             />
//           </div> */}
//           {buttons}
//         </div>
//       </div>
//       <div className="order_wrapper">
//         <p className="order_title">Your Order:</p>
//         <ol className="order_list">{orderList}</ol>
//       </div>
//     </div>
//   );
// }
// export default Lesson_05;




