function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-slate-400 text-center mt-4">
          Get to know more about me and my engineering journey.
        </p>

        {/* About Content */}
        <div className="mt-20 grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div className="flex justify-center">

            <div className="w-72 h-72 rounded-3xl bg-slate-800 flex items-center justify-center text-7xl shadow-xl">
              👩‍💻
            </div>

          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-bold">
              Electronics & Communication Engineering Student
            </h3>

            <p className="mt-6 text-slate-300 leading-8">
              I'm Jagannadham Sree Lakshmi, a passionate Electronics &
              Communication Engineering student with a strong interest
              in Embedded Systems, Semiconductor Technology, Artificial
              Intelligence, and IoT.

              <br /><br />

              I enjoy transforming ideas into real-world engineering
              projects through programming, electronics, and continuous
              learning.
            </p>

            {/* Information Cards */}

            <div className="mt-10 grid grid-cols-2 gap-6">

              <div className="bg-slate-800 p-5 rounded-2xl">
                <h4 className="text-blue-400 font-semibold">
                  🎓 Education
                </h4>

                <p className="mt-2 text-slate-300">
                  B.Tech ECE
                  <br />
                  VR Siddhartha Engineering College
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-2xl">
                <h4 className="text-blue-400 font-semibold">
                  🎯 Goal
                </h4>

                <p className="mt-2 text-slate-300">
                  Embedded Systems &
                  Semiconductor Engineer
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;