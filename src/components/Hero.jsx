import profile from "../data/profile";
import avatar from "../assets/images/profile/avatar.png";

import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-slate-950 flex items-center px-6 py-10 lg:py-16"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}

          <div>

            <p className="text-blue-400 text-lg font-semibold">
              👋 Hello, I'm
            </p>

            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">

              <span className="text-white">
                {profile.firstName}
              </span>

              <br />

              <span className="text-blue-500">
                {profile.lastName}
              </span>

            </h1>

            <h2 className="mt-6 text-2xl md:text-3xl text-slate-200 font-semibold">
              {profile.role}
            </h2>

            <div className="mt-5 flex items-center gap-2 text-slate-400">

              <HiOutlineLocationMarker className="text-blue-500 text-xl" />

              <span>{profile.location}</span>

            </div>

            <div className="mt-6 flex flex-wrap gap-3">

              {profile.interests.map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm hover:border-blue-500 hover:text-blue-400 transition"
                >
                  {item}
                </span>
              ))}

            </div>

            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              {profile.description}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={profile.resume}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 px-6 py-3 rounded-xl font-semibold transition duration-300"
              >
                <FaDownload />
                Resume
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-xl transition"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-slate-600 hover:border-blue-500 hover:text-blue-400 px-6 py-3 rounded-xl transition"
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </div>

          {/* Right Section */}

          <div className="flex justify-center">

            <div className="bg-slate-900 rounded-3xl p-8 shadow-2xl border border-slate-800 max-w-sm w-full">

              <img
                src={avatar}
                alt="Profile Avatar"
                className="w-56 h-56 rounded-full object-cover mx-auto border-4 border-blue-500"
              />

              <h3 className="mt-6 text-2xl font-bold text-center text-white">
                {profile.shortName}
              </h3>

              <p className="text-center text-blue-400 mt-2 font-medium">
                {profile.branch}
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex justify-between">
                  <span className="text-slate-400">College</span>
                  <span>{profile.degree}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">CGPA</span>
                  <span>{profile.cgpa}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Graduation</span>
                  <span>{profile.graduation}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="text-green-400">
                    Open to Internship
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;