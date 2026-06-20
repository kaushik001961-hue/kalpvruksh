export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        © {new Date().getFullYear()} Kalpvruksh Charitable Trust.
        All Rights Reserved.
      </div>
    </footer>
  );
}