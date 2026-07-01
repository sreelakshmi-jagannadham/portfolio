function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-black text-blue-500 cursor-pointer">
          JSL
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex items-center gap-10">

          <li>
            <a
              href="#about"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="text-slate-300 hover:text-blue-500 transition"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;