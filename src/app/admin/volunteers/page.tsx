import prisma from "@/lib/prisma";

interface PageProps {
  searchParams: Promise<{
    search?: string;
  }>;
}

export default async function VolunteersPage({
  searchParams,
}: PageProps) {
  const { search } = await searchParams;

  const volunteers = await prisma.volunteer.findMany({
    where: search
      ? {
          OR: [
            {
              user: {
                name: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              user: {
                email: {
                  contains: search,
                  mode: "insensitive",
                },
              },
            },
            {
              city: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              interest: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,

    include: {
      user: true,
    },

    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold">
            Volunteers Management
          </h1>
          <p className="text-slate-600">
            View and manage volunteers
          </p>
        </div>
      </div>

      {/* Search Box */}
      <form className="mb-6">
        <input
          type="text"
          name="search"
          defaultValue={search}
          placeholder="Search by name, email, city, interest..."
          className="w-full max-w-md border rounded-lg px-4 py-2"
        />
      </form>

      {/* Stats */}
      <div className="mb-4">
        <p className="text-sm text-slate-600">
          Total Results: {volunteers.length}
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">City</th>
              <th className="p-4 text-left">Interest</th>
              <th className="p-4 text-left">Joined</th>
            </tr>
          </thead>

          <tbody>
            {volunteers.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="p-6 text-center"
                >
                  No volunteers found.
                </td>
              </tr>
            ) : (
              volunteers.map((volunteer) => (
                <tr
                  key={volunteer.id}
                  className="border-t hover:bg-slate-50"
                >
                  <td className="p-4">
                    {volunteer.user.name}
                  </td>

                  <td className="p-4">
                    {volunteer.user.email}
                  </td>

                  <td className="p-4">
                    {volunteer.phone}
                  </td>

                  <td className="p-4">
                    {volunteer.city}
                  </td>

                  <td className="p-4">
                    {volunteer.interest}
                  </td>

                  <td className="p-4">
                    {new Date(
                      volunteer.createdAt
                    ).toLocaleDateString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}