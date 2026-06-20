import Image from "next/image";

const gallery = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg",
];

export default function GalleryPreview() {
  return (
    <section className="bg-[#F7F9F4] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            📸 Gallery
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Moments That
            <span className="text-green-700"> Inspire</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            A glimpse of our activities, community programs and the positive
            impact created through collective efforts.
          </p>

        </div>

        {/* Gallery Grid */}

        <div className="mt-16 grid grid-cols-2 gap-5 md:grid-cols-3">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={500}
                className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
              />

            </div>

          ))}

        </div>

        {/* Button */}

        <div className="mt-16 text-center">

          <button className="rounded-full border-2 border-green-700 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white">

            View Full Gallery

          </button>

        </div>

      </div>

    </section>
  );
}