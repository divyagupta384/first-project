import Link from 'next/link';

const Header = () => {
  return (
    <div className="text-black p-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <span className="text-lg font-bold text-orange-500 ml-8">TouchWood</span>
        <span className="text-lg">Weather Celsius</span>
      </div>
      
      <nav className="space-x-8">
        <Link href="/" className="text-lg hover:text-orange-400 hover:underline">Home</Link>
        <Link href="/about" className="text-lg hover:text-orange-400 hover:underline">About</Link>
        <Link href="/covid-19" className="text-lg hover:text-orange-400 hover:underline">Covid 19</Link>
        <Link href="/contact-us" className="text-lg hover:text-orange-400 hover:underline">Contact Us</Link>
        <Link href="/search" className="text-lg hover:text-orange-400 hover:underline">Search</Link>
      </nav>
    </div>
  );
};

export default Header;



