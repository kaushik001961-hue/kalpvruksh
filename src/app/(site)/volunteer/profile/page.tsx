export default function VolunteerProfilePage() {
  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h1 className="text-3xl font-bold mb-6">
        My Profile
      </h1>

      <div className="space-y-4">
        <p><strong>Name:</strong> Volunteer Name</p>
        <p><strong>Email:</strong> volunteer@email.com</p>
        <p><strong>City:</strong> Surat</p>
        <p><strong>Interest:</strong> Education</p>
      </div>
    </div>
  );
}