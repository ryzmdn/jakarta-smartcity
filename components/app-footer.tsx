"use client";

import Link from "next/link";

const QUICK_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kota", href: "/tentang-kota" },
  { label: "Kebudayaan", href: "/budaya" },
  { label: "Kuliner", href: "/kuliner" },
  { label: "Destinasi Wisata", href: "/wisata" },
  { label: "Digitalisasi", href: "/digitalisasi" },
];

const COLLABORATORS = [
  { name: "Media Cloud Indonesia", href: "https://mediacloud.id" },
  { name: "PANDI (Pengelola Nama Domain Internet Indonesia)", href: "https://pandi.id" },
  { name: "Domain.id", href: "https://domain.id" },
  { name: "Dotid Academy", href: "#" },
];

const REQUIRED_FOLLOWS = [
  { username: "@mediacloudindonesia", href: "https://instagram.com/mediacloudindonesia" },
  { username: "@pandi_id", href: "https://instagram.com/pandi_id" },
  { username: "@domaindotid", href: "https://instagram.com/domaindotid" },
  { username: "@dotidacademy", href: "https://instagram.com/dotidacademy" },
];

export function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 mt-auto" aria-labelledby="footer-navigation">
      <h2 id="footer-navigation" className="sr-only">Navigasi Kaki Halaman</h2>
      
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-lg tracking-tight">
              Nusantara Digital City
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
              Kompetisi Website hasil kolaborasi strategis antara Media Cloud Indonesia dan PANDI untuk digitalisasi identitas kota di era global.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Menu Utama</h3>
            <nav className="flex flex-col gap-2.5" aria-label="Menu Kaki Halaman">
              {QUICK_LINKS.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs text-slate-400 hover:text-white transition-colors duration-200 outline-none focus:text-white focus:underline"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Collaborators */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Penyelenggara</h3>
            <ul className="flex flex-col gap-2.5">
              {COLLABORATORS.map((collab, index) => (
                <li key={index}>
                  <a
                    href={collab.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-400 hover:text-white transition-colors duration-200 outline-none focus:text-white"
                  >
                    {collab.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Instagram Follows (Mandatory Rules) */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase">Ketentuan Follow</h3>
            <ul className="flex flex-col gap-2.5">
              {REQUIRED_FOLLOWS.map((account, index) => (
                <li key={index}>
                  <a
                    href={account.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors duration-200 outline-none focus:text-sky-400"
                  >
                    <span className="size-1.5 rounded-full bg-slate-700" />
                    {account.username}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright and notes */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-600">
          <p>&copy; {currentYear} Jakarta Smart City. Seluruh hak cipta dilindungi undang-undang.</p>
          <p>Kolaborasi Media Cloud Indonesia &amp; PANDI.</p>
        </div>
      </div>
    </footer>
  );
}
