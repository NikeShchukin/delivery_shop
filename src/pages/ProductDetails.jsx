import React from 'react';
import { useLoaderData } from 'react-router-dom';

function ProductDetails() {
  const product = useLoaderData();
  return (
    <div>
      <div className="productDetails">Product Details</div>
      <h1>{product.productName}</h1>

    </div>
  );
};

export default ProductDetails;