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

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#home"
            className="text-4xl font-black text-blue-500 tracking-wide"
          >
            JSL
          </a>

          {/* Desktop Menu */}

          <nav className="hidden md:flex items-center gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.id}`}
                className="text-slate-300 hover:text-blue-500 transition duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}

          </nav>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-white"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          {navLinks.map((link) => (

            <a
              key={link.name}
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 text-slate-300 hover:bg-slate-800 hover:text-blue-500 transition"
            >
              {link.name}
            </a>

          ))}

        </div>

      )}
    </header>
  );
}

export default Navbar;