import LoginForm from "components/LoginForm/LoginForm";
import Input from "components/Input/Input";
import CatFact from "components/CatFact/CatFact";

import { PageWrapper, InputControl } from "./styles";

function Lesson_09() {
  return (
    <PageWrapper>
      <CatFact />
      {/* <LoginForm /> */}
      {/* <InputControl>
        <Input
          id="simple_input"
          name="simpleInput"
          placeholder="Simple Input"
          label="Simple Input"
        />
      </InputControl>
      <InputControl>
        <Input
          id="error_input"
          name="errorInput"
          placeholder="Error Input"
          label="Error Input"
          error="Email is incorrect"
        />
      </InputControl>
      <InputControl>
        <Input
          id="disabled_input"
          name="disabledInput"
          placeholder="Disabled Input"
          label="Disabled Input"
          disabled
        />
      </InputControl> */}
    </PageWrapper>
  );
}

export default Lesson_09;
