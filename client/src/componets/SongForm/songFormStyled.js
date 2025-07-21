import styled from "@emotion/styled";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding: 25px 25px;
  margin: 5rem auto 0 auto;
  border: 1px solid #d1d5db;
  background-color: ${(props) => props.theme.colors.primaryBackground};
  border-radius: 15px;
  width: 80%;

  @media (min-width: 640px) {
    width: 60%;
  }
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    width: 30%;
  }
`;

export const Heading = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

export const Input = styled.input`
  border: 1px solid #d1d5db;
  padding: 12px 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 1px solid #d1d5db;
  background-color: ${(props) => props.theme.colors.addBtn};
  padding: 12px 10px;
  border-radius: 15px;
  cursor: pointer;
`;

export const Cancel = styled.p`
  margin-left: 15px;
  color: #ef4444;
  cursor: pointer;
`;
