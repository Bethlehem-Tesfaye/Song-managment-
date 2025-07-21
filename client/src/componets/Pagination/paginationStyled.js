import styled from "@emotion/styled";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 30px auto 0 auto;
`;

export const PageButton = styled.button`
  border: 1px solid #d1d5db;
  background-color: white;
  color: #111827;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s ease;
`;

export const PageInfo = styled.span`
  font-weight: 600;
  color: ${(props) => props.theme.colors.value};
`;
