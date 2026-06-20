import Image from "next/image";


export default function About() {
  return (
    <section className="bg-[#F7F9F4] py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}

          <div className="relative">

             <Image
    src="/images/about.jpg"
    alt="About Kalpvruksh Trust"
    width={700}
    height={700}
    priority
    className="w-full h-[550px] rounded-[30px] object-cover shadow-2xl"
  />

            <div className="absolute -bottom-8 -right-8 rounded-3xl bg-green-700 text-white px-8 py-6 shadow-xl">

              <h2 className="text-4xl font-bold">10+</h2>

              <p className="text-sm uppercase tracking-widest">
                Years of Service
              </p>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
              🌿 About Kalpvruksh Trust
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-800 leading-tight">

              Planting Hope,
              <br />
              Nurturing Lives.

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              Shree Kalpvruksh Charitable Trust is dedicated to creating
              meaningful social impact through education, healthcare,
              environmental conservation and community welfare.

            </p>

            <p className="mt-6 text-lg leading-8 text-slate-600">

              We believe that every small contribution can transform lives,
              empower communities and create a greener, healthier and more
              compassionate future for generations to come.

            </p>

            {/* Mission */}

            <div className="mt-10 rounded-3xl bg-white p-8 shadow-lg">

              <h3 className="text-2xl font-bold text-green-700">

                Our Mission

              </h3>

              <p className="mt-4 text-slate-600 leading-7">

                To serve society through education, healthcare,
                environmental protection and humanitarian initiatives
                while inspiring sustainable community development.

              </p>

            </div>

            {/* Button */}

            <button className="mt-10 rounded-full bg-green-700 hover:bg-green-800 transition px-8 py-4 text-white font-semibold shadow-lg">

              Read More →

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}