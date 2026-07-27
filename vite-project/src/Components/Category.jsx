import { useState } from "react";
const Category = ({ selectedCategory, setCategory }) => {
  
  return (
    <div>
      <h2 className="font-bold mb-4">Category</h2>

      <div className="flex flex-col gap-3">

        <label>
          <input
            type="radio"
            checked={selectedCategory === "All"}
            onChange={() => setCategory("All")}
          />
          All
        </label>

        <label>
          <input
            type="radio"
            checked={selectedCategory === "sneakers"}
            onChange={() => setCategory("sneakers")}
          />
          Sneakers
        </label>

        <label>
          <input
            type="radio"
            checked={selectedCategory === "flats"}
            onChange={() => setCategory("flats")}
          />
          Flats
        </label>

        <label>
          <input
            type="radio"
            checked={selectedCategory === "sandals"}
            onChange={() => setCategory("sandals")}
          />
          Sandals
        </label>

        <label>
          <input
            type="radio"
            checked={selectedCategory === "heels"}
            onChange={() => setCategory("heels")}
          />
          Heels
        </label>

      </div>
    </div>
  );
};

export default Category;