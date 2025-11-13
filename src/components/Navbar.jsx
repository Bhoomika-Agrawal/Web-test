// export default function Navbar() {
//   return (
//     <nav className="w-full shadow-md px-8 py-4 flex justify-between items-center">
//       <h1 className="text-2xl font-bold text-blue-600">Web3ShoppingCart</h1>
//       <div className="flex gap-6">
//         <a href="/" className="hover:text-blue-600 font-medium">Home</a>
//       </div>
//     </nav>
//   );
// }

export default function Navbar() {
  return (
    <nav className="w-full shadow-md px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-blue-600">Web3ShoppingCart</h1>

      {/* Search Box */}
      <div className="flex items-center bg-white shadow-md rounded-lg px-4 py-2 w-64 md:w-80">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full outline-none"
        />

        {/* Search Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-gray-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18a7.5 7.5 0 006.15-3.35z"
          />
        </svg>
      </div>

    </nav>
  );
}

