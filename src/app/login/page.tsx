import { login } from "@/actions/auth";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        action={login}
        className="bg-white p-8 shadow rounded w-96 space-y-4"
      >
        <h1 className="text-2xl font-bold">
          Admin Login
        </h1>

        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full border p-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full border p-3"
          required
        />

        <button
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}