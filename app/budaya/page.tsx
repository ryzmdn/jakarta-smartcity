"use client";

import { useState } from "react";
import {
  SparklesIcon,
  MusicalNoteIcon,
  HomeIcon,
  FlagIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const CULTURE_TITLE = "Warisan Budaya Betawi";
const CULTURE_SUBTITLE = "Melestarikan nilai luhur tradisi di tengah pusaran modernitas Jakarta";
const HERO_IMAGE = "https://cdn0-production-images-kly.akamaized.net/MosRe9phwynaMY4KfLq7XTKAvQQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1375036/original/010506800_1476592430-20161016--Serunya-Karnaval-Kebudayaan-Betawi-di-CFD-Jakarta--Faizal-Fanani-03.jpg";

const CATEGORIES = [
  { id: "all", label: "Semua Budaya" },
  { id: "arts", label: "Seni & Pertunjukan" },
  { id: "clothing", label: "Busana & Arsitektur" },
  { id: "traditions", label: "Tradisi & Musik" },
];

const CULTURE_ITEMS = [
  {
    id: "ondel-ondel",
    category: "arts",
    title: "Ondel-Ondel",
    description: "Boneka raksasa ikonik setinggi 2,5 meter yang dihias dengan pakaian adat Betawi. Awalnya berfungsi sebagai penolak bala, kini Ondel-ondel menjadi ikon kegembiraan dalam festival dan pesta rakyat.",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq6E7iU9JEiHxtqGppOY-Sz_J8srw0tLHnTTqZnAbrgAjo7Ev29oWiqgAh1xaQ6AXxN02EVV0Fa-gIsUvv0inBaMuUf4OZREQql2M_1rrIrKth0m7MYvnIOX5tyrn-EvTygJb78B-7Uec/s1600/Ondel+Ondel.jpg",
    imageAlt: "Sepasang boneka raksasa tradisional Ondel-ondel Betawi",
  },
  {
    id: "palang-pintu",
    category: "traditions",
    title: "Palang Pintu",
    description: "Tradisi menyambut tamu atau mempelai laki-laki dalam pernikahan adat Betawi. Tradisi ini menggabungkan seni bela diri Pencak Silat, berbalas pantun jenaka, dan pembacaan ayat suci Al-Qur'an.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pencak_Silat_Betawi_2.jpg/960px-Pencak_Silat_Betawi_2.jpg",
    imageAlt: "Dua pesilat Betawi sedang bertarung dalam prosesi Palang Pintu",
  },
  {
    id: "lenong",
    category: "arts",
    title: "Lenong Betawi",
    description: "Teater rakyat Betawi yang diiringi musik Gambang Kromong. Pertunjukan sarat dengan humor spontan, kritik sosial yang dikemas santai, serta pesan-pesan moral kehidupan sehari-hari.",
    image: "https://cnc-magazine.oramiland.com/parenting/images/artikel_HERO_1_Wb7acus.width-800.format-webp.webp",
    imageAlt: "Pertunjukan teater tradisional Lenong Betawi",
  },
  {
    id: "rumah-kebaya",
    category: "clothing",
    title: "Rumah Kebaya",
    description: "Rumah adat Betawi yang memiliki atap berbentuk seperti lipatan kebaya jika dilihat dari samping. Karakteristik utamanya adalah teras luas (bale) untuk menyambut tamu dengan kehangatan.",
    image: "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    imageAlt: "Rumah adat Kebaya khas Betawi di TMII",
  },
  {
    id: "gambang-kromong",
    category: "traditions",
    title: "Gambang Kromong",
    description: "Orkes musik khas Betawi yang memadukan unsur musik gamelan tradisional dengan alat musik tiup dan gesek khas Tionghoa, menciptakan harmoni akulturasi budaya yang unik.",
    image: "https://superlive.id/storage/superadventure/2020/10/04/6a759dfce85f.jpg",
    imageAlt: "Kelompok pemusik memainkan alat musik Gambang Kromong",
  },
  {
    id: "kebaya-encim",
    category: "clothing",
    title: "Kebaya Encim",
    description: "Busana tradisional wanita Betawi dengan akulturasi budaya Tionghoa. Terbuat dari bahan katun tipis berhiaskan bordir indah di bagian ujungnya, mencerminkan keanggunan yang bersahaja.",
    image: "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg",
    imageAlt: "Peragaan busana Kebaya Encim khas Betawi",
  },
];

const PRESERVATION_STATS = [
  { label: "Cagar Budaya Teregistrasi", value: "120+" },
  { label: "Sanggar Seni Aktif", value: "350+" },
  { label: "Festival Budaya / Tahun", value: "24+" },
];

export default function BudayaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const filteredItems = selectedCategory === "all"
    ? CULTURE_ITEMS
    : CULTURE_ITEMS.filter((item) => item.category === selectedCategory);

  const handleToggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <main className="flex-1 bg-slate-50">
      {/* Hero Header */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="page-title">
        <img
          alt="Latar belakang festival kebudayaan Betawi Jakarta"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/20 text-amber-300 ring-1 ring-inset ring-amber-500/30 mb-4">
            Khazanah Nusantara
          </span>
          <h1 id="page-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
            {CULTURE_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            {CULTURE_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="relative z-20 -mt-12 max-w-5xl mx-auto px-4" aria-label="Statistik Kebudayaan">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 bg-white rounded-2xl p-6 shadow-xl border border-slate-100">
          {PRESERVATION_STATS.map((stat, idx) => (
            <div key={idx} className="text-center py-2 sm:py-0 sm:border-r sm:last:border-r-0 border-slate-100">
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-400">{stat.label}</dt>
              <dd className="mt-2 text-2xl sm:text-3xl font-extrabold text-slate-800">{stat.value}</dd>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Exploration Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16" aria-labelledby="exploration-title">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <h2 id="exploration-title" className="text-3xl font-bold tracking-tight text-slate-800">
              Galeri Budaya & Tradisi
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Saring kategori untuk menelusuri ragam adat istiadat, pakaian, seni rupa, dan musik khas Betawi.
            </p>
          </div>
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setExpandedItem(null);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-amber-500 text-white shadow-md shadow-amber-500/25"
                    : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Culture cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => {
            const isExpanded = expandedItem === item.id;
            return (
              <article
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                    <p className={`text-slate-600 text-sm leading-relaxed transition-all duration-300 ${
                      isExpanded ? "line-clamp-none" : "line-clamp-3"
                    }`}>
                      {item.description}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleToggleExpand(item.id)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 hover:underline outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded px-1 py-0.5"
                    >
                      {isExpanded ? "Sembunyikan detail" : "Selengkapnya"}
                      <ChevronRightIcon className={`size-3.5 transition-transform duration-200 ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Preservation Call to Action */}
      <section className="bg-gradient-to-br from-amber-500 to-orange-600 text-white py-16" aria-labelledby="preservation-title">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 id="preservation-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ikut Serta Melestarikan Budaya
          </h2>
          <p className="text-amber-50 font-light max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Menjaga kelestarian adat istiadat adalah tanggung jawab bersama. Kunjungi museum budaya, dukung pameran seni lokal, dan sebarkan keindahan tradisi Nusantara ke penjuru dunia.
          </p>
        </div>
      </section>
    </main>
  );
}
