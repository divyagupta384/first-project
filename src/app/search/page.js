import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Search = () => {
  return (
    <div>
      <Header />
      <div className="min-h-[70vh] flex items-center justify-center">
        <button
          type="text"
          placeholder="search..."
          className="border-2 border-gray-300 text-gray-500 py-2 px-4 rounded-md w-[300px]
            hover:bg-gray-100 hover:border-gray-400 text-left "
        >
          Search...
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
