const Navbar = () => {
  return (
    <nav className="bg-white border-b-4 border-yellow-500 shadow-md">
      <div className="grid grid-cols-3 items-center px-4 md:px-6 py-3 md:py-4">

        {/* Left - Logo */}
        <div className="flex justify-start">
          <img
            src="/shop logo.png"
            alt="Shop Logo"
            className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain"
          />
        </div>

        {/* Center - Shop Name + Tagline */}
        <div className="text-center px-2">
          <h1 className="text-base sm:text-lg md:text-2xl font-bold text-yellow-600 leading-tight">
            SRI MURGA VILAS SWEETS
          </h1>

          <p className="text-[10px] sm:text-sm md:text-base italic text-gray-600 mt-1">
            Delighting Every Bite with Sweetness
          </p>
        </div>

        {/* Right - Empty */}
        <div></div>

      </div>
    </nav>
  );
};

export default Navbar;