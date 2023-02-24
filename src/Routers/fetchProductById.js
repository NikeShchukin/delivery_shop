import products from "../assets/data/products";

export const fetchProductById = (id) => {
  const product = products.find((product) => product.id === id);
  return new Promise((res) => {
    setTimeout(() => res(product), 1000);
  })
};

export const fetchProductByIdRouted = ({params : { shopId }}) => 
fetchProductById(shopId);
