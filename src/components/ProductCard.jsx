

export default function ProductCard({ product }) {
  return (
    <div className="shadow-md p-4 rounded-lg bg-white hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto"
      />
      <h3 className="mt-3 font-semibold line-clamp-1">{product.title}</h3>
      <p className="text-gray-700 font-bold">${product.price}</p>

      <button
        className="mt-4 block bg-blue-600 text-white text-center py-2 rounded-lg w-full"
      >
        View Details
      </button>
    </div>
  );
}

