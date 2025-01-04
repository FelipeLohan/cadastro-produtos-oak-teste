import styled from "styled-components";
import { ProductDetails } from "../ProductDetails";
import PropTypes from "prop-types";

const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;

  h3{
  font-size: 3vmin;
  color: #213557;
  }

  @media (max-width: 700px) {
    h3 {
    font-size: 5vmin;
    }
  }
`;

const ProductList = ({ products }) => {
  return (
    <ProductListContainer>
      <h3>Lista de Produtos:</h3>
      {products.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        products.map((product, index) => (
          <ProductDetails key={index} product={product} />
        ))
      )}
    </ProductListContainer>
  );
};

ProductList.propTypes = {
  products: PropTypes.string.isRequired,
};

export { ProductList };
