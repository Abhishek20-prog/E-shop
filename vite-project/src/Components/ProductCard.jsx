import { AiFillStar } from "react-icons/ai";


function ProductCard({product}) {
  return (
    <main className=" border-gray-100 border-2 rounded-lg m-3">
    <div className="flex flex-col items-center justify-center h-40 w-50 p-2 ">
      <img src={product.img} alt={product.title} width={200} height={100} />
       </div>
<div className="p-4 m-4"> 
  <h2 className="font-extrabold">{product.title}</h2>

      <p className="">
        <AiFillStar className="inline text-yellow-500 " />
        {" "}
        {product.rating} {"  "} ({product.reviews} reviews)
       
      </p>

      <p> </p>

      <p>
        <del>${product.prevPrice}</del>
        {" "}
        ${product.newPrice}
      </p>
      
      </div>
     

      
   
    </main>
  );
}

export default ProductCard;