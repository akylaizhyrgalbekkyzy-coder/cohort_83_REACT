import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../Clients/styles";

function Facebook() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h2>Facebook</h2>
      <p>Social media company founded in 2004.</p>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Facebook;