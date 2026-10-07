import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../Clients/styles";

function Google() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <h2>Google</h2>
      <p>Technology company known for its search engine, founded in 1998.</p>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)} />
      </ButtonControl>
    </PageWrapper>
  );
}

export default Google;