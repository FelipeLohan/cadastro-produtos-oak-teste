import { useState } from "react";
import { Form } from "./components/Form";
import { ProductList } from "./components/ProductList";


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
      <ProductList products={products} /> 
    </div>
  );
};

export default App;
