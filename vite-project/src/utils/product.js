export const PRODUCT_DEFAULTS = {
  rating: 4.5,
  reviews: 123,
  prevPrice: 140,
};

export const createProduct = ({
  img,
  title,
  newPrice,
  company,
  color,
  category,
  rating = PRODUCT_DEFAULTS.rating,
  reviews = PRODUCT_DEFAULTS.reviews,
  prevPrice = PRODUCT_DEFAULTS.prevPrice,
}) => ({
  img,
  title,
  rating,
  reviews,
  prevPrice,
  newPrice,
  company,
  color,
  category,
});

export const createProducts = (products) => products.map(createProduct);

export const uniqueValues = (products, key) => [
  ...new Set(products.map((product) => product[key])),
];
