"use client";

import { useState } from "react";
import {
  CircleStackIcon,
  CloudIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  UserGroupIcon,
  DocumentTextIcon,
  IdentificationIcon,
  AcademicCapIcon,
  HeartIcon,
  CurrencyDollarIcon,
  PresentationChartLineIcon,
  ChevronRightIcon,
  MapIcon,
} from "@heroicons/react/24/outline";

const HERO_DATA = {
  title: "Akselerasi Pertumbuhan Digitalisasi Jakarta",
  subtitle: "Lihat peran data dalam transformasi digital menuju Smart City",
  bgImage: "https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?q=80&w=1600&auto=format&fit=crop",
};

const INTRO_DATA = {
  badge: "Kebijakan Berbasis Data",
  title: "Data berperan penting dalam pembuatan kebijakan publik",
  description: "Kebijakan publik yang dibuat dengan mempertimbangkan angka statistik, tren, dan fakta akan lebih tepat sasaran dan tepat guna. Dengan data terintegrasi, setiap keputusan pembangunan kota Jakarta dapat dirumuskan secara ilmiah, transparan, dan akuntabel.",
  stats: [
    { label: "Akurasi Distribusi Bantuan", value: "98.4%" },
    { label: "Waktu Respon Laporan Warga", value: "< 4 Jam" },
    { label: "Sektor Layanan Terintegrasi", value: "12 Sektor" },
  ]
};

const DATA_ECOSYSTEM = {
  title: "Ekosistem Data Pemerintah Provinsi DKI Jakarta",
  subtitle: "Aliran integrasi data internal dan eksternal demi mewujudkan pelayanan publik digital yang responsif.",
  internalSources: [
    { label: "PKB (Pajak Kendaraan)" },
    { label: "KJP (Kartu Jakarta Pintar)" },
    { label: "Bansos (Bantuan Sosial)" },
    { label: "Retribusi Daerah" },
    { label: "NIK & KK (Kependudukan)" },
    { label: "Pajak & Retribusi" },
    { label: "BPJS Kesehatan" },
    { label: "PKBMU" },
  ],
  externalSources: [
    { label: "Laporan Warga (JAKI)" },
    { label: "Sensor Cuaca (BMKG)" },
    { label: "Kualitas Udara (AQMS)" },
    { label: "Aspirasi Sosial Media" },
    { label: "Data Kemitraan Publik" },
  ],
  services: [
    { name: "Kesehatan", icon: HeartIcon, bg: "bg-emerald-50 text-emerald-600 border-emerald-100" },
    { name: "Pendidikan", icon: AcademicCapIcon, bg: "bg-blue-50 text-blue-600 border-blue-100" },
    { name: "Bantuan Sosial", icon: UserGroupIcon, bg: "bg-rose-50 text-rose-600 border-rose-100" },
    { name: "Pajak & Retribusi", icon: CurrencyDollarIcon, bg: "bg-amber-50 text-amber-600 border-amber-100" },
    { name: "Kependudukan", icon: IdentificationIcon, bg: "bg-purple-50 text-purple-600 border-purple-100" },
    { name: "Perekonomian", icon: PresentationChartLineIcon, bg: "bg-cyan-50 text-cyan-600 border-cyan-100" },
  ],
  outputs: [
    { name: "Fitur JAKI (Aplikasi Mobile)", desc: "Layanan masyarakat terpadu dalam satu genggaman tangan." },
    { name: "Aplikasi & Layanan OPD", desc: "Integrasi sistem administrasi antar instansi perangkat daerah." },
    { name: "Dashboard Interaktif", desc: "Visualisasi data real-time untuk pemantauan kondisi perkotaan." },
    { name: "Data Analytics (Driven Policy)", desc: "Analisis statistik untuk perumusan kebijakan strategis kota." },
  ]
};

const MDM_DATA = {
  title: "Kenal Lebih Dekat dengan Master Data Management (MDM)",
  subtitle: "Tantangan Manajemen Data di JSC",
  challenges: [
    {
      title: "Integrasi Data",
      icon: ArrowPathIcon,
      points: [
        "Data internal dan eksternal yang dimiliki JSC datang dari berbagai perangkat daerah.",
        "Tipe-tipe data berbeda dan tidak terintegrasi satu sama lain secara langsung.",
        "Tantangan sinkronisasi format basis data yang terpisah."
      ]
    },
    {
      title: "Kualitas Data",
      icon: ShieldCheckIcon,
      points: [
        "Sumber data yang terintegrasi memiliki karakteristik berbeda-beda dalam kelengkapan data.",
        "Struktur data tidak terstandarisasi antar sektor instansi pemerintah.",
        "Diperlukan pembersihan data duplikat secara real-time."
      ]
    }
  ],
  definition: "Master Data Management (MDM) adalah cara untuk mengelola data penting dari berbagai sumber, seperti data demografi, bantuan sosial, dan lainnya agar terintegrasi dan berkualitas baik.",
  benefit: "Dalam ekosistem data DKI Jakarta, MDM memastikan data tersebut digunakan pemerintah untuk mengambil keputusan yang tepat agar kualitas hidup warga menjadi lebih baik."
};

const MDM_INNOVATIONS = [
  {
    id: "profil-warga",
    label: "Dasbor Profil Warga",
    title: "Dasbor Profil Warga Terintegrasi",
    subtitle: "Konsolidasi data demografi, kependudukan, dan bantuan kesejahteraan.",
    description: "Dasbor ini merangkum data kependudukan secara dinamis untuk membantu analisis kepadatan penduduk, rasio usia produktif, hingga pemetaan kebutuhan sarana umum per kecamatan.",
    metrics: [
      { name: "Total Warga Terdata", value: "10,990,780" },
      { name: "Akurasi NIK", value: "99.94%" },
      { name: "Kepala Keluarga", value: "3,588,104" }
    ]
  },
  {
    id: "bansos",
    label: "Dasbor Bantuan Sosial",
    title: "Dasbor Monitoring Bantuan Sosial",
    subtitle: "Pengawasan penyaluran KJP Plus, KJMU, bansos pangan, dan bantuan tunai.",
    description: "Sistem pelacakan penerima bantuan untuk memastikan ketepatan alokasi dana, meminimalisir tumpang tindih anggaran, serta mempercepat proses audit keuangan daerah.",
    metrics: [
      { name: "Penerima Manfaat", value: "7,402,677" },
      { name: "Dana Tersalurkan", value: "98.7%" },
      { name: "Tingkat Akurasi", value: "99.81%" }
    ]
  },
  {
    id: "digital-id",
    label: "Digital ID",
    title: "Jakarta Digital Identity System",
    subtitle: "Verifikasi identitas digital mandiri warga DKI Jakarta.",
    description: "Infrastruktur e-KYC terpadu yang terhubung dengan database pusat kependudukan untuk akses instan ke seluruh sistem administrasi kota dan aplikasi JAKI.",
    metrics: [
      { name: "Pengguna Aktif", value: "4,500,000+" },
      { name: "Waktu Proses KYC", value: "< 1 Menit" },
      { name: "Layanan Terkoneksi", value: "62 Aplikasi" }
    ]
  },
  {
    id: "publikasi",
    label: "Publikasi Ilmiah",
    title: "Katalog Kajian & Publikasi Ilmiah",
    subtitle: "Kompilasi hasil riset sains data dan kajian kebijakan smart city.",
    description: "Portal terbuka bagi publik, akademisi, dan praktisi perkotaan untuk mengakses hasil studi ilmiah berbasis data yang diproduksi secara langsung oleh analis data JSC.",
    metrics: [
      { name: "Jurnal Terbit", value: "48 Paper" },
      { name: "Dataset Terbuka", value: "1,450+" },
      { name: "Kolaborasi Riset", value: "18 Institusi" }
    ]
  }
];

export default function DigitalisasiPage() {
  const [activeTab, setActiveTab] = useState("profil-warga");
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const selectedProduct = MDM_INNOVATIONS.find((tab) => tab.id === activeTab) || MDM_INNOVATIONS[0];

  return (
    <main className="flex-1 bg-white">
      <section className="w-screen relative left-1/2 -translate-x-1/2 h-150 flex items-center justify-center overflow-hidden bg-slate-950">
        <img
          alt="Latar belakang visualisasi gedung pencakar langit Jakarta di malam hari"
          src={HERO_DATA.bgImage}
          className="absolute inset-0 w-full h-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10 space-y-6">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight leading-tight max-w-3xl mx-auto drop-shadow-md">
            {HERO_DATA.title}
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            {HERO_DATA.subtitle}
          </p>
          <div className="pt-8 flex justify-center">
            <a
              href="#intro"
              aria-label="Gulir ke bawah untuk melihat isi halaman"
              className="flex items-center justify-center size-12 rounded-full border border-white/20 bg-white/5 backdrop-blur-xs text-white hover:bg-white/20 transition-all duration-300 hover:translate-y-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 animate-bounce"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section id="intro" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24" aria-labelledby="intro-title">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md p-6 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-500" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] text-slate-400 font-semibold uppercase tracking-widest">JSC Data Feed Live</span>
                </div>
                <span className="text-[10px] text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-md border border-blue-400/20 font-mono">
                  ACTIVE
                </span>
              </div>

              <div className="space-y-5">
                <div className="h-32 bg-slate-950/80 rounded-2xl p-4 border border-slate-800/80 flex flex-col justify-between">
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>Mobilitas Penumpang Harian</span>
                    <span className="text-emerald-400 font-bold font-mono">+12.4%</span>
                  </div>
                  <div className="flex items-end gap-1.5 h-16 pt-2">
                    {[35, 55, 42, 68, 50, 75, 90, 60, 85, 95, 78, 100].map((h, i) => (
                      <div
                        key={i}
                        style={{ height: `${h}%` }}
                        className="flex-1 bg-linear-to-t from-blue-600 to-sky-400 rounded-xs opacity-80 hover:opacity-100 transition-all duration-300"
                        title={`Jam ${i + 7}:00`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <span className="block text-[10px] text-slate-500 font-medium">INDEX KUALITAS UDARA</span>
                    <span className="block text-xl font-extrabold text-teal-400 mt-1 font-mono">54 AQI</span>
                    <span className="block text-[9px] text-emerald-400 mt-0.5">Sedang (Sehat)</span>
                  </div>
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                    <span className="block text-[10px] text-slate-500 font-medium">SIAGA BANJIR IoT</span>
                    <span className="block text-xl font-extrabold text-blue-400 mt-1 font-mono">152 cm</span>
                    <span className="block text-[9px] text-blue-400 mt-0.5">Pintu Air Manggarai</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-slate-950/40 p-3.5 rounded-xl border border-slate-800/50">
                  <CpuChipIcon className="size-6 text-blue-400 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between text-[10px] text-slate-500 mb-1">
                      <span>Proses Big Data</span>
                      <span>96% Load</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-850 rounded-full overflow-hidden">
                      <div className="w-[96%] h-full bg-blue-500 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
              {INTRO_DATA.badge}
            </span>
            <h2 id="intro-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {INTRO_DATA.title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {INTRO_DATA.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {INTRO_DATA.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="block text-3xl font-extrabold text-blue-600 tracking-tight font-mono">{stat.value}</span>
                  <span className="block text-xs font-medium text-slate-500 leading-normal">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-linear-to-b from-sky-400 to-blue-600 text-white py-24 overflow-hidden">
        <div className="absolute top-10 left-10 size-48 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-full">
            <path d="M20,60 C20,40 40,30 60,40 C75,30 95,50 90,65 C95,80 75,90 60,85 C40,90 20,80 20,60 Z" />
          </svg>
        </div>
        <div className="absolute bottom-10 right-10 size-64 opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-full">
            <path d="M10,60 C10,35 35,20 60,30 C80,20 100,45 95,65 C100,85 80,95 60,90 C35,95 10,85 10,60 Z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {DATA_ECOSYSTEM.title}
            </h2>
            <p className="text-blue-50 text-sm sm:text-base font-light leading-relaxed">
              {DATA_ECOSYSTEM.subtitle}
            </p>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  hoveredNode === "internal"
                    ? "bg-white/20 border-white shadow-lg scale-[1.01]"
                    : "bg-white/10 border-white/20"
                }`}
                onMouseEnter={() => setHoveredNode("internal")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <CircleStackIcon className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Data Internal</h3>
                    <span className="block text-[10px] text-blue-100">Biro/Dinas/OPD Pemprov DKI</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {DATA_ECOSYSTEM.internalSources.map((item, idx) => (
                    <div key={idx} className="bg-white/5 hover:bg-white/15 px-2.5 py-1.5 rounded-lg border border-white/10 text-center text-xs font-medium transition-colors cursor-default">
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={`p-6 rounded-2xl border transition-all duration-300 ${
                  hoveredNode === "external"
                    ? "bg-white/20 border-white shadow-lg scale-[1.01]"
                    : "bg-white/10 border-white/20"
                }`}
                onMouseEnter={() => setHoveredNode("external")}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="size-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <CloudIcon className="size-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">Data Eksternal</h3>
                    <span className="block text-[10px] text-blue-100">Masyarakat & Sensor Kota</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {DATA_ECOSYSTEM.externalSources.map((item, idx) => (
                    <div key={idx} className="bg-white/5 hover:bg-white/15 px-2.5 py-1.5 rounded-lg border border-white/10 text-center text-xs font-medium transition-colors cursor-default">
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-4">
              <div className="w-0.5 h-8 bg-linear-to-b from-white/30 to-white/90" />
              <div className="relative size-24 rounded-full bg-white text-blue-600 flex flex-col items-center justify-center shadow-xl border-4 border-sky-300/40 z-20 group">
                <div className="absolute inset-0 rounded-full bg-white animate-ping opacity-25 group-hover:opacity-40 transition-opacity" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500">Koleksi</span>
                <span className="font-black text-xs text-blue-900 mt-0.5 text-center px-1">Sumber Data</span>
              </div>
              <div className="w-0.5 h-10 bg-linear-to-b from-white to-white/80" />
            </div>

            <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-xl border border-blue-200/50 max-w-3xl mx-auto">
              <div className="text-center mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100">
                  Dinas Komunikasi, Informatika dan Statistik DKI Jakarta
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">Sistem Pemrosesan Data</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center space-y-2">
                  <div className="size-9 mx-auto rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                    <CpuChipIcon className="size-5" />
                  </div>
                  <span className="block font-bold text-xs text-slate-800">Master Data Management</span>
                </div>

                <div className="flex flex-col items-center justify-center">
                  <div className="flex items-center gap-2 text-blue-500">
                    <svg className="size-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Load & Clean</span>
                </div>

                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/60 text-center space-y-2">
                  <div className="size-9 mx-auto rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                    <CircleStackIcon className="size-5" />
                  </div>
                  <span className="block font-bold text-xs text-slate-800">Data Warehouse</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center py-4">
              <div className="w-0.5 h-10 bg-linear-to-b from-white/90 to-white/40" />
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <span className="block text-xs font-bold uppercase tracking-widest text-blue-100">Integrasi Layanan</span>
                <h3 className="text-xl font-bold mt-1">Data Services</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                {DATA_ECOSYSTEM.services.map((srv, idx) => {
                  const SrvIcon = srv.icon;
                  return (
                    <div key={idx} className={`p-4 rounded-xl border text-center flex flex-col items-center gap-2.5 transition-all duration-300 hover:scale-[1.03] ${srv.bg}`}>
                      <div className="size-8 rounded-full bg-white shadow-xs flex items-center justify-center">
                        <SrvIcon className="size-4 shrink-0" />
                      </div>
                      <span className="text-xs font-bold block">{srv.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center py-4">
              <div className="w-0.5 h-8 bg-white/40" />
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <span className="block text-xs font-bold uppercase tracking-widest text-blue-100">Pemanfaatan Oleh</span>
                <h3 className="text-xl font-bold mt-1">OPD (Organisasi Perangkat Daerah)</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {DATA_ECOSYSTEM.outputs.map((out, idx) => (
                  <div key={idx} className="bg-white/10 hover:bg-white/15 p-5 rounded-2xl border border-white/20 space-y-2 transition-all duration-200">
                    <span className="block font-bold text-sm">{out.name}</span>
                    <p className="text-[11px] text-blue-100 leading-relaxed font-light">{out.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col items-center py-4">
              <div className="w-0.5 h-10 bg-linear-to-b from-white/40 to-white" />
            </div>

            <div className="flex justify-center">
              <div className="bg-white text-blue-700 font-extrabold text-sm sm:text-base px-8 py-4 rounded-full shadow-2xl border-2 border-white/80 hover:bg-blue-50 transition-colors uppercase tracking-widest flex items-center gap-2 cursor-default select-none animate-pulse">
                <GlobeAltIcon className="size-5 shrink-0" />
                Layanan Digital Terintegrasi
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen relative left-1/2 -translate-x-1/2 bg-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Kolaborasi Data</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {MDM_DATA.title}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              {MDM_DATA.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {MDM_DATA.challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div key={idx} className="bg-slate-950/80 p-8 rounded-3xl border border-slate-800 shadow-xl space-y-6 flex flex-col justify-between hover:border-blue-500/40 transition-colors duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-100">{challenge.title}</h3>
                    </div>
                    <ul className="space-y-3 pt-2">
                      {challenge.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                          <span className="size-1.5 rounded-full bg-blue-400 shrink-0 mt-1.5" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto mt-20 pt-10 border-t border-slate-800 text-center space-y-12">
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              {MDM_DATA.definition}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 py-6">
              <div className="bg-slate-950/90 px-5 py-3.5 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2">
                <CircleStackIcon className="size-4 text-slate-400" />
                Sumber Data
              </div>

              <div className="text-blue-500">
                <svg className="size-5 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="relative bg-linear-to-r from-blue-600 to-indigo-600 px-6 py-4 rounded-full shadow-lg text-xs font-extrabold text-white tracking-wider uppercase border-2 border-white/10 z-10 flex items-center gap-2 group cursor-default">
                <div className="absolute inset-0 rounded-full bg-blue-500 animate-pulse opacity-40 -z-10" />
                <CpuChipIcon className="size-4" />
                Master Data Management (MDM)
              </div>

              <div className="text-blue-500">
                <svg className="size-5 rotate-90 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

              <div className="bg-slate-950/90 px-5 py-3.5 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-300 flex items-center gap-2">
                <ShieldCheckIcon className="size-4 text-emerald-400" />
                Data Berkualitas & Terintegrasi
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
              {MDM_DATA.benefit}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24" aria-labelledby="products-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600 border border-blue-100">
              Hasil Implementasi
            </span>
            <h2 id="products-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Produk-produk Inovasi MDM
            </h2>
            <p className="text-slate-600 text-sm sm:text-base font-light">
              Manajemen data dengan MDM melahirkan beragam produk inovatif untuk warga.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-4 flex flex-col gap-2" role="tablist">
              {MDM_INNOVATIONS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  aria-selected={activeTab === tab.id}
                  role="tab"
                  className={`w-full flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 focus:outline-hidden cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white border-blue-500 shadow-md text-blue-700 font-bold"
                      : "bg-white/80 border-slate-200/60 text-slate-600 hover:bg-white"
                  }`}
                >
                  <span className="text-sm font-semibold">{tab.label}</span>
                  <ChevronRightIcon className={`size-4 shrink-0 transition-transform duration-300 ${activeTab === tab.id ? "text-blue-600 translate-x-1" : "text-slate-400"}`} />
                </button>
              ))}
            </div>

            <div className="lg:col-span-8 bg-white rounded-3xl p-8 shadow-xs border border-slate-100 flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{selectedProduct.subtitle}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{selectedProduct.title}</h3>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm font-light">
                  {selectedProduct.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                  {selectedProduct.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 flex flex-col justify-center">
                      <span className="block text-[10px] text-slate-400 font-semibold uppercase tracking-wider">{metric.name}</span>
                      <span className="block text-xl font-black text-slate-800 mt-1 font-mono">{metric.value}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 text-white space-y-4 shadow-inner">
                  <div className="flex justify-between items-center text-[10px] text-slate-400 border-b border-slate-800 pb-3 font-mono">
                    <span className="flex items-center gap-1.5">
                      <span className="size-2 rounded-full bg-emerald-500 animate-ping" />
                      LIVE DATA PREVIEW
                    </span>
                    <span>UPDATED: SECONDS AGO</span>
                  </div>

                  {activeTab === "profil-warga" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center h-44">
                      <div className="relative aspect-4/3 w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800 flex items-center justify-center">
                        <MapIcon className="size-16 text-blue-500/40 animate-pulse" />
                        <span className="absolute bottom-2 left-2 text-[8px] text-slate-500 font-mono">MAP: MUNICIPALITIES LAYOUT</span>
                        <div className="absolute top-4 right-4 text-[9px] bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30">6 Wilayah</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-[10px] text-slate-400 font-mono">SEBARAN POPULASI WILAYAH</div>
                        {[
                          { name: "JakTim", p: "28%" },
                          { name: "JakBar", p: "24%" },
                          { name: "JakSel", p: "21%" },
                          { name: "JakUt", p: "16%" },
                          { name: "JakPus", p: "10%" },
                        ].map((d, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between text-[9px] text-slate-400 font-mono">
                              <span>{d.name}</span>
                              <span>{d.p}</span>
                            </div>
                            <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                              <div style={{ width: d.p }} className="h-full bg-blue-500 rounded-full" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === "bansos" && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center h-44">
                      <div className="space-y-2">
                        <div className="text-[10px] text-slate-400 font-mono">PROGRAM UTAMA</div>
                        <div className="space-y-1.5">
                          {[
                            { name: "KJP Plus", val: "Rp 680 M", pct: "98.7%" },
                            { name: "KJMU", val: "Rp 120 M", pct: "99.1%" },
                            { name: "Bansos Sembako", val: "Rp 400 M", pct: "98.2%" },
                          ].map((b, i) => (
                            <div key={i} className="bg-slate-950/40 p-2 rounded-lg border border-slate-800/80 flex items-center justify-between text-[10px]">
                              <span className="font-semibold">{b.name}</span>
                              <div className="text-right">
                                <span className="block font-bold text-slate-300 font-mono">{b.val}</span>
                                <span className="block text-[8px] text-emerald-400 font-mono">Selesai: {b.pct}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="aspect-video w-full bg-slate-950/60 rounded-xl p-3 border border-slate-800 flex flex-col justify-between">
                        <div className="text-[9px] text-slate-500 font-mono uppercase">Kecepatan Penyaluran Per Bulan</div>
                        <div className="h-16 flex items-end gap-2 border-b border-slate-800 pb-1">
                          {[30, 45, 60, 50, 75, 90, 85, 95].map((h, i) => (
                            <div key={i} className="flex-1 flex flex-col justify-end h-full">
                              <div style={{ height: `${h}%` }} className="bg-emerald-500/80 rounded-t-xs" />
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between text-[8px] text-slate-600 font-mono">
                          <span>Jan</span>
                          <span>Mar</span>
                          <span>Mei</span>
                          <span>Jul</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "digital-id" && (
                    <div className="flex justify-center items-center h-44">
                      <div className="w-64 bg-slate-950 rounded-xl border border-slate-800 p-3 flex gap-3 shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
                        <div className="size-16 rounded-lg bg-slate-800/60 flex items-center justify-center text-blue-400 shrink-0 border border-slate-800">
                          <svg className="size-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div>
                            <span className="block text-[8px] text-blue-400 uppercase tracking-widest font-mono">Dinas Kependudukan</span>
                            <span className="block text-[10px] font-bold text-slate-200">KTP DIGITAL JAKARTA</span>
                          </div>
                          <div className="space-y-0.5 text-[8px] text-slate-400 font-mono">
                            <div>Nama: RIZKY RAMADHAN</div>
                            <div>NIK: 3174XXXXXXXXXXXX</div>
                            <div>Provinsi: DKI JAKARTA</div>
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-slate-900">
                            <span className="text-[7px] text-emerald-400 bg-emerald-500/10 px-1 py-0.2 rounded border border-emerald-500/20 uppercase font-mono">Aktif</span>
                            <span className="text-[7px] text-slate-500 font-mono">SCAN QR CODE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "publikasi" && (
                    <div className="flex flex-col justify-center h-44 space-y-2">
                      <span className="text-[10px] text-slate-400 font-mono">PUBLIKASI TERBARU (PDF)</span>
                      {[
                        { title: "Kajian Optimasi Koridor TransJakarta Berbasis Data Sensor", date: "Juni 2026", size: "3.2 MB" },
                        { title: "Prediksi Sebaran Titik Banjir Menggunakan Neural Networks", date: "April 2026", size: "4.8 MB" },
                        { title: "Laporan Evaluasi Program Wi-Fi Gratis JakWifi Tahun Awal", date: "Februari 2026", size: "2.1 MB" },
                      ].map((pub, i) => (
                        <div key={i} className="bg-slate-950/40 p-2.5 rounded-lg border border-slate-800/80 flex items-center justify-between text-xs transition-colors hover:bg-slate-950">
                          <div className="flex items-center gap-2 min-w-0">
                            <DocumentTextIcon className="size-4 text-blue-400 shrink-0" />
                            <span className="truncate text-[10px] font-medium text-slate-200">{pub.title}</span>
                          </div>
                          <div className="flex items-center gap-3 shrink-0 ml-4">
                            <span className="text-[8px] text-slate-500 font-mono">{pub.date}</span>
                            <span className="text-[8px] text-blue-400 font-mono font-bold bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20">{pub.size}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
