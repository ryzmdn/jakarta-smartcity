"use client";

import { useState } from "react";
import {
  CpuChipIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

const DIGITAL_TITLE = "Transformasi Digital & Smart City";
const DIGITAL_SUBTITLE = "Mewujudkan Jakarta sebagai kota pintar, kolaboratif, dan terintegrasi secara penuh";
const HERO_IMAGE = "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?q=80&w=1200&auto=format&fit=crop";

const SMART_PILLARS = [
  {
    id: "governance",
    title: "Smart Governance",
    icon: ShieldCheckIcon,
    project: "Command Center & Open Data",
    description: "Sistem pemerintahan transparan berbasis data real-time untuk pengambilan keputusan cepat, serta platform Jakarta Open Data bagi publik.",
  },
  {
    id: "mobility",
    title: "Smart Mobility",
    icon: ArrowPathIcon,
    project: "JakLingko & Intelligent Traffic System",
    description: "Integrasi tarif dan rute transportasi umum massal (MRT, LRT, TJ) serta optimasi lampu lalu lintas adaptif berbasis sensor pintar.",
  },
  {
    id: "people",
    title: "Smart People",
    icon: UserGroupIcon,
    project: "Jakpreneur & Literasi Digital",
    description: "Pemberdayaan pelaku UMKM lokal secara digital, pelatihan coding, serta penyediaan ribuan titik Wi-Fi gratis (JakWifi) di pemukiman.",
  },
  {
    id: "environment",
    title: "Smart Environment",
    icon: GlobeAltIcon,
    project: "Sensor Banjir & Kualitas Udara",
    description: "Pemasangan ratusan sensor IoT pengukur tinggi muka air kali untuk deteksi banjir dini, serta stasiun pemantau indeks kualitas udara (AQMS).",
  },
];

const JAKI_FEATURES = [
  { name: "Laporan Warga (JakLapor)", desc: "Laporkan permasalahan fasilitas umum seperti jalan rusak atau sampah menumpuk langsung ke dinas terkait secara anonim." },
  { name: "Transportasi Publik (JakLingko)", desc: "Cek rute, tarif terintegrasi, hingga jadwal real-time TransJakarta, MRT, dan LRT dalam satu genggaman." },
  { name: "Layanan Kesehatan (JakSehat)", desc: "Daftar antrean faskes online, cek stok darah PMI, hingga konsultasi kesehatan mental tanpa antre." },
];

export default function DigitalisasiPage() {
  const [activePillar, setActivePillar] = useState("governance");
  const selectedPillar = SMART_PILLARS.find((p) => p.id === activePillar) || SMART_PILLARS[0];

  return (
    <main className="flex-1 bg-slate-50">
      {/* Hero Header */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="page-title">
        <img
          alt="Latar belakang visualisasi data besar Jakarta Smart City"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-300 ring-1 ring-inset ring-indigo-500/30 mb-4">
            Ekosistem Cerdas
          </span>
          <h1 id="page-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
            {DIGITAL_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            {DIGITAL_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Pillars Explorer Section */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="pillars-title">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 id="pillars-title" className="text-3xl font-bold tracking-tight text-slate-800">
            Pilar Jakarta Smart City
          </h2>
          <p className="mt-3 text-slate-600 text-sm">
            Klik pilar pilar utama di bawah ini untuk melihat contoh implementasi teknologi digital cerdas di Jakarta.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Pillar Selector Buttons */}
          <div className="w-full lg:w-1/3 flex flex-col gap-3" role="tablist">
            {SMART_PILLARS.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  aria-selected={activePillar === pillar.id}
                  role="tab"
                  className={`w-full flex items-start gap-4 p-5 text-left rounded-2xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer ${
                    activePillar === pillar.id
                      ? "bg-white border-indigo-500 shadow-md text-indigo-700 font-bold"
                      : "bg-white/80 border-slate-200 text-slate-600 font-medium hover:bg-white"
                  }`}
                >
                  <PillarIcon className={`size-6 shrink-0 mt-0.5 ${activePillar === pillar.id ? "text-indigo-600" : "text-slate-400"}`} />
                  <div>
                    <span className="block text-sm font-semibold text-slate-800">{pillar.title}</span>
                    <span className="block text-xs font-normal text-slate-400 mt-1">{pillar.project}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Pillar Active Content Screen */}
          <div className="flex-1 w-full bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200">
                Pilar Terpilih
              </span>
              <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{selectedPillar.title}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{selectedPillar.description}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-4">
              <div className="size-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                <CpuChipIcon className="size-5" />
              </div>
              <div>
                <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Inovasi Utama</span>
                <span className="block text-sm font-bold text-slate-700 mt-0.5">{selectedPillar.project}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Promo Showcase Section */}
      <section className="bg-slate-100/60 border-y border-slate-200/50 py-16" aria-labelledby="showcase-title">
        <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Mockup Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-[280px] aspect-[9/19] bg-slate-900 rounded-[40px] p-3 shadow-2xl border-4 border-slate-800 relative">
              {/* Speaker & camera bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20 flex justify-center items-center">
                <span className="size-2 rounded-full bg-slate-900 mr-2" />
                <span className="w-10 h-1 rounded-full bg-slate-900" />
              </div>
              {/* Internal Screen mockup */}
              <div className="w-full h-full bg-slate-950 rounded-[32px] overflow-hidden p-4 flex flex-col justify-between relative text-white font-sans">
                <div className="space-y-4 pt-4">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span>JAKI App</span>
                    <span>10:30 AM</span>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-indigo-400 font-bold uppercase tracking-wider">Aplikasi Warga</span>
                    <h4 className="text-base font-extrabold text-slate-100">Jakarta Kini</h4>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white/10 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs">
                      <span>📢 JakLapor (Lapor Ban)</span>
                      <span className="text-[10px] bg-indigo-500 text-white px-2 py-0.5 rounded-full">Kirim</span>
                    </div>
                    <div className="bg-white/10 rounded-xl p-3 border border-white/5 flex items-center justify-between text-xs">
                      <span>🚌 Rute TransJakarta</span>
                      <span className="text-[10px] text-slate-400">Lihat</span>
                    </div>
                  </div>
                </div>
                {/* download buttons inside mock */}
                <div className="space-y-1.5 pb-2">
                  <span className="block text-[8px] text-slate-400 text-center uppercase font-bold tracking-widest">Tersedia Gratis</span>
                  <div className="flex gap-1.5 justify-center">
                    <div className="bg-white/15 rounded-lg px-2 py-1 text-[8px] font-semibold border border-white/10 text-center flex-1 cursor-pointer">Play Store</div>
                    <div className="bg-white/15 rounded-lg px-2 py-1 text-[8px] font-semibold border border-white/10 text-center flex-1 cursor-pointer">App Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Informative Text */}
          <div className="flex-1 space-y-6">
            <h2 id="showcase-title" className="text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
              Super-App JAKI (Jakarta Kini)
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              JAKI mengintegrasikan ratusan layanan publik DKI Jakarta ke dalam satu genggaman tangan warga. Mulai dari pelaporan gangguan fasilitas kota, tracking transportasi publik, hingga informasi jaminan kesehatan.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {JAKI_FEATURES.map((feat, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-200/50 shadow-xs">
                  <h4 className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <SparklesIcon className="size-4 text-indigo-500 shrink-0" />
                    {feat.name}
                  </h4>
                  <p className="mt-2 text-slate-500 text-xs leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
