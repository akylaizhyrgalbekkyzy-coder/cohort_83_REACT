import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  margin-top: 24px;
  padding: 20px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #2563eb;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const AuthorName = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #111827;
`;