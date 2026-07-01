import profile from "../data/profile";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-900 flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-blue-400 text-xl md:text-2xl font-semibold">
          👋 Hello, I'm
        </p>

        <h1 className="mt-4 text-6xl md:text-8xl font-black leading-tight">
          <span className="text-white">
            {profile.name.split(" ")[0]}
          </span>

          <br />

          <span className="text-blue-500">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </h1>

        <p className="mt-8 text-2xl md:text-3xl text-slate-200 font-medium">
          {profile.role}
        </p>

        <p className="mt-4 text-lg md:text-xl text-slate-400">
          {profile.interests.join(" • ")}
        </p>

        <p className="mt-8 max-w-3xl mx-auto text-lg text-slate-300 leading-8">
          {profile.tagline}
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition duration-300 shadow-lg">
            📄 Download Resume
          </button>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-xl transition duration-300"
          >
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 border-2 border-slate-500 text-slate-300 hover:bg-slate-700 hover:text-white font-semibold rounded-xl transition duration-300"
          >
            LinkedIn
          </a>

        </div>

        <div className="mt-20 animate-bounce">

          <p className="text-slate-500 text-sm tracking-widest uppercase">
            Scroll Down
          </p>

          <div className="mt-2 text-3xl text-blue-500">
            ↓
          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;