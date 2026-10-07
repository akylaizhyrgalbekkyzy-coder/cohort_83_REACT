import { useContext } from "react";
import { BlogContext } from "../BlogManagement/BlogManagement";
import { Text } from "./styles";

const Message = () => {
  const message = useContext(BlogContext);

  return <Text>{message}</Text>;
};

export default Message;