import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 520px;
`;

export const Title = styled.h1`
  margin: 0 0 16px;
  font-size: 28px;
  color: #1f2937;
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 12px;
  font-size: 16px;
  font-family: inherit;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #2563eb;
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  }
`;

export const PostButton = styled.button`
  margin-top: 12px;
  padding: 10px 24px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  background: #2563eb;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }

  &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
  }
`;