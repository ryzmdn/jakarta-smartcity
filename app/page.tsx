"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BuildingOffice2Icon,
  SparklesIcon,
  MapIcon,
  CpuChipIcon,
  ChevronDownIcon,
  ArrowRightIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const HERO_TITLE = "Jakarta: Nusantara Digital City";
const HERO_DESC = "Pusat kolaborasi inovasi digital, kelestarian budaya Betawi, dan transformasi kota cerdas kelas dunia.";
const HERO_IMAGE = "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop";

const PORTAL_LINKS = [
  {
    title: "Tentang Kota",
    desc: "Kenali lebih dekat profil, sejarah panjang, dan visi Jakarta menjadi Kota Global masa depan.",
    href: "/tentang-kota",
    color: "from-sky-500 to-blue-600",
    icon: BuildingOffice2Icon,
  },
  {
    title: "Kebudayaan Betawi",
    desc: "Telusuri eksotisme ondel-ondel, tradisi palang pintu, hingga musik legendaris khas Betawi.",
    href: "/budaya",
    color: "from-amber-500 to-orange-600",
    icon: SparklesIcon,
  },
  {
    title: "Kuliner Nusantara",
    desc: "Manjakan lidah dengan kerak telor, soto Betawi gurih, serta minuman pletok yang menghangatkan.",
    href: "/kuliner",
    color: "from-rose-500 to-red-600",
    icon: SparklesIcon,
  },
  {
    title: "Destinasi Wisata",
    desc: "Cari inspirasi liburan seru ke cagar sejarah Kota Tua hingga keindahan tropis Kepulauan Seribu.",
    href: "/wisata",
    color: "from-emerald-500 to-teal-600",
    icon: MapIcon,
  },
  {
    title: "Transformasi Digital",
    desc: "Eksplorasi ekosistem Jakarta Smart City, pilar kota cerdas, dan super-app inovatif JAKI.",
    href: "/digitalisasi",
    color: "from-indigo-500 to-purple-600",
    icon: CpuChipIcon,
  },
];

const METRICS_DATA = [
  { label: "JakWifi Gratis", value: "10,500+ Titik" },
  { label: "Laporan CRM Selesai", value: "98.7% Tuntas" },
  { label: "Pengguna Transportasi Harian", value: "1.3 Juta+" },
];

const FAQS = [
  {
    q: "Apa itu Nusantara Digital City?",
    a: "Sebuah inisiatif terpadu untuk mempromosikan digitalisasi identitas, pariwisata, sejarah, budaya, dan pelayanan publik kota-kota di Indonesia agar ramah aksesibilitas dan berkelanjutan bagi seluruh kalangan.",
  },
  {
    q: "Bagaimana cara warga ikut serta dalam Smart City?",
    a: "Warga dapat berpartisipasi aktif dengan memantau kota dan melaporkan fasilitas publik yang rusak lewat aplikasi JAKI, menggunakan transportasi umum terintegrasi, serta melestarikan produk budaya secara digital.",
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="flex-1 bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[550px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="hero-title">
        <img
          alt="Latar belakang visual panorama malam gedung pencakar langit Jakarta"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-6 text-center text-white z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 ring-1 ring-inset ring-sky-500/30">
            Portal Digital Resmi
          </span>
          <h1 id="hero-title" className="text-4xl font-extrabold sm:text-5xl lg:text-7xl tracking-tight leading-tight">
            {HERO_TITLE}
          </h1>
          <p className="text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
            {HERO_DESC}
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/tentang-kota"
              className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-2xl text-sm font-semibold transition-all duration-200 shadow-md shadow-sky-600/20 outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Mulai Penjelajahan
            </Link>
            <Link
              href="/digitalisasi"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-sm font-semibold transition-all duration-200 backdrop-blur-xs outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Lihat Inovasi Smart City
            </Link>
          </div>
        </div>
      </section>

      {/* Live Metrics Section */}
      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4" aria-label="Statistik Kota Cerdas">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 bg-white rounded-3xl p-8 shadow-xl border border-slate-100/80">
          {METRICS_DATA.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center sm:items-start p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{metric.label}</span>
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-800 mt-2">{metric.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Portal Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-20" aria-labelledby="grid-title">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="grid-title" className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Layanan & Eksplorasi Pintar
          </h2>
          <p className="mt-4 text-slate-600">
            Akses langsung ke seluruh pilar informasi utama pembangunan dan pelestarian identitas digital Jakarta.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTAL_LINKS.map((link, idx) => {
            const IconComp = link.icon;
            return (
              <Link
                key={idx}
                href={link.href}
                className="group bg-white rounded-3xl p-8 border border-slate-100 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-[260px] relative overflow-hidden outline-none focus:ring-2 focus:ring-sky-500"
              >
                {/* Background soft glow decoration */}
                <div className={`absolute -right-12 -top-12 size-36 bg-gradient-to-br ${link.color} opacity-5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500`} />
                
                <div className="space-y-4">
                  <div className={`size-12 rounded-2xl bg-gradient-to-br ${link.color} text-white flex items-center justify-center shadow-md`}>
                    <IconComp className="size-6 shrink-0" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 tracking-tight">{link.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3">{link.desc}</p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800 group-hover:text-sky-600 transition-colors duration-200">
                  Eksplorasi Halaman
                  <ArrowRightIcon className="size-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <section className="bg-slate-100/60 border-y border-slate-200/50 py-20" aria-labelledby="faq-title">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 id="faq-title" className="text-3xl font-bold tracking-tight text-slate-800">
              Pertanyaan Umum (FAQ)
            </h2>
            <p className="mt-3 text-slate-600">
              Ketahui segala informasi esensial seputar ekosistem Nusantara Digital City.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-xs overflow-hidden transition-all duration-250"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left outline-none focus:bg-slate-50 cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                      <CheckBadgeIcon className="size-5 text-sky-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDownIcon className={`size-5 text-slate-400 shrink-0 transition-transform duration-250 ${isOpen ? "rotate-180 text-sky-600" : ""}`} />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-[300px] border-t border-slate-100" : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
