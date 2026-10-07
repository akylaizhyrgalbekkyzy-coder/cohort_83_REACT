import Message from "../Massage/Massage";
import { CardWrapper, Header, Avatar, AuthorName } from "./styles";

const Card = () => {
  return (
    <CardWrapper>
      <Header>
        <Avatar>ИФ</Avatar>
        {/* Замените на своё имя и фамилию */}
        <AuthorName>Aku</AuthorName>
      </Header>

      <Message />
    </CardWrapper>
  );
};

export default Card;