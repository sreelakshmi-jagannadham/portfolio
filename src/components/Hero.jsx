import profile from "../data/profile";
import avatar from "../assets/images/profile/avatar.png";

import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[90vh] bg-slate-950 text-white flex items-center px-6 py-24 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* ================= LEFT SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Greeting */}
            <p className="text-blue-400 text-lg font-semibold">
              👋 Hello, I'm
            </p>

            {/* Name */}
            <h1 className="mt-4 text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight">

              <span className="text-white">
                {profile.firstName}
              </span>

              <br />

              <span className="text-blue-500">
                {profile.lastName}
              </span>

            </h1>

            {/* Role */}
            <h2 className="mt-6 text-2xl md:text-3xl text-slate-200 font-semibold">
              {profile.role}
            </h2>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-slate-400">

              <HiOutlineLocationMarker className="text-blue-500 text-xl" />

              <span>{profile.location}</span>

            </div>

            {/* Interests */}
            <div className="mt-6 flex flex-wrap gap-3">

              {profile.interests.map((item) => (
                <span
                  key={item}
                  className="
                    px-4
                    py-2
                    rounded-full
                    bg-slate-800
                    border
                    border-slate-700
                    text-slate-300
                    text-sm
                    hover:border-blue-500
                    hover:text-blue-400
                    transition-all duration-300
                  "
                >
                  {item}
                </span>
              ))}

            </div>

            {/* Description */}
            <p className="mt-8 text-slate-400 text-lg leading-8 max-w-xl">
              {profile.description}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">

              {/* Resume */}
              <a
                href={profile.resume}
                className="
                  inline-flex
                  items-center
                  gap-2
                  bg-blue-600
                  hover:bg-blue-500
                  hover:-translate-y-1
                  shadow-lg
                  hover:shadow-blue-500/30
                  px-6
                  py-3
                  rounded-xl
                  font-semibold
                  transition-all duration-300
                "
              >
                <FaDownload />
                Resume
              </a>

              {/* GitHub */}
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex
                  items-center
                  gap-2
                  border
                  border-slate-600
                  text-white
                  hover:border-blue-500
                  hover:text-blue-400
                  hover:-translate-y-1
                  px-6
                  py-3
                  rounded-xl
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
                  gap-2
                  border
                  border-slate-600
                  text-white
                  hover:border-blue-500
                  hover:text-blue-400
                  hover:-translate-y-1
                  px-6
                  py-3
                  rounded-xl
                  transition-all duration-300
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

            {/* Explore Projects */}
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                mt-7
                text-blue-400
                hover:text-blue-300
                font-semibold
                group
              "
            >
              Explore my projects
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>

          </motion.div>


          {/* ================= RIGHT SECTION ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex justify-center"
          >

            <div
              className="
                relative
                bg-slate-900/80
                backdrop-blur-md
                rounded-3xl
                p-8
                shadow-2xl
                border
                border-slate-800
                max-w-sm
                w-full
                hover:border-blue-500/40
                transition-all duration-300
              "
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -inset-1
                  bg-blue-500/10
                  rounded-3xl
                  blur-2xl
                  -z-10
                "
              />

              {/* Avatar */}
              <img
                src={avatar}
                alt="Profile Avatar"
                className="
                  w-56
                  h-56
                  rounded-full
                  object-cover
                  mx-auto
                  border-4
                  border-blue-500
                  shadow-xl
                  shadow-blue-500/20
                "
              />

              {/* Name */}
              <h3 className="mt-6 text-2xl font-bold text-center text-white">
                {profile.shortName}
              </h3>

              {/* Branch */}
              <p className="text-center text-blue-400 mt-2 font-medium">
                {profile.branch}
              </p>

              {/* Details */}
              <div className="mt-8 space-y-4">

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">
                    College
                  </span>

                  <span className="text-white text-right">
                    {profile.degree}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    CGPA
                  </span>

                  <span className="text-white">
                    {profile.cgpa}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">
                    Graduation
                  </span>

                  <span className="text-white">
                    {profile.graduation}
                  </span>
                </div>

                <div className="flex justify-between gap-4">
                  <span className="text-slate-400">
                    Status
                  </span>

                  <span className="text-green-400 text-right">
                    Open to Internship
                  </span>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;