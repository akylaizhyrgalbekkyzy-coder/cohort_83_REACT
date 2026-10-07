import { Link } from "react-router-dom";

import { PageWrapper, LinksList } from "./styles";

import { ROUTES } from "constants/routes";

function Clients() {
  return (
    <PageWrapper>
      <h2>Our clients</h2>
      <LinksList>
        <Link to={ROUTES.FACEBOOK} >Facebook</Link>
        <Link to={ROUTES.GOOGLE} >Google</Link>
        <Link to={ROUTES.APPLE} >Apple</Link>
      </LinksList>
    </PageWrapper>
  );
}

export default Clients;