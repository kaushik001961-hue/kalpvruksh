import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Patel",
    role: "Volunteer",
    text: "Working with Kalpvruksh Charitable Trust has been a life-changing experience. Every initiative genuinely impacts the community.",
  },
  {
    name: "Meera Shah",
    role: "Donor",
    text: "I am proud to support an organization that is transparent, compassionate and dedicated to improving lives.",
  },
  {
    name: "Sanjay Kumar",
    role: "Beneficiary",
    text: "The education support provided by the trust helped my children continue their studies with confidence.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 font-semibold text-green-700">
            ⭐ Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            What People
            <span className="text-green-700"> Say About Us</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Hear from volunteers, donors and beneficiaries who have been
            part of our journey toward positive social change.
          </p>

        </div>

        {/* Testimonial Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl bg-[#F7F9F4] p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">

                <Quote className="h-7 w-7 text-green-700" />

              </div>

              <p className="mt-6 leading-8 text-slate-600">
                "{item.text}"
              </p>

              <div className="mt-8 border-t pt-6">

                <h3 className="text-xl font-bold text-slate-800">
                  {item.name}
                </h3>

                <p className="text-green-700">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}