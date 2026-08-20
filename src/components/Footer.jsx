import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import profile from "../data/profile";

function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-white">

      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* ================= TOP SECTION ================= */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <div className="text-center md:text-left">

            <a
              href="#home"
              className="text-3xl font-black text-blue-500 tracking-wide"
            >
              JSL
            </a>

            <p className="mt-3 text-slate-400 max-w-md">
              Electronics & Communication Engineering student passionate
              about embedded systems, semiconductor technology, AI, and IoT.
            </p>

          </div>


          {/* Social Links */}
          <div className="flex items-center gap-4">

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="
                w-11
                h-11
                rounded-xl
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-blue-400
                hover:border-blue-500
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="
                w-11
                h-11
                rounded-xl
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-slate-300
                hover:text-blue-400
                hover:border-blue-500
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaLinkedin />
            </a>

            {/* Back to Top */}
            <a
              href="#home"
              aria-label="Back to top"
              className="
                w-11
                h-11
                rounded-xl
                bg-blue-600
                flex
                items-center
                justify-center
                hover:bg-blue-500
                hover:-translate-y-1
                transition-all duration-300
              "
            >
              <FaArrowUp />
            </a>

          </div>

        </div>


        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />


        {/* ================= BOTTOM SECTION ================= */}

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-sm">

          <p className="text-slate-400 text-center md:text-left">
            © 2026 Jagannadham Sree Lakshmi. All Rights Reserved.
          </p>

          <p className="text-slate-500 text-center">
            Built with React, Vite & Tailwind CSS.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;