import Link from "next/link";
export default function Header() {
    return (
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
       
        <div  className="container mx-auto px-4 flex justify-between items-center">
          {/* Website title */}
          <h1 className="text-xl font-semibold">Next Js POC</h1>
          {/* Navigation menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-x-3">
              {/* Navigation links */}
              <li>
              <Link href="/products"  className="hover:text-gray-300">                
                  View Products
                </Link>
                <Link href="/product"  className="hover:text-gray-300">                
                  Add Product
                </Link>
              </li>
      
            </ul>
          </nav>
        
        </div>
      </header>
    );
  }