import Image from "next/image";

export default function VolunteerCTA() {
  return (
   <section className="pt-32 pb-20">

      {/* Background Image */}

      <Image
        src="/images/volunteer-bg.jpg"
        alt="Volunteer"
        fill
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/55"></div>

      {/* Content */}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        <span className="inline-block rounded-full bg-white/20 px-6 py-2 text-white font-semibold backdrop-blur">
          🙋 Join Our Mission
        </span>

        <h2 className="mt-8 text-5xl md:text-6xl font-bold text-white leading-tight">
          Become a Volunteer
          <br />
          and Make a Difference
        </h2>

        <p className="mt-8 text-xl leading-9 text-gray-200 max-w-3xl mx-auto">
          Your time, compassion and dedication can help transform lives,
          protect nature and create a stronger community for future
          generations.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

          <button className="rounded-full bg-green-700 px-10 py-4 text-white font-semibold shadow-xl transition hover:bg-green-800">
            Join Us Today
          </button>

          <button className="rounded-full border border-white px-10 py-4 text-white font-semibold transition hover:bg-white hover:text-black">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}