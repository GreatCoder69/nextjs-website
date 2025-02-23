export default function ExpandedProduct({ product, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4 max-w-4xl">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>✖</button>
        <div className="grid grid-cols-2 gap-6">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover rounded-lg" />
          <div>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="mt-2 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et feugiat tortor. Integer dapibus enim sed nisi pulvinar, at accumsan sapien sagittis.
            </p>
            <p className="mt-4 text-2xl font-semibold">{product.price}</p>
            <div className="mt-4 flex gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded">Buy Now</button>
              <button className="bg-gray-300 px-6 py-2 rounded">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
