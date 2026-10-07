import { createContext, useState } from "react";
import Card from "../Card/Card";
import {
  Wrapper,
  Title,
  TextArea,
  PostButton,
} from "./styles";

// Контекст, через который сообщение передаётся из BlogManagement в Message
export const BlogContext = createContext<string>("");

const BlogManagement = () => {
  // Текущий текст в textarea
  const [draft, setDraft] = useState<string>("");
  // Опубликованное сообщение (кладём по клику на «Запостить»)
  const [message, setMessage] = useState<string>("");

  const handlePost = () => {
    const text = draft.trim();
    if (!text) return;
    setMessage(text);
    setDraft("");
  };

  return (
    <BlogContext.Provider value={message}>
      <Wrapper>
        <Title>Мой блог</Title>

        <TextArea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="О чём хотите рассказать?"
          rows={5}
        />

        <PostButton onClick={handlePost} disabled={!draft.trim()}>
          Запостить
        </PostButton>

        {/* Карточка появляется под кнопкой, когда есть сообщение */}
        {message && <Card />}
      </Wrapper>
    </BlogContext.Provider>
  );
};

export default BlogManagement;