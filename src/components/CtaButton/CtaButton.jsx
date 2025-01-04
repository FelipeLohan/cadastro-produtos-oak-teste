import styled from "styled-components";

const Button = styled.button`
  padding: 16px 20px;
  border: none;
  color: #fff;
  border-radius: 12px;
  background-color: #64759c;
  cursor: pointer;
  width: 50%;

  &:hover {
    background-color:rgb(91, 105, 139);
  }
`;

const CtaButton = () => {
  return (
    <>
      <Button type="submit">Cadastrar</Button>
    </>
  );
};

export { CtaButton };
