import { useNavigate } from "react-router-dom";
 
import Button from "components/Button/Button";
import { PageWrapper, ButtonControl } from "../Clients/styles";

 
function Apple() {
  const navigate = useNavigate();
 
  return (
    <PageWrapper>
      <h2>Apple</h2>
      <p>Technology company that makes the iPhone and Mac, founded in 1976.</p>
      <ButtonControl>
        <Button name="Go back" onClick={() => navigate(-1)} />
      </ButtonControl>
    </PageWrapper>
  );
}
 
export default Apple;
 