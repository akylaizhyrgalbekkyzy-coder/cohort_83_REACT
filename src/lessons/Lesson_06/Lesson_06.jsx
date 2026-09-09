//Это задание дополнительное,работа с добавлением кнопок для удаления к занятию_05:
//Рядом с каждым элементом заказа должна появляться кнопка "Remove"
// При клике на эту кнопку элемент заказа удаляется
// Под заказами должна появиться кнопка "Delete all orders", 
// она появляется когда у нас заказов >=1. Эта кнопка удаляется 
// все orders из списка.

import { v4 } from 'uuid';
import './Lesson_06.css'
import { useState } from 'react';
function Lesson_05() {

    const [dishes,setDishes] = useState([]); //dishes is a empty array,and setDishes is changed array

    const addDishes = (name) => {
        setDishes((prevDishes) => [...prevDishes,name]);  //spread is adding new element at the END + ... in this [...N] 
    };

    const removeDishes = (index) => {
        setDishes((prevDishes) => prevDishes.filter ((dishes, i) => i !== index))
    }
    //filter — это встроенный метод массива в JavaScript, который создаёт новый массив, 
    // оставляя в нём только те элементы, которые проходят проверку (условие).

    // const dishesList = [];
    // for (let i=0; i < dishes.length; i++) {
    //     dishesList.push(<li key={i}>{dishes[i]}</li>);
    //     }; //это я сама написалаЭ

    // а это пример препода c map and key:
    const dishesList = dishes.map((dishesEL,index) => {
        return <li key = {v4()} >{dishesEL}
        <button onClick={() => removeDishes(index)}>Remove</button></li>
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
            {dishes.length >=1 && (
        <div className='delete_button' onClick={deleteDishes}>Delete.</div>
        )}
    </div>
    );
}

export default Lesson_05;

// если хотим чтобы проявлась кнопка только после добавления блюда:
// dishes.length >= 1 — проверяем, есть ли хотя бы 1 блюдо в массиве
// Если true — то, что после &&, отрисовывается (кнопка появляется)
// Если false — React ничего не рендерит (кнопки нет вообще)

// считается стандартным способщм рендеринга в React — через &&.
