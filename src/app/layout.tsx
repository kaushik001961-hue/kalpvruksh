import Navbar from "../components/layout/Navbar"; 
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* The body acts as the root window context */}
      <body className="antialiased min-h-screen bg-white relative">
        
        {/* 🚀 PLACED AT ROOT: Keeps the navbar floating permanently on top */}
        <Navbar />
        
        {/* Main Content Area: Pushed down 140px (pt-36) to perfectly clear the floating bar */}
        <main className="w-full pt-36">
          {children}
        </main>
          
      </body>
    </html>
  );
}