"use client";

import { useState } from "react";
import {
  BuildingOfficeIcon,
  MapIcon,
  ClockIcon,
  CpuChipIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

const CITY_NAME = "DKI Jakarta";
const CITY_SUBTITLE = "Pusat Kolaborasi, Inovasi, dan Budaya Nusantara";
const HERO_IMAGE = "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop";

const STATS_DATA = [
  { label: "Estimasi Populasi", value: "10.6 Juta+" },
  { label: "Transportasi Terintegrasi", value: "4 Sistem Utama" },
  { label: "Wilayah Administratif", value: "5 Kota & 1 Kabupaten" },
];

const ADVANTAGES_DATA = [
  {
    title: "Aksesibilitas Terbaik",
    description: "Sistem transportasi publik terintegrasi penuh seperti MRT, LRT, TransJakarta, dan Commuter Line memudahkan mobilitas warga dan turis.",
  },
  {
    title: "Kota Pintar & Digital",
    description: "Segala urusan birokrasi, laporan fasilitas umum, hingga pantauan banjir terintegrasi secara cerdas lewat platform super-app JAKI.",
  },
  {
    title: "Pusat Ekonomi & Kreatif",
    description: "Jakarta menawarkan peluang tanpa batas dengan dukungan infrastruktur bisnis dan fasilitas publik ramah komunitas digital.",
  },
];

const SECTIONS_DATA = [
  {
    id: "overview",
    title: "Selayang Pandang",
    icon: BuildingOfficeIcon,
    image: "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Gedung-gedung pencakar langit di sepanjang jalan Sudirman-Thamrin, Jakarta",
    heading: "Menuju Gerbang Kota Global",
    content: "Jakarta kini bertransformasi menjadi Kota Global yang inklusif, tangguh, dan berkelanjutan. Meskipun mengalami transisi administratif, Jakarta tetap menjadi episentrum ekonomi nasional, pusat diplomasi regional, serta magnet kreativitas dan inovasi yang tak pernah padam.",
  },
  {
    id: "history",
    title: "Sejarah Singkat",
    icon: ClockIcon,
    image: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    imageAlt: "Kawasan Kota Tua Jakarta yang bersejarah dengan arsitektur kolonial",
    heading: "Rentang Waktu Peradaban",
    content: "Bermula dari pelabuhan Sunda Kelapa yang ramai pada abad ke-14, wilayah ini berkembang menjadi Jayakarta, Batavia, hingga akhirnya ditetapkan sebagai ibu kota negara dengan nama Jakarta. Setiap era meninggalkan jejak sejarah yang kini mewarnai budaya dan arsitektur kota.",
  },
  {
    id: "geography",
    title: "Geografi & Administratif",
    icon: MapIcon,
    image: "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Kepulauan Seribu dengan keindahan alam laut tropis",
    heading: "Bentang Alam dari Darat hingga Laut",
    content: "Dengan luas daratan sekitar 661,5 km², DKI Jakarta terbagi menjadi 5 Kota Administrasi (Pusat, Utara, Barat, Selatan, Timur) serta 1 Kabupaten Administrasi, yaitu Kepulauan Seribu yang menyuguhkan keindahan wisata bahari eksotis.",
  },
  {
    id: "smartcity",
    title: "Visi Smart City",
    icon: CpuChipIcon,
    image: "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Layar monitor pusat komando kendali data Jakarta Smart City",
    heading: "Efisiensi Melalui Teknologi Cerdas",
    content: "Melalui inisiatif Jakarta Smart City (JSC), pemerintah menghadirkan solusi digital berbasis data untuk mengatasi tantangan perkotaan. Integrasi IoT, sensor lalu lintas, serta pelaporan warga secara real-time mewujudkan tata kelola kota yang responsif dan transparan.",
  },
];

export default function TentangKotaPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const activeSection = SECTIONS_DATA.find((s) => s.id === activeTab) || SECTIONS_DATA[0];

  return (
    <main className="flex-1 bg-slate-50">
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="hero-title">
        <img
          alt={`Latar belakang pemandangan kota ${CITY_NAME}`}
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-sky-500/20 text-sky-300 ring-1 ring-inset ring-sky-500/30 mb-4">
            Mengenal Ibu Kota
          </span>
          <h1 id="hero-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
            {CITY_NAME}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-200 font-light max-w-2xl mx-auto">
            {CITY_SUBTITLE}
          </p>
        </div>
      </section>

      <section className="relative z-20 -mt-16 max-w-6xl mx-auto px-4" aria-label="Statistik Kota">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className="text-center sm:text-left sm:px-6 sm:first:pl-0 sm:last:pr-0 sm:border-r sm:last:border-r-0 border-slate-100 py-4 sm:py-2">
              <dt className="text-sm font-medium text-slate-500">{stat.label}</dt>
              <dd className="mt-2 text-3xl font-bold tracking-tight text-slate-800">{stat.value}</dd>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="interactive-section-title">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 id="interactive-section-title" className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">
            Eksplorasi Profil Kota
          </h2>
          <p className="mt-3 text-slate-600">
            Pilih kategori untuk melihat informasi mendalam mengenai perkembangan dan sejarah kota kami.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <nav className="w-full lg:w-1/4 flex flex-col gap-2 bg-white p-3 rounded-2xl shadow-sm border border-slate-100" aria-label="Menu Profil Kota">
            {SECTIONS_DATA.map((section) => {
              const IconComponent = section.icon;
              const isSelected = activeTab === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveTab(section.id)}
                  aria-selected={isSelected}
                  role="tab"
                  className={`w-full flex items-center gap-3.5 px-4 py-3.5 text-left rounded-xl text-sm font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 ${
                    isSelected
                      ? "bg-sky-600 text-white shadow-md shadow-sky-600/20"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <IconComponent className={`size-5 shrink-0 ${isSelected ? "text-white" : "text-slate-400"}`} />
                  {section.title}
                </button>
              );
            })}
          </nav>

          <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100 min-h-[400px] flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">
                {activeSection.heading}
              </h3>
              <p className="text-slate-600 leading-relaxed text-base">
                {activeSection.content}
              </p>
            </div>
            <div className="w-full md:w-1/2 shrink-0">
              <img
                src={activeSection.image}
                alt={activeSection.imageAlt}
                className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100/60 border-y border-slate-200/50 py-16" aria-labelledby="advantages-title">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 id="advantages-title" className="text-3xl font-bold tracking-tight text-slate-800">
              Mengapa Mengunjungi Jakarta?
            </h2>
            <p className="mt-3 text-slate-600">
              Jakarta memadukan kemudahan modernitas digital dengan pesona budaya tradisional yang hangat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {ADVANTAGES_DATA.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-150 flex gap-4">
                <div className="shrink-0 flex items-center justify-center size-10 rounded-full bg-sky-50 text-sky-600">
                  <CheckIcon className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{advantage.title}</h3>
                  <p className="mt-2 text-slate-600 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
