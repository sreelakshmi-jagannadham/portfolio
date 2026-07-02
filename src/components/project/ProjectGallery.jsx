import { useState } from "react";
import votingMachine from "../../data/votingMachine";

function ProjectGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="mt-24">

        <h2 className="text-4xl font-bold text-center mb-12">
          Project Gallery
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {votingMachine.gallery.map((image) => (

            <div
              key={image.image}
              className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >

              <img
                src={image.image}
                alt=""
                onClick={() => setSelectedImage(image.image)}
                className="w-full h-60 object-cover cursor-pointer"
              />

              <div className="p-5">

                <h3 className="text-xl font-semibold">
                  {image.title}
                </h3>

                <p className="mt-2 text-slate-400">
                  {image.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>

      {selectedImage && (

        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >

          <button
            className="absolute top-6 right-8 text-white text-5xl hover:text-red-500"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt=""
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

        </div>

      )}

    </>
  );
}

export default ProjectGallery;