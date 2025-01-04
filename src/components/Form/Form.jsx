import { useState } from "react";
import styled from "styled-components";
import { TextInput } from "../TextInput";
import { SelectInput } from "../SelectInput";
import { CtaButton } from "../CtaButton";
import PropTypes from "prop-types";

const FormContainer = styled.section`
  background-color: #fff;
  color: #000;
  width: 40%;
  margin: 0 auto;
  margin-top: 40px;
  border: 2px solid #324568;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
  }

  h2 {
    font-size: 3.5vmin;
    color: #324568;
  }

  .submit-button {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  @media (max-width: 1100px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 90%;

    h2 {
      font-size: 5vmin;
    }
  }
`;

const Form = ({ onFormSubmit }) => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productOnSale, setProductOnSale] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isNaN(productPrice) || productPrice.trim() === "") {
      setError("Insira um preço válido. (Apenas números)");
      return;
    }

    setError("");

    onFormSubmit({
      name: productName,
      description: productDescription,
      price: parseFloat(productPrice),
      onSale: productOnSale,
    });

    setProductName("");
    setProductDescription("");
    setProductPrice("");
    setProductOnSale("");
  };

  return (
    <FormContainer>
      <h2>Digite os dados do produto:</h2>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Nome do Produto"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
        <TextInput
          placeholder="Descrição do produto"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
        />
        <TextInput
          placeholder="Preço do produto"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
        />
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}
        <SelectInput
          value={productOnSale}
          onChange={(e) => setProductOnSale(e.target.value)}
        />
        <div className="submit-button">
          <CtaButton type="submit">Enviar</CtaButton>
        </div>
      </form>
    </FormContainer>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};

export { Form };
