import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primaryBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.listBackground};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.value};
  margin-bottom: 1.5rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.label};
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 1.2rem;
  font-size: 1rem;
  background-color: white;
`;

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.addBtn};
  color: black;
  font-weight: bold;
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    opacity: 0.9;
  }
`;
export const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.label};
`;

export const LinkText = styled.span`
  color: ${({ theme }) => theme.colors.value};
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  margin-left: 4px;

  &:hover {
    opacity: 0.8;
  }
`;
