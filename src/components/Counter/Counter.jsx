// Задание:
// Создайте приложение "Counter" - это счётчик, который содержит 
// блок результата и две кнопки, для увеличения числа счётчика на 
// 1 и для уменьшения числа счётчика на 1. Начальное значение - 0

// создайте компонент Counter в папке components
// в компоненте Counter должны быть 2 кнопки: "+" и "-"
// между кнопками должна быть область где будет расположена число 0
// (Которая затем будет увеличиваться по мере нажатия на кнопки)
// добавьте стилей по вашим вкусовым предпочтениям
import Button from '../Button/Button.jsx';
import './Counter.css'

function Counter({plusCount,minusCount,countValue=0}) {
    return (
        <div className="counter_container">
        <Button name="-" onClick={minusCount} />
        <span className="zero_block">{countValue}</span>
        <Button name="+" onClick={plusCount} />
        </div>
    );
}

export default Counter;