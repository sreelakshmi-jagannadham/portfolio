import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Experience", id: "experience" },
    { name: "Education", id: "education" },
    { name: "Achievements", id: "achievements" },
    { name: "Certifications", id: "certifications" },
    { name: "Contact", id: "contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-800">

      {/* Navbar Container */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-4xl font-black text-blue-500 tracking-wide"
          >
            JSL
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="text-slate-300 hover:text-blue-500 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center justify-center w-12 h-12 text-white text-2xl rounded-lg hover:bg-slate-800 transition duration-300"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-slate-900 border-t border-slate-800 shadow-xl transition-all duration-300 ${
          menuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >

        <nav className="max-h-[calc(100vh-5rem)] overflow-y-auto">

          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={closeMenu}
              className="block px-6 py-4 text-slate-300 border-b border-slate-800/70 hover:bg-slate-800 hover:text-blue-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </nav>

      </div>

    </header>
  );
}

export default Navbar;