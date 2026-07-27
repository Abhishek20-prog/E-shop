import Searchbar from "./Searchbar";
import ProductCard from "./ProductCard";
import products from "../Data/Data";


function ProductGrid({ selectedCategory  }) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === selectedCategory
        );

  return (
    <main>
      <Searchbar/>
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