import styled from "styled-components";
import PropTypes from "prop-types";

const ProductDetailsContainer = styled.div`
  border: 1px solid #324568;
  border-radius: 12px;
  width: 30%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background-color: #fff;
  margin-bottom: 20px;
  gap: 20px;

  h3 {
    font-size: 3vmin;
    color: #324568;
    margin-bottom: 10px;
  }

  @media (max-width: 1100px) {
    width: 60%;
  }

  @media (max-width: 700px) {
    width: 90%;

    h3 {
    font-size: 5vmin;
    }
  }
`;

const ProductDetails = ({ product }) => {
  return (
    <ProductDetailsContainer>
      <h3>Detalhes do Produto:</h3>
      <p>
        <strong>Nome:</strong> {product.name}
      </p>
      <p>
        <strong>Descrição:</strong> {product.description}
      </p>
      <p>
        <strong>Preço:</strong> R$ {product.price.toFixed(2)}
      </p>
      <p>
        <strong>Está a venda?</strong> {product.onSale}
      </p>
    </ProductDetailsContainer>
  );
};

ProductDetails.propTypes = {
  product: PropTypes.string.isRequired,
};

export { ProductDetails };
