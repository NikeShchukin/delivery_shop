export const routes = {
  home: '/',
  shop: '/shop',
  cart: '/cart',
  productDetails: (id) => (id ?  `/shop/${id}` : '/shop/:shopId')
};
