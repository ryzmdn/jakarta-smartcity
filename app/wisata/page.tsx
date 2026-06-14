"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  ClockIcon,
  SparklesIcon,
  ChevronRightIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const WISATA_TITLE = "Destinasi Wisata Jakarta";
const WISATA_SUBTITLE = "Jelajahi perpaduan cagar budaya bersejarah, pusat hiburan modern, dan wisata bahari eksotis";
const HERO_IMAGE = "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg";

const DESTINATIONS = [
  {
    id: "monas",
    category: "historical",
    name: "Monumen Nasional (Monas)",
    location: "Gambir, Jakarta Pusat",
    description: "Tugu peringatan setinggi 132 meter yang didirikan untuk mengenang perjuangan kemerdekaan. Di puncaknya terdapat cawan berlapis lembaran emas murni seberat 50 kg berbentuk lidah api.",
    rating: "4.8",
    image: "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg",
    imageAlt: "Tugu Monumen Nasional tegak berdiri di bawah langit biru",
  },
  {
    id: "kota-tua",
    category: "historical",
    name: "Kota Tua Jakarta",
    location: "Pinangsia, Jakarta Barat",
    description: "Kawasan bersejarah seluas 1,3 km persegi yang menampilkan gedung-gedung kolonial Belanda abad ke-17. Sangat ikonik dengan Lapangan Fatahillah, Museum Sejarah Jakarta, dan persewaan sepeda ontel.",
    rating: "4.7",
    image: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    imageAlt: "Museum Fatahillah dengan sepeda ontel warna-warni di halaman depan",
  },
  {
    id: "tmii",
    category: "nature",
    name: "Taman Mini Indonesia Indah",
    location: "Cipayung, Jakarta Timur",
    description: "Kawasan taman wisata budaya seluas 150 hektare yang merangkum kebudayaan bangsa Indonesia dalam miniatur kepulauan, aneka rumah adat (anjungan), pakaian tradisional, hingga museum iptek.",
    rating: "4.7",
    image: "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    imageAlt: "Danau kepulauan Indonesia di tengah kompleks TMII",
  },
  {
    id: "kepulauan-seribu",
    category: "nature",
    name: "Kepulauan Seribu",
    location: "Kabupaten Kepulauan Seribu",
    description: "Gugusan pulau tropis indah di Teluk Jakarta yang menawarkan wisata bahari mulai dari snorkeling, diving, hingga penginapan resort eksotis di Pulau Macan, Pulau Pramuka, dan Pulau Pari.",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Dermaga kayu dan air laut bening kehijauan di Kepulauan Seribu",
  },
  {
    id: "ancol",
    category: "modern",
    name: "Dunia Fantasi (Dufan) Ancol",
    location: "Pademangan, Jakarta Utara",
    description: "Taman hiburan outdoor terbesar di Jakarta dengan puluhan wahana memicu adrenalin seperti Halilintar, Kora-kora, Niagara-gara, hingga Istana Boneka yang ramah anak.",
    rating: "4.6",
    image: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/12/29/591e6cad-919d-4c23-95a5-0a7f6d2b866a-1735466532176-da6a7edce3a96e416b7f994f5bf87670.png",
    imageAlt: "Pemandangan Bianglala besar Dufan di sore hari",
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Destinasi" },
  { id: "historical", label: "Sejarah & Edukasi" },
  { id: "nature", label: "Alam & Budaya" },
  { id: "modern", label: "Rekreasi Modern" },
];

const ITINERARIES = [
  {
    id: "one-day-heritage",
    title: "Rute Sejarah 1 Hari",
    steps: [
      { time: "08:00 - 11:00", activity: "Mengeksplorasi Museum Sejarah Jakarta (Fatahillah) dan bersepeda ontel di Kota Tua." },
      { time: "11:30 - 13:00", activity: "Makan siang kuliner legendaris Betawi di sekitar area Kota Tua." },
      { time: "14:00 - 17:00", activity: "Mengunjungi Monumen Nasional (Monas) hingga naik ke cawan pelataran puncak." },
    ],
  },
  {
    id: "one-day-nature",
    title: "Rute Alam 1 Hari",
    steps: [
      { time: "07:00 - 08:30", activity: "Menyeberang dari dermaga Marina Ancol menuju gugusan Kepulauan Seribu." },
      { time: "09:00 - 12:00", activity: "Snorkeling dan foto underwater di sekitar terumbu karang Pulau Pari." },
      { time: "13:00 - 16:00", activity: "Menikmati seafood bakar segar dan bersantai di hamparan pasir putih Pulau Macan." },
    ],
  },
];

export default function WisataPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItinerary, setActiveItinerary] = useState("one-day-heritage");

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory = selectedCategory === "all" || dest.category === selectedCategory;
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedItinerary = ITINERARIES.find((i) => i.id === activeItinerary) || ITINERARIES[0];

  return (
    <main className="flex-1 bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="page-title">
        <img
          alt="Latar belakang pemandangan ikonik tugu monumen nasional jakarta"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 ring-1 ring-inset ring-emerald-500/30 mb-4">
            Destinasi Pilihan
          </span>
          <h1 id="page-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
            {WISATA_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            {WISATA_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Interactive Control Center */}
      <section className="max-w-6xl mx-auto px-4 py-8 relative z-20 -mt-12" aria-label="Filter Pencarian Destinasi">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari tempat wisata, sejarah, mall..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            />
          </div>

          {/* Categories Tablist */}
          <div className="flex flex-wrap gap-2" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/25"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tourist Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8" aria-labelledby="grid-title">
        <h2 id="grid-title" className="sr-only">Daftar Tempat Wisata Terbaik</h2>
        {filteredDestinations.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <SparklesIcon className="size-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Wisata yang Anda cari tidak ditemukan. Coba kata kunci lain!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((dest) => (
              <article
                key={dest.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={dest.image}
                    alt={dest.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-slate-800 shadow-sm">
                    ⭐ {dest.rating}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                      <MapPinIcon className="size-4 shrink-0 text-slate-400" />
                      {dest.location}
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 tracking-tight">{dest.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{dest.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Interactive Trip Planner Section */}
      <section className="bg-slate-100/60 border-y border-slate-200/50 py-16" aria-labelledby="planner-title">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 id="planner-title" className="text-3xl font-bold tracking-tight text-slate-800">
              Rencana Perjalanan (Itinerary)
            </h2>
            <p className="mt-3 text-slate-600 text-sm">
              Gunakan rancangan rute perjalanan pintar kami untuk memaksimalkan liburan 1 hari penuh di Jakarta.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Itinerary Selectors */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2" role="tablist">
              {ITINERARIES.map((itinerary) => (
                <button
                  key={itinerary.id}
                  onClick={() => setActiveItinerary(itinerary.id)}
                  aria-selected={activeItinerary === itinerary.id}
                  role="tab"
                  className={`w-full flex items-center justify-between p-5 text-left rounded-2xl border transition-all duration-200 outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 cursor-pointer ${
                    activeItinerary === itinerary.id
                      ? "bg-white border-emerald-500 shadow-md text-emerald-700 font-bold"
                      : "bg-white/80 border-slate-200 text-slate-600 font-medium hover:bg-white"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <CalendarIcon className="size-5 shrink-0 text-slate-400" />
                    {itinerary.title}
                  </span>
                  <ChevronRightIcon className="size-4" />
                </button>
              ))}
            </div>

            {/* Itinerary Timeline */}
            <div className="flex-1 w-full bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-800 mb-6">{selectedItinerary.title}</h3>
              <div className="space-y-6">
                {selectedItinerary.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start relative pb-6 last:pb-0">
                    {/* timeline line */}
                    {idx < selectedItinerary.steps.length - 1 && (
                      <span className="absolute left-4 top-8 bottom-0 w-0.5 bg-slate-100" />
                    )}
                    {/* circle icon */}
                    <div className="size-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600">
                      <ClockIcon className="size-4" />
                    </div>
                    {/* details */}
                    <div className="space-y-1">
                      <span className="inline-block text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                        {step.time}
                      </span>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed">{step.activity}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
