import Searchbar from "./Searchbar";
import ProductCard from "./ProductCard";
import products from "../Data/Data";

function ProductGrid({ selectedCategory, selectedColor , selectedPrice , searchInput,}) {
 const filteredProducts = products.filter((product) => {

  const categoryMatch =
    selectedCategory === "All" ||
    product.category === selectedCategory;

  const colorMatch =
    selectedColor === "All" ||
    product.color === selectedColor;

  let priceMatch = true;

  if (selectedPrice === "0-50") {
    priceMatch = product.newPrice >= 0 && product.newPrice <= 50;
  } else if (selectedPrice === "50-100") {
    priceMatch = product.newPrice > 50 && product.newPrice <= 100;
  } else if (selectedPrice === "100-150") {
    priceMatch = product.newPrice > 100 && product.newPrice <= 150;
  } else if (selectedPrice === "150+") {
    priceMatch = product.newPrice > 150;
  }

  const searchMatch =
    product.title.toLowerCase().includes(searchInput.toLowerCase());

  return (
    categoryMatch &&
    colorMatch &&
    priceMatch &&
    searchMatch
  );
});

  return (
    <main>
      {/* <Searchbar /> */}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>
    </main>
  );
}

export default ProductGrid;