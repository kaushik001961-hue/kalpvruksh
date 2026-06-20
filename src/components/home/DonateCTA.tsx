import { HeartHandshake } from "lucide-react";

export default function DonateCTA() {
  return (
    <section className="bg-gradient-to-r from-green-700 via-green-600 to-emerald-700 py-24">

      <div className="max-w-6xl mx-auto px-6">

        <div className="rounded-[40px] bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 text-center shadow-2xl">

          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white">

            <HeartHandshake className="h-10 w-10 text-green-700" />

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl md:text-6xl font-bold text-white">

            Every Contribution
            <br />
            Plants Hope & Changes Lives

          </h2>

          {/* Description */}

          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl leading-9 text-green-50">

            Your generous support enables us to provide education,
            healthcare, environmental protection and humanitarian
            assistance to those who need it most.

          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6">

            <button className="rounded-full bg-white px-10 py-4 text-lg font-semibold text-green-700 shadow-lg transition hover:scale-105">

              ❤️ Donate Now

            </button>

            <button className="rounded-full border border-white px-10 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-green-700">

              Learn More

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}