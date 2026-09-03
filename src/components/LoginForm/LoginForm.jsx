import Input from "../Input/Input";
import Button from "../Button/Button";
import './LoginForm.css';
function LoginForm() {
    return(
        <div className="Login_form">
            <h2 className="Login_form_title">Login Form</h2>
            <div className="Login_form_field">
                <Input
                id="email-id"
                name="email"
                type="email"
                placeholder="Enter your email"
                label="Email:"
                />
            </div>
            <div className="Login_form_field">
               <Input 
                id="password-id"
                name="password"
                type="password"
                placeholder="Enter your password"
                label="Password: "
                />
            </div>
            <div className="Login_form_log_in">
                <Button name="Login"/>
            </div>
        </div>
    );
}
export default LoginForm;