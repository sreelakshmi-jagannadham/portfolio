import { motion } from "framer-motion";
import profile from "../data/profile";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            bg-slate-900/80
            backdrop-blur-md
            border
            border-slate-800
            rounded-3xl
            p-8
            md:p-14
            text-center
            overflow-hidden
          "
        >

          {/* Background Glow */}
          <div
            className="
              absolute
              -top-32
              left-1/2
              -translate-x-1/2
              w-80
              h-80
              bg-blue-500/10
              rounded-full
              blur-3xl
              pointer-events-none
            "
          />

          {/* Heading */}
          <div className="relative">

            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Let's Connect
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Get In <span className="text-blue-500">Touch</span>
            </h2>

            <p className="mt-6 text-slate-400 text-lg leading-8 max-w-2xl mx-auto">
              I'm always open to internship opportunities, collaborations,
              and exciting engineering projects.
            </p>

          </div>

          {/* Contact Buttons */}
          <div className="relative mt-10 flex flex-wrap justify-center gap-4">

            {/* Email */}
            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Contact`}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                bg-blue-600
                hover:bg-blue-500
                hover:-translate-y-1
                shadow-lg
                hover:shadow-blue-500/30
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition-all duration-300
              "
            >
              <FaEnvelope />
              Email Me
            </a>

            {/* GitHub */}
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-slate-600
                hover:border-blue-500
                hover:text-blue-400
                hover:-translate-y-1
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition-all duration-300
              "
            >
              <FaGithub />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                border
                border-slate-600
                hover:border-blue-500
                hover:text-blue-400
                hover:-translate-y-1
                px-7
                py-3.5
                rounded-xl
                font-semibold
                transition-all duration-300
              "
            >
              <FaLinkedin />
              LinkedIn
            </a>

          </div>

          {/* Email Address */}
          <div className="relative mt-8">
            <p className="text-slate-500 text-sm">
              You can also reach me directly at
            </p>

            <a
              href={`mailto:${profile.email}?subject=Portfolio%20Contact`}
              className="
                inline-block
                mt-2
                text-blue-400
                hover:text-blue-300
                transition
                font-medium
              "
            >
              {profile.email}
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default Contact;