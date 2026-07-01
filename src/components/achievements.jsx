import achievements from "../data/achievements";

function Achievements() {
  return (
    <section id="achievements" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white">
            My <span className="text-blue-500">Achievements</span>
          </h2>

          <p className="mt-5 text-slate-400 text-lg">
            Highlights from my engineering journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 border border-slate-700 hover:border-blue-500 rounded-3xl p-8 transition duration-300"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-slate-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Achievements;