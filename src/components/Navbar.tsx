import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Amenities", path: "/amenities" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight">
              Big<span className="text-emerald-600">Estate</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`${
                  isActive(link.path)
                    ? "text-emerald-600 border-b-2 border-emerald-600"
                    : "text-slate-600 hover:text-emerald-600 hover:border-b-2 hover:border-emerald-200 transition-colors duration-200"
                } inline-flex items-center px-1 pt-1 text-sm font-medium h-20`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              to="/contact"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 shadow-sm"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-emerald-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive(link.path)
                    ? "bg-emerald-50 text-emerald-600 border-l-4 border-emerald-600"
                    : "text-slate-600 hover:bg-slate-50 hover:text-emerald-600 border-l-4 border-transparent hover:border-emerald-300"
                } block px-3 py-2 text-base font-medium transition-colors duration-200`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 pb-2">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md font-medium transition-colors duration-200 shadow-sm"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
