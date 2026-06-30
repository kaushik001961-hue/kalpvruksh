import { logout } from "@/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="px-4 py-2 bg-red-600 text-white rounded-lg"
      >
        Logout
      </button>
    </form>
  );
}