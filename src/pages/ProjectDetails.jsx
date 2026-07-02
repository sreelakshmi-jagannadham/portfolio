import { Link } from "react-router-dom";
import { useState } from "react";

function ProjectDetails() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Hero */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-10"
          >
            ← Back to Portfolio
          </Link>

          {/* Title */}
          <h1 className="text-5xl md:text-6xl font-black text-center">
            Smart <span className="text-blue-500">Electronic Voting Machine</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-4xl mx-auto text-slate-400 text-lg text-center leading-8">
            A secure Arduino-based electronic voting system featuring
            password-protected administration, graphical TFT interface,
            EEPROM vote storage, vote locking, live result visualization,
            and automatic winner detection.
          </p>

          {/* ================= PROJECT OVERVIEW ================= */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Project Overview
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Platform</h3>
                <p className="mt-2 text-lg">Arduino Uno</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Language</h3>
                <p className="mt-2 text-lg">Embedded C</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Display</h3>
                <p className="mt-2 text-lg">ILI9341 TFT</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Storage</h3>
                <p className="mt-2 text-lg">EEPROM</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Simulation</h3>
                <p className="mt-2 text-lg">Wokwi</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">IDE</h3>
                <p className="mt-2 text-lg">Arduino IDE</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Microcontroller</h3>
                <p className="mt-2 text-lg">ATmega328P</p>
              </div>

              <div className="bg-slate-800 p-6 rounded-2xl">
                <h3 className="text-blue-400 font-semibold">Status</h3>
                <p className="mt-2 text-lg text-green-400">
                  Completed ✔
                </p>
              </div>

            </div>

          </section>

          {/* ================= GALLERY ================= */}

          <section className="mt-24">

            <h2 className="text-4xl font-bold text-center mb-12">
              Project Gallery
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {[ {
                     src: "/images/voting/home-screen.png",
                     title: "Home Screen",
                  },
                  {
                     src: "/images/voting/circuit-diagram.png",
                     title: "Circuit Diagram",
                },
                {
                     src: "/images/voting/vote-recorded.png",
                     title: "Vote Recorded",
                },
                {
                     src: "/images/voting/access-granted.png",
                     title: "Access Granted",
                },
                {
                     src: "/images/voting/password-screen.png",
                     title: "Password Screen",
                },
                {
                     src: "/images/voting/results-dashboard.png",
                     title: "Results Dashboard",
                },
                {
                      src: "/images/voting/winner-screen.png",
                     title: "Winner Declaration",
                },
                {
                     src: "/images/voting/voting-closed.png",
                     title: "Voting Closed",
                },
                {
                     src: "/images/voting/voting-resumed.png",
                     title: "Voting Resumed",
                },
              ].map((image) => (

               <div key={image.src}>

                 <img
                     src={image.src}
                     alt={image.title}
                     onClick={() => setSelectedImage(image.src)}
                     className="rounded-2xl shadow-lg hover:scale-105 transition duration-300 cursor-pointer"
                 />

                  <p className="mt-3 text-center text-slate-400">
                    {image.title}
                  </p>

               </div>

    ))}

  </div>

</section>

        </div>

      </section>

      {/* ================= KEY FEATURES ================= */}

      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Key Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">🔒</div>
              <h3 className="text-xl font-bold mt-4">
                Password Protection
              </h3>
              <p className="text-slate-400 mt-2">
                Admin password required to access results and reset votes.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">🗳️</div>
              <h3 className="text-xl font-bold mt-4">
                One Vote Per User
              </h3>
              <p className="text-slate-400 mt-2">
                Prevents duplicate voting and ensures fair elections.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">💾</div>
              <h3 className="text-xl font-bold mt-4">
                EEPROM Storage
              </h3>
              <p className="text-slate-400 mt-2">
                Vote counts remain saved even after power loss.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">📊</div>
              <h3 className="text-xl font-bold mt-4">
                Graphical Results
              </h3>
              <p className="text-slate-400 mt-2">
                Displays live vote counts and percentages using a graphical interface.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">🏆</div>
              <h3 className="text-xl font-bold mt-4">
                Winner Detection
              </h3>
              <p className="text-slate-400 mt-2">
                Automatically identifies the winning candidate after voting ends.
              </p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6">
              <div className="text-4xl">🔔</div>
              <h3 className="text-xl font-bold mt-4">
                Buzzer Feedback
              </h3>
              <p className="text-slate-400 mt-2">
                Provides audio confirmation for successful voting and system events.
              </p>
            </div>

          </div>

        </div>

      </section>
      {/* ================= LIGHTBOX ================= */}
    </div>
  );
}

export default ProjectDetails;