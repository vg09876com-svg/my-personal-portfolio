
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Victor George | Full Stack Software Developer",
  description:
    "Explore Victor George's software development portfolio, projects, skills, and contact information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <nav className="navbar">
            <Link href="/" className="logo">
              Victor<span>.</span>
            </Link>

            <div className="nav-links">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </nav>
        </header>

        {children}

        <footer className="site-footer">
          <p>
            © 2026 Victor George. Built with Next.js and React.
          </p>
        </footer>
      </body>
    </html>
  );
}
