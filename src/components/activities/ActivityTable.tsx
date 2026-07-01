// src/components/activities/ActivityTable.tsx
export default function ActivityTable({ activities }: { activities: any[] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
      <table className="w-full text-left text-sm text-gray-500">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Activity Details</th>
          </tr>
        </thead>
        <tbody>
          {activities.length === 0 ? (
            <tr>
              <td colSpan={2} className="px-6 py-4 text-center">No activities found.</td>
            </tr>
          ) : (
            activities.map((activity) => (
              <tr key={activity.id} className="border-b bg-white hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{activity.id}</td>
                <td className="px-6 py-4">{JSON.stringify(activity)}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}