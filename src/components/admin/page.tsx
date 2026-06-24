import prisma from "@/lib/prisma";

export default async function AdminDashboard() {
  const newsCount = await prisma.news.count();
  const projectCount = await prisma.project.count();
  const volunteerCount = await prisma.volunteer.count();
  const donationCount = await prisma.donation.count();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">
        <Card title="News" value={newsCount} />
        <Card title="Projects" value={projectCount} />
        <Card title="Volunteers" value={volunteerCount} />
        <Card title="Donations" value={donationCount} />
      </div>
    </div>
  );
}

function Card({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
}