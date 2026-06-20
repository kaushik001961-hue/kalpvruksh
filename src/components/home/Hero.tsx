
export default function Hero() {
  return (
   <section
  className="relative min-h-screen bg-cover bg-center flex items-center justify-center pt-20"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6">

        {/* Trust Logo */}
      //  <img
      //    src="/images/logo.png"
       //   alt="Kalpvruksh Trust"
      //    className="w-[520px] max-w-full"
        />

        {/* Move everything below the logo */}
        <div className="mt-12">

          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-white/15 backdrop-blur-md px-6 py-2 text-white text-lg">
            🌿 Together We Can Change Lives
          </div>

              {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">


            <button className="rounded-full border border-white px-10 py-4 text-white font-semibold hover:bg-white hover:text-black transition">
              Become Volunteer
            </button>

          </div>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white text-4xl">
        ↓
      </div>

    </section>
  );
}
