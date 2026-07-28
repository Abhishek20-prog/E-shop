const Colors = ({ selectedColor, setColor }) => {
  return (
    <div>
      <h2 className="font-bold mb-4 pt-6">Colors</h2>

      <div className="flex flex-col gap-3">

        {/* All */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="All"
            checked={selectedColor === "All"}
            onChange={() => setColor("All")}
          />
          <span>All</span>
        </label>

        {/* Black */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="black"
            checked={selectedColor === "black"}
            onChange={() => setColor("black")}
          />
          <span className="w-4 h-4 rounded-full bg-black border"></span>
          <span>Black</span>
        </label>

        {/* Blue */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="blue"
            checked={selectedColor === "blue"}
            onChange={() => setColor("blue")}
          />
          <span className="w-4 h-4 rounded-full bg-blue-500 border"></span>
          <span>Blue</span>
        </label>

        {/* Red */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="red"
            checked={selectedColor === "red"}
            onChange={() => setColor("red")}
          />
          <span className="w-4 h-4 rounded-full bg-red-500 border"></span>
          <span>Red</span>
        </label>

        {/* Green */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="green"
            checked={selectedColor === "green"}
            onChange={() => setColor("green")}
          />
          <span className="w-4 h-4 rounded-full bg-green-500 border"></span>
          <span>Green</span>
        </label>

        {/* White */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="color"
            value="white"
            checked={selectedColor === "white"}
            onChange={() => setColor("white")}
          />
          <span className="w-4 h-4 rounded-full bg-white border"></span>
          <span>White</span>
        </label>

      </div>
    </div>
  );
};

export default Colors;