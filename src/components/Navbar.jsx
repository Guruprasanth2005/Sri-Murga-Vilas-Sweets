const Navbar = () => {
  return (
    <nav className="bg-white border-b-4 border-yellow-500 shadow-md">
      <div className="relative flex items-center px-6 py-4">

        {/* Logo (Left) */}
        <img
          src="/shop logo.png"
          alt="Shop Logo"
          className="h-45 w-auto object-contain"
        />

        {/* Centered Text */}
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-xl md:text-2xl font-bold text-yellow-600">
            SRI MURGA VILAS NELLAI LALA SWEETS
          </h1>

          <p className="text-sm md:text-base italic text-gray-600 mt-1">
            Sweet Delight – Delighting Every Bite with Sweetness
          </p>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;