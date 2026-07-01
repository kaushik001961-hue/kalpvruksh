import Link from "next/link";
import { HeartHandshake } from "lucide-react";

export default function VolunteerCTA() {
  return (
    <section className="bg-gradient-to-r from-green-900 via-green-800 to-green-700 py-20 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">
          <HeartHandshake className="h-10 w-10" />
        </div>

        <h2 className="text-4xl font-bold">
          Together We Can Create Lasting Change
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-green-100">
          Every volunteer makes a difference. Join Kalpvruksh Charitable Trust
          and help us build healthier, greener, and stronger communities through
          education, healthcare, environmental conservation, and social welfare.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/donate"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-green-900 transition hover:bg-green-100"
          >
            Support Our Mission
          </Link>

          <Link
            href="/contact"
            className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-green-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}