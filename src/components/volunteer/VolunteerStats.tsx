import { Users, CalendarDays, HeartHandshake, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Active Volunteers",
  },
  {
    icon: CalendarDays,
    value: "50+",
    label: "Events Organized",
  },
  {
    icon: HeartHandshake,
    value: "10,000+",
    label: "Lives Impacted",
  },
  {
    icon: Award,
    value: "25+",
    label: "Projects Completed",
  },
];

export default function VolunteerStats() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-green-900">
            Our Impact
          </h2>

          <p className="mt-4 text-gray-600">
            Together with our volunteers, we continue creating
            meaningful change in communities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="rounded-3xl bg-green-50 p-8 text-center shadow transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <Icon className="h-8 w-8 text-green-700" />
                </div>

                <h3 className="text-4xl font-bold text-green-700">
                  {item.value}
                </h3>

                <p className="mt-3 text-gray-600">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}