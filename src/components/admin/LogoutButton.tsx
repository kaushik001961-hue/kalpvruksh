import { logout } from "@/actions/auth";

export default function LogoutButton() {
  return (
    <form action={logout}>
      <button
        type="submit"
        className="w-full text-left px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700"
      >
        Logout
      </button>
    </form>
  );
}