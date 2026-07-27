import Searchbar from "./Searchbar";
import ProductCard from "./ProductCard";

function ProductGrid({ products }) {
  return (
    <main>
      <Searchbar/>
    <div className="grid grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.title}
          product={product}
        />
      ))}
    </div>
    </main>
  );
}

export default ProductGrid;