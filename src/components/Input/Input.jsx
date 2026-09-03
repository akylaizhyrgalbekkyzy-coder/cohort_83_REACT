import './Input.css';
function Input({name,type,placeholder,label,id}) {
    return (
    <div className="Input_group">
        <label className='Input_group_label' htmlFor={id}>{label}</label>
        <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        />
    </div>
    );
}
export default Input;