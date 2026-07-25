import products from "./Data/Data";
import ProductGrid from "./Components/ProductGrid";

function App() {
  return (
    <>
      <ProductGrid products={products} />
    </>
  );
}

export default App;