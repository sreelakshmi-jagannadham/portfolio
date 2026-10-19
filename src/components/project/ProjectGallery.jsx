import { useEffect, useState } from "react";

function ProjectGallery({ project }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const gallery = project.gallery ?? [];
  const isViewerOpen = selectedIndex !== null;
  const selectedImage = isViewerOpen ? gallery[selectedIndex] : null;

  const closeViewer = () => setSelectedIndex(null);

  const showPrevious = (event) => {
    event?.stopPropagation();
    setSelectedIndex((current) =>
      current === null
        ? null
        : (current - 1 + gallery.length) % gallery.length
    );
  };

  const showNext = (event) => {
    event?.stopPropagation();
    setSelectedIndex((current) =>
      current === null ? null : (current + 1) % gallery.length
    );
  };

  useEffect(() => {
    if (!isViewerOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isViewerOpen, gallery.length]);

  return (
    <>
      <section className="py-20 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-blue-400 uppercase tracking-[0.25em] text-sm font-semibold">
              Visual Showcase
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Project <span className="text-blue-500">Gallery</span>
            </h2>

            <p className="text-slate-400 max-w-2xl mx-auto mt-4 leading-7">
              Screenshots and simulation results from the Smart Electronic
              Voting Machine.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gallery.map((item, index) => (
              <div
                key={`${item.image}-${index}`}
                className="group bg-slate-800/80 border border-slate-700 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:-translate-y-2 transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  aria-label={`View image: ${item.title}`}
                  className="block w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
                >
                  <div className="relative h-64 bg-slate-900 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 group-hover:bg-slate-950/40 transition-colors duration-300">
                      <span className="opacity-0 group-hover:opacity-100 text-white bg-blue-600/90 rounded-full px-5 py-3 font-semibold transition-opacity duration-300">
                        ⤢ View Full Image
                      </span>
                    </div>
                  </div>
                </button>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-slate-400 leading-6">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isViewerOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 sm:p-8"
          onClick={closeViewer}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
        >
          <button
            type="button"
            onClick={closeViewer}
            aria-label="Close image viewer"
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20 transition-colors"
          >
            ×
          </button>

          {gallery.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous image"
                className="absolute left-3 sm:left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20 transition-colors"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next image"
                className="absolute right-3 sm:right-6 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white hover:bg-white/20 transition-colors"
              >
                ›
              </button>
            </>
          )}

          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="max-h-[78vh] max-w-full rounded-xl object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {selectedImage.title}
              </h3>

              {selectedImage.description && (
                <p className="mt-2 max-w-2xl text-sm text-slate-300">
                  {selectedImage.description}
                </p>
              )}

              <p className="mt-2 text-xs text-slate-400">
                {selectedIndex + 1} of {gallery.length} · Use ← → to navigate · Esc to close
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProjectGallery;