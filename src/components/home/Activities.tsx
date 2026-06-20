import {
  Trees,
  GraduationCap,
  HeartPulse,
  Utensils,
  Users,
  Handshake,
} from "lucide-react";

const activities = [
  {
    title: "Tree Plantation",
    icon: Trees,
    description:
      "Promoting a greener future through plantation drives and environmental conservation initiatives.",
  },
  {
    title: "Education Support",
    icon: GraduationCap,
    description:
      "Providing educational assistance, scholarships and learning opportunities for children.",
  },
  {
    title: "Healthcare Camps",
    icon: HeartPulse,
    description:
      "Organizing free medical camps and health awareness programs for underserved communities.",
  },
  {
    title: "Food Distribution",
    icon: Utensils,
    description:
      "Supporting needy families through food donation and nutrition assistance programs.",
  },
  {
    title: "Women Empowerment",
    icon: Users,
    description:
      "Encouraging women through skill development, education and self-employment initiatives.",
  },
  {
    title: "Community Development",
    icon: Handshake,
    description:
      "Working together with local communities to improve quality of life and social welfare.",
  },
];

export default function Activities() {
  return (
    <section className="bg-[#F7F9F4] py-24">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-green-700 font-semibold">
            🌿 Our Activities
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-800">
            Making a Difference
            <span className="text-green-700"> Every Day</span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Our initiatives focus on creating sustainable social impact
            through education, healthcare, environmental conservation,
            empowerment and community welfare.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {activities.map((activity, index) => {

            const Icon = activity.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-700 transition">

                  <Icon className="h-8 w-8 text-green-700 group-hover:text-white" />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-800">
                  {activity.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {activity.description}
                </p>

                <button className="mt-8 text-green-700 font-semibold hover:text-green-900">
                  Learn More →
                </button>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  );
}