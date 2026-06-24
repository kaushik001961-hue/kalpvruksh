import { register } from "@/actions/register";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form
        action={register}
        className="bg-white p-8 rounded-lg shadow w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">
          Volunteer Registration
        </h1>

        <input
          name="name"
          placeholder="Full Name"
          required
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full border p-3 mb-4 rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          className="w-full border p-3 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}