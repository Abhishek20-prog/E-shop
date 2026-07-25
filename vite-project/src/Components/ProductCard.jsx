import { AiFillStar } from "react-icons/ai";


function ProductCard({product}) {
  return (
    <div className=" border-gray-100 border-2 rounded-lg flex flex-col items-center justify-center">
      <img src={product.img} alt={product.title} width={200} height={100} />

      <h2>{product.title}</h2>

      <p>
        <AiFillStar className="inline text-yellow-500" />
        {" "}
        {product.rating}
      </p>

      <p>{product.reviews} reviews</p>

      <p>
        <del>${product.prevPrice}</del>
        {" "}
        ${product.newPrice}
      </p>

      <p>{product.company}</p>
    </div>
  );
}

export default ProductCard;