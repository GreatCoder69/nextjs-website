import Image from "next/image";

const products = [
  { id: 1, name: "Men's Home Jersey", img: "/images/product1.jpg", price: "$50" },
  { id: 2, name: "Men's Away Jersey", img: "/images/product2.jpg", price: "$60" },
  { id: 3, name: "Women's Away Jersey", img: "/images/product3.jpg", price: "$70" },
  { id: 4, name: "Kids' Outfit", img: "/images/product4.jpg", price: "$80" },
];

export default function ProductRow({ setSelectedProduct }) {
  return (
    <div className="grid grid-cols-4 gap-6 px-10 my-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg p-6 cursor-pointer hover:scale-105 transition"
          onClick={() => setSelectedProduct(product)}
        >
          <Image
            src={product.img}
            alt={product.name}
            width={400}
            height={300}
            className="w-full h-[300px] object-cover rounded-lg"
          />
          <h4 className="mt-4 text-center font-bold text-lg">{product.name}</h4>
          <p className="text-center text-xl font-semibold text-gray-700">{product.price}</p>
        </div>
      ))}
    </div>
  );
}
