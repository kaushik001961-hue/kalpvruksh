import { Target, Eye, Heart } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            🌿 Mission & Vision
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Together We Create
            <span className="text-green-700"> Positive Change</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our mission is to empower communities through compassion,
            education, healthcare and environmental sustainability while
            creating opportunities for a brighter future.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {/* Mission */}

          <div className="rounded-3xl bg-[#F7F9F4] p-10 shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

              <Target className="h-8 w-8 text-green-700" />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To uplift society through education, healthcare,
              environmental protection, food support and community
              development initiatives that improve quality of life.
            </p>

          </div>

          {/* Vision */}

          <div className="rounded-3xl bg-[#F7F9F4] p-10 shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

              <Eye className="h-8 w-8 text-green-700" />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              To build a compassionate and sustainable society where
              every individual has access to education, healthcare and
              opportunities for growth.
            </p>

          </div>

          {/* Values */}

          <div className="rounded-3xl bg-[#F7F9F4] p-10 shadow-lg hover:-translate-y-2 transition duration-300">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">

              <Heart className="h-8 w-8 text-green-700" />

            </div>

            <h3 className="mt-8 text-2xl font-bold">
              Our Values
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              Compassion, transparency, integrity, sustainability and
              community participation guide every initiative undertaken
              by Kalpvruksh Charitable Trust.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}