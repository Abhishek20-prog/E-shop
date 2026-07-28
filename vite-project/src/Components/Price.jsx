const Price = ({ selectedPrice, setPrice }) => {
  return (
    <div>
      <h2 className="font-bold mb-4 pt-6">Price</h2>

      <div className="flex flex-col gap-3">

        {/* All */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="All"
            checked={selectedPrice === "All"}
            onChange={() => setPrice("All")}
          />
          All
        </label>

        {/* $0 - $50 */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="0-50"
            checked={selectedPrice === "0-50"}
            onChange={() => setPrice("0-50")}
          />
          $0 - $50
        </label>

        {/* $50 - $100 */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="50-100"
            checked={selectedPrice === "50-100"}
            onChange={() => setPrice("50-100")}
          />
          $50 - $100
        </label>

        {/* $100 - $150 */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="100-150"
            checked={selectedPrice === "100-150"}
            onChange={() => setPrice("100-150")}
          />
          $100 - $150
        </label>

        {/* Over $150 */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="price"
            value="150+"
            checked={selectedPrice === "150+"}
            onChange={() => setPrice("150+")}
          />
          Over $150
        </label>

      </div>
    </div>
  );
};

export default Price;