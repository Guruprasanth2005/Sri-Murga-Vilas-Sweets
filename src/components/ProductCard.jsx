const ProductCard = ({ item }) => {
  return (
    <div className="bg-white border border-yellow-200 rounded-2xl shadow-md p-4 hover:shadow-xl hover:scale-105 transition duration-300">
      
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover rounded-lg"
      />

      <h2 className="text-lg font-semibold mt-3 text-center text-gray-800">
        {item.name}
      </h2>

      <p className="text-yellow-600 font-bold text-lg text-center">
        ₹{item.price} / 250g
      </p>

    </div>
  );
};

export default ProductCard;