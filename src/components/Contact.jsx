import profile from "../data/profile";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-black text-white">
          Get In <span className="text-blue-500">Touch</span>
        </h2>

        <p className="mt-6 text-slate-400 text-lg">
          I'm always open to internship opportunities, collaborations, and exciting engineering projects.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">

          <a
            href={`mailto:${profile.email}`}
            className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            <FaEnvelope />
            Email Me
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl transition"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-3 border border-slate-600 hover:border-blue-500 px-8 py-4 rounded-xl transition"
          >
            <FaLinkedin />
            LinkedIn
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;