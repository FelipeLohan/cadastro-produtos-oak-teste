import { useState } from "react";
import { Form } from "./components/Form";
import { ProductDetails } from "./components/ProductDetails";
import styled from "styled-components";

const ProductListContainer = styled.section`

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
`

const App = () => {
  const [products, setProducts] = useState([]);

  const handleFormSubmit = (productData) => {

    const productWithParsedPrice = {
      ...productData,
      price: parseFloat(productData.price),
    };

  
    const sortedProducts = [...products, productWithParsedPrice].sort(
      (a, b) => a.price - b.price
    );

    setProducts(sortedProducts);
  };

  return (
    <div>
      <Form onFormSubmit={handleFormSubmit} />
        <ProductListContainer>
          <h3>Lista de Produtos:</h3>
          {products.map((product, index) => (
            <ProductDetails key={index} product={product} />
          ))}
        </ProductListContainer>
    </div>
  );
};

export default App;
