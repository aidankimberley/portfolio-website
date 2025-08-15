import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aidan Kimberley — Mechanical Engineering Graduate",
  description:
    "Portfolio of Aidan Kimberley, a mechanical/robotics engineer focused on mechatronics, control, and autonomous systems.",
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    title: "Aidan Kimberley — Mechanical/Robotics Engineer",
    description:
      "Portfolio of Aidan Kimberley, a mechanical/robotics engineer focused on mechatronics, control, and autonomous systems.",
    url: "/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <header className="border-b border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/30 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              Aidan Kimberley
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/#about" className="hover:opacity-80">About</Link>
              <Link href="/#experience" className="hover:opacity-80">Experience</Link>
              <Link href="/projects" className="hover:opacity-80">Projects</Link>
              <Link href="/#skills" className="hover:opacity-80">Skills</Link>
              <Link href="/#publications" className="hover:opacity-80">Publications</Link>
              <Link href="/resume" className="hover:opacity-80">Resume</Link>
              <Link href="/#contact" className="hover:opacity-80">Contact</Link>
            </nav>
            <div className="md:hidden">
              <Link href="/resume" className="rounded-lg px-3 py-2 bg-blue-600 text-white text-sm">
                Resume
              </Link>
            </div>
          </div>
        </header>
        <main className="min-h-screen">{children}</main>
        <footer className="border-t border-black/5 dark:border-white/10 py-10 text-sm">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-muted-foreground">© {new Date().getFullYear()} Aidan Kimberley</p>
            <div className="flex gap-4">
              <a className="hover:opacity-80" href="mailto:aidanlkimberley@gmail.com">aidanlkimberley@gmail.com</a>
              <a className="hover:opacity-80" href="https://www.linkedin.com/in/aidan-kimberley-36386221b" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="hover:opacity-80" href="https://github.com/aidankimberley" target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
//npm run dev