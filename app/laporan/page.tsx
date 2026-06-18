"use client";

import { useState } from "react";
import Image from "next/image";
import {
  MapPinIcon,
  TagIcon,
  ChatBubbleBottomCenterTextIcon,
  CheckCircleIcon,
  ClockIcon,
  ArrowPathIcon,
  MagnifyingGlassIcon,
  CameraIcon,
  DocumentTextIcon,
  PlusIcon,
  ChevronRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  GlobeAltIcon,
  ChatBubbleLeftRightIcon
} from "@heroicons/react/24/outline";

// Kategori Laporan
const CATEGORIES = [
  { id: "infrastruktur", name: "Infrastruktur & Jalan", icon: "🚧", color: "text-amber-600 bg-amber-50" },
  { id: "kebersihan", name: "Sampah & Kebersihan", icon: "🗑️", color: "text-green-600 bg-green-50" },
  { id: "transportasi", name: "Transportasi Publik", icon: "🚌", color: "text-blue-600 bg-blue-50" },
  { id: "ketertiban", name: "Ketertiban & Keamanan", icon: "🚨", color: "text-red-600 bg-red-50" },
  { id: "kesehatan", name: "Kesehatan & Sanitasi", icon: "🏥", color: "text-teal-600 bg-teal-50" },
  { id: "lainnya", name: "Lain-lain", icon: "📌", color: "text-neutral-600 bg-neutral-50" },
];

// Data Awal Laporan
interface Report {
  id: string;
  category: string;
  title: string;
  description: string;
  location: string;
  status: "Menunggu" | "Diproses" | "Selesai";
  image: string;
  date: string;
  likes: number;
}

const INITIAL_REPORTS: Report[] = [
  {
    id: "JSC-CRM-92381",
    category: "infrastruktur",
    title: "Lubang Jalan Besar di Pertigaan Blok M",
    description: "Terdapat lubang cukup dalam di pertigaan dekat pintu masuk Terminal Blok M. Sangat membahayakan pengendara motor terutama di malam hari atau saat hujan deras karena tergenang air.",
    location: "Kebayoran Baru, Jakarta Selatan",
    status: "Diproses",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=600&auto=format&fit=crop",
    date: "18 Juni 2026, 09:30",
    likes: 24,
  },
  {
    id: "JSC-CRM-92310",
    category: "kebersihan",
    title: "Penumpukan Sampah Liar di Pinggir Kali Ciliwung",
    description: "Warga melaporkan adanya tumpukan sampah plastik dan limbah rumah tangga di area bantaran kali Ciliwung segmen Kampung Melayu. Bau menyengat dan berpotensi menyumbat aliran air.",
    location: "Jatinegara, Jakarta Timur",
    status: "Selesai",
    image: "https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?q=80&w=600&auto=format&fit=crop",
    date: "17 Juni 2026, 14:15",
    likes: 42,
  },
  {
    id: "JSC-CRM-92275",
    category: "transportasi",
    title: "Halte Transjakarta Tosari Mengalami Kerusakan Sensor Pintu",
    description: "Pintu otomatis dermaga B Halte Tosari tidak mau terbuka secara otomatis saat bus merapat, sehingga petugas harus membukanya secara manual. Mohon segera diperbaiki demi kenyamanan penumpang saat peak hours.",
    location: "Menteng, Jakarta Pusat",
    status: "Menunggu",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    date: "18 Juni 2026, 16:45",
    likes: 8,
  },
  {
    id: "JSC-CRM-92140",
    category: "ketertiban",
    title: "Parkir Liar Menutupi Jalur Pedestrian di Jalan Sabang",
    description: "Kendaraan roda empat dan roda dua parkir di atas trotoar yang baru saja direvitalisasi, menghalangi akses para pejalan kaki dan penyandang disabilitas yang menggunakan ubin pemandu.",
    location: "Menteng, Jakarta Pusat",
    status: "Selesai",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=600&auto=format&fit=crop",
    date: "15 Juni 2026, 11:20",
    likes: 31,
  }
];

// Saluran Alternatif
const ALTERNATIVE_CHANNELS = [
  { name: "JAKI Super-app", detail: "Aplikasi Mobile resmi Pemprov DKI", icon: GlobeAltIcon, link: "#" },
  { name: "WhatsApp CRM", detail: "Kirim aduan ke 0811-1274-7474", icon: ChatBubbleLeftRightIcon, link: "#" },
  { name: "Call Center 112", detail: "Layanan Darurat & Aduan Bebas Pulsa", icon: PhoneIcon, link: "#" },
  { name: "Email dki@jakarta.go.id", detail: "Kirim surat elektronik aduan Anda", icon: EnvelopeIcon, link: "#" },
];

export default function LaporanPage() {
  const [reports, setReports] = useState<Report[]>(INITIAL_REPORTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  // State Formulir
  const [formCategory, setFormCategory] = useState("");
  const [formTitle, setFormTitle] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formLocation, setFormLocation] = useState("");
  const [formImage, setFormImage] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  // Success Notification
  const [submittedReportId, setSubmittedReportId] = useState<string | null>(null);

  // Filter laporan berdasarkan input user
  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      report.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || report.category === selectedCategory;
    const matchesStatus = selectedStatus === "all" || report.status === selectedStatus;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  // Simulasi Upload Gambar
  const handleSimulateUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      // Daftar gambar ilustrasi random untuk simulasi aduan
      const sampleImages = [
        "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=600&auto=format&fit=crop", // konstruksi/jalan
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=600&auto=format&fit=crop", // sampah
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop", // infrastruktur kota
      ];
      const randomImg = sampleImages[Math.floor(Math.random() * sampleImages.length)];
      setFormImage(randomImg);
      setIsUploading(false);
    }, 1200);
  };

  // Submit Formulir
  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCategory || !formTitle || !formDescription || !formLocation) {
      alert("Harap lengkapi seluruh kolom formulir!");
      return;
    }

    const newId = `JSC-CRM-${Math.floor(10000 + Math.random() * 90000)}`;
    const newReport: Report = {
      id: newId,
      category: formCategory,
      title: formTitle,
      description: formDescription,
      location: formLocation,
      status: "Menunggu",
      image: formImage || "https://images.unsplash.com/photo-1584467541268-b040f83be3fd?q=80&w=600&auto=format&fit=crop",
      date: new Date().toLocaleString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }) + " WIB",
      likes: 0,
    };

    setReports([newReport, ...reports]);
    setSubmittedReportId(newId);

    // Reset Form
    setFormCategory("");
    setFormTitle("");
    setFormDescription("");
    setFormLocation("");
    setFormImage("");
  };

  const handleLikeReport = (id: string) => {
    setReports(
      reports.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50 pb-20">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 pt-32 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop"
            alt="Jakarta Landmark background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-neutral-900/90 to-neutral-50" />

        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30 mb-4">
            <span className="size-2 rounded-full bg-blue-500 animate-pulse" />
            Cepat Respon Masyarakat (CRM)
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-neutral-100 to-neutral-300 bg-clip-text text-transparent">
            Pusat Pengaduan & Aspirasi Warga
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Laporkan kendala fasilitas publik, jalan rusak, tumpukan sampah, atau masalah ketertiban umum di Jakarta. Kami menghubungkan suara Anda langsung ke instansi terkait untuk tindak lanjut cepat.
          </p>
        </div>
      </section>

      {/* Main Grid Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Column: Form Submit Report (5 Cols) */}
        <section className="lg:col-span-5" aria-labelledby="form-heading">
          <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-xl p-6 sm:p-8 sticky top-24 backdrop-blur-md bg-white/95">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600">
                <DocumentTextIcon className="size-6" />
              </div>
              <div>
                <h2 id="form-heading" className="text-xl font-bold text-neutral-900">
                  Buat Laporan Baru
                </h2>
                <p className="text-xs text-neutral-500">Isi data aduan dengan lengkap dan benar</p>
              </div>
            </div>

            {submittedReportId ? (
              /* Success State Card */
              <div className="py-6 text-center animate-fade-in">
                <div className="inline-flex p-3 rounded-full bg-green-50 text-green-600 mb-4">
                  <CheckCircleIcon className="size-12" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">Laporan Berhasil Terkirim!</h3>
                <p className="text-sm text-neutral-600 mt-2 px-4">
                  Aduan Anda telah didaftarkan dalam sistem Jakarta Smart City CRM.
                </p>
                <div className="my-6 p-4 bg-neutral-50 border border-neutral-200 rounded-xl">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-semibold">Kode Tracking</p>
                  <p className="text-lg font-mono font-bold text-blue-600 mt-1">{submittedReportId}</p>
                </div>
                <button
                  onClick={() => setSubmittedReportId(null)}
                  className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold transition-colors shadow-sm"
                >
                  Buat Laporan Lagi
                </button>
              </div>
            ) : (
              /* Actual Reporting Form */
              <form onSubmit={handleSubmitReport} className="space-y-5">
                <div>
                  <label htmlFor="category" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Kategori Pengaduan
                  </label>
                  <div className="relative">
                    <select
                      id="category"
                      value={formCategory}
                      onChange={(e) => setFormCategory(e.target.value)}
                      required
                      className="w-full pl-10 pr-3 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all appearance-none"
                    >
                      <option value="" disabled>-- Pilih Kategori --</option>
                      {CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.icon} {cat.name}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                      <TagIcon className="size-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="title" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Judul Laporan
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={formTitle}
                    onChange={(e) => setFormTitle(e.target.value)}
                    placeholder="Contoh: Lampu Jalan Mati di dekat Halte..."
                    required
                    className="w-full px-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Deskripsi Detail Kejadian
                  </label>
                  <div className="relative">
                    <textarea
                      id="description"
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      placeholder="Jelaskan secara rinci kronologi kejadian, durasi masalah, atau ciri spesifik di lokasi aduan..."
                      required
                      rows={4}
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                    />
                    <div className="absolute top-3.5 left-3.5 text-neutral-400">
                      <ChatBubbleBottomCenterTextIcon className="size-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Lokasi Spesifik / Alamat
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="location"
                      value={formLocation}
                      onChange={(e) => setFormLocation(e.target.value)}
                      placeholder="Jl. Thamrin No.12, Kel. Gondangdia..."
                      required
                      className="w-full pl-10 pr-4 py-2.5 bg-neutral-50 border border-neutral-200 rounded-xl text-sm text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400">
                      <MapPinIcon className="size-4" />
                    </div>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-2">
                    Foto Pendukung
                  </span>
                  
                  {formImage ? (
                    <div className="relative rounded-xl overflow-hidden border border-neutral-200 aspect-video group">
                      <Image
                        src={formImage}
                        alt="Aduan preview"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-neutral-900/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                        <button
                          type="button"
                          onClick={() => setFormImage("")}
                          className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors"
                        >
                          Hapus Foto
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleSimulateUpload}
                      disabled={isUploading}
                      className="w-full border-2 border-dashed border-neutral-300 hover:border-blue-400 rounded-xl p-6 text-center hover:bg-neutral-50 transition-all flex flex-col items-center justify-center cursor-pointer group"
                    >
                      <CameraIcon className="size-8 text-neutral-400 group-hover:text-blue-500 transition-colors mb-2" />
                      <span className="text-sm font-semibold text-neutral-700 group-hover:text-blue-600 transition-colors">
                        {isUploading ? "Mengunggah..." : "Simulasi Ambil Foto"}
                      </span>
                      <span className="text-xs text-neutral-500 mt-1">
                        Sistem akan memasang contoh foto infrastruktur secara otomatis
                      </span>
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                >
                  Kirim Laporan Resmi
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Right Column: Active Reports Dashboard & Channels (7 Cols) */}
        <section className="lg:col-span-7 space-y-8" aria-labelledby="dashboard-heading">
          
          {/* Filter, Search & Feed Dashboard */}
          <div className="bg-white rounded-2xl border border-neutral-200/80 shadow-md p-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h2 id="dashboard-heading" className="text-lg font-bold text-neutral-900">
                  Daftar Laporan Terkini
                </h2>
                <p className="text-xs text-neutral-500">Transparansi proses penyelesaian laporan warga</p>
              </div>

              {/* Status Tab Filters */}
              <div className="flex gap-1 bg-neutral-100 p-1 rounded-xl self-start sm:self-center">
                {[
                  { id: "all", name: "Semua" },
                  { id: "Menunggu", name: "Menunggu" },
                  { id: "Diproses", name: "Diproses" },
                  { id: "Selesai", name: "Selesai" }
                ].map((statusTab) => (
                  <button
                    key={statusTab.id}
                    onClick={() => setSelectedStatus(statusTab.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      selectedStatus === statusTab.id
                        ? "bg-white text-neutral-900 shadow-sm"
                        : "text-neutral-500 hover:text-neutral-900"
                    }`}
                  >
                    {statusTab.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Search and Category Filters */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
              <div className="sm:col-span-8 relative">
                <input
                  type="text"
                  placeholder="Cari ID laporan, jalan, kata kunci..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-950 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-neutral-400 pointer-events-none">
                  <MagnifyingGlassIcon className="size-4" />
                </div>
              </div>

              <div className="sm:col-span-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-neutral-50 border border-neutral-200 rounded-xl text-xs text-neutral-950 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                >
                  <option value="all">Semua Kategori</option>
                  {CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Reports List */}
            {filteredReports.length === 0 ? (
              <div className="text-center py-12 border border-dashed border-neutral-200 rounded-2xl">
                <p className="text-sm text-neutral-500">Tidak ada laporan yang cocok dengan filter atau pencarian Anda.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredReports.map((report) => (
                  <article
                    key={report.id}
                    className="flex flex-col sm:flex-row gap-5 p-4 border border-neutral-100 rounded-xl hover:border-neutral-200 transition-all hover:shadow-xs group"
                  >
                    {/* Report Image */}
                    <div className="relative aspect-video sm:aspect-square w-full sm:w-28 shrink-0 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200/50">
                      <Image
                        src={report.image}
                        alt={report.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Report Text Content */}
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        {/* Header metadata */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                          <span className="font-mono text-xs font-semibold text-blue-600">{report.id}</span>
                          
                          {/* Status badge */}
                          <span
                            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase ${
                              report.status === "Menunggu"
                                ? "bg-blue-50 text-blue-700"
                                : report.status === "Diproses"
                                ? "bg-amber-50 text-amber-700"
                                : "bg-green-50 text-green-700"
                            }`}
                          >
                            {report.status === "Menunggu" && <ClockIcon className="size-3" />}
                            {report.status === "Diproses" && <ArrowPathIcon className="size-3 animate-spin" />}
                            {report.status === "Selesai" && <CheckCircleIcon className="size-3" />}
                            {report.status}
                          </span>
                        </div>

                        {/* Title & description */}
                        <h3 className="text-sm font-bold text-neutral-900 leading-snug group-hover:text-blue-600 transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-xs text-neutral-600 mt-1.5 line-clamp-2 leading-relaxed">
                          {report.description}
                        </p>
                      </div>

                      {/* Footer metadata */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 pt-3 mt-3 text-[11px] text-neutral-500">
                        <div className="flex items-center gap-1">
                          <MapPinIcon className="size-3.5 shrink-0 text-neutral-400" />
                          <span>{report.location}</span>
                        </div>

                        <div className="flex items-center gap-4">
                          <span>{report.date}</span>
                          <button
                            onClick={() => handleLikeReport(report.id)}
                            className="inline-flex items-center gap-1 text-neutral-500 hover:text-blue-600 transition-colors font-semibold"
                          >
                            👍 <span>{report.likes}</span> Dukungan
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Alternative Official Reporting Channels */}
          <div className="bg-neutral-900 rounded-2xl border border-neutral-800 text-white p-6 shadow-md">
            <h3 className="text-base font-bold">Saluran Pengaduan Alternatif</h3>
            <p className="text-xs text-neutral-400 mt-1">Selain portal web, Anda juga dapat menyampaikan aduan melalui saluran berikut:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {ALTERNATIVE_CHANNELS.map((channel) => (
                <a
                  key={channel.name}
                  href={channel.link}
                  className="flex items-start gap-3 p-3 bg-neutral-800/50 hover:bg-neutral-800 border border-neutral-800 rounded-xl transition-all hover:scale-[1.01] group"
                >
                  <div className="p-2 rounded-lg bg-neutral-700/50 text-blue-400 group-hover:text-blue-300">
                    <channel.icon className="size-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-100 flex items-center gap-1 group-hover:text-white">
                      {channel.name}
                      <ChevronRightIcon className="size-3 text-neutral-500" />
                    </h4>
                    <p className="text-[10px] text-neutral-400 mt-0.5">{channel.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
