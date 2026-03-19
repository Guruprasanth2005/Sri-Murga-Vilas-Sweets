import sweets from "../data/sweetsData";
import ProductCard from "../components/ProductCard";

const categories = ["Sweets", "Milk Sweets", "Savories"];

const Home = () => {
  return (
    <div className="p-6 bg-white">

      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-8 text-yellow-600">
         Our Menu
      </h1>

      {/* Categories */}
      {categories.map((category) => (
        <div key={category} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-yellow-500 border-b-2 border-yellow-300 inline-block">
            {category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {sweets
              .filter((item) => item.category === category)
              .map((item) => (
                <ProductCard key={item.id} item={item} />
              ))}
          </div>
        </div>
      ))}

      {/* Contact Section */}
      <div className="mt-12 bg-white border border-yellow-300 p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-2xl font-bold mb-3 text-yellow-600">
          📍 For Contact and Enquiries
        </h2>

        <p className="text-gray-700">
          21, B Vilankurichi Road, Vinyagapuram
        </p>

        <p className="text-gray-700">
          Saravanampatti, Coimbatore
        </p>

        <p className="mt-3 font-semibold text-gray-800">
          FSSAI License No: 22425557000502<br/>
          📞 98435 33211, 78457 94076
          
        </p>

        <p className="text-gray-700">
          📧 srimurgavilassweets@gmail.com
        </p>
      </div>

    </div>
  );
};

export default Home;