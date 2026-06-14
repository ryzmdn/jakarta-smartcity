"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  HeartIcon,
  SparklesIcon,
  FireIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";

const CULINARY_TITLE = "Cita Rasa Kuliner Betawi";
const CULINARY_SUBTITLE = "Jelajahi petualangan rasa legendaris dari sudut-sudut kota Jakarta";
const HERO_IMAGE = "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg";

const CULINARY_ITEMS = [
  {
    id: "kerak-telor",
    category: "food",
    name: "Kerak Telor",
    origin: "Kemayoran / Asli Betawi",
    description: "Kuliner legendaris berbahan dasar beras ketan putih, telur bebek/ayam, disajikan dengan serundeng (kelapa parut sangrai), ebi sangrai, dan bawang goreng merah yang harum.",
    funFact: "Dahulu kerak telor tercipta secara tidak sengaja dari hasil uji coba warga Betawi memanfaatkan melimpahnya buah kelapa.",
    image: "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg",
    imageAlt: "Sepiring Kerak Telor khas Betawi yang lezat di atas piring tanah liat",
  },
  {
    id: "soto-betawi",
    category: "food",
    name: "Soto Betawi",
    origin: "Seluruh Wilayah Jakarta",
    description: "Soto khas dengan kuah santan atau susu berisikan daging sapi jeroan yang gurih. Dihidangkan hangat bersama emping melinjo, acar timun, dan perasan jeruk limo segar.",
    funFact: "Soto Betawi merupakan soto pertama di Indonesia yang menggunakan istilah daerah asalnya 'Betawi' pada penamaannya tahun 1970-an.",
    image: "https://cdn1-production-images-kly.akamaized.net/jYNtAE2I8P04XtKahdHRpgFrysQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3085839/original/045051600_1585201940-wisata-kuliner-jakarta-2.jpg",
    imageAlt: "Mangkuk Soto Betawi berkuah kental dengan emping",
  },
  {
    id: "bir-pletok",
    category: "drink",
    name: "Bir Pletok",
    origin: "Setu Babakan",
    description: "Minuman herbal khas Betawi non-alkohol terbuat dari campuran rempah seperti jahe, serai, daun pandan, kapulaga, dan kayu secang yang memberi warna merah alami.",
    funFact: "Nama 'pletok' terinspirasi dari suara tutup botol anggur yang dibuka berbunyi 'pletok' oleh bangsa kolonial belanda dahulu.",
    image: "https://superlive.id/storage/superadventure/2020/10/04/6a759dfce85f.jpg",
    imageAlt: "Gelas kaca berisi Bir Pletok merah rempah hangat",
  },
  {
    id: "selendang-mayang",
    category: "drink",
    name: "Es Selendang Mayang",
    origin: "Kota Tua / Glodok",
    description: "Es pencuci mulut tradisional berkuah santan gurih dan sirup manis. Berisi kue kenyal sagu aren aneka warna seperti merah, putih, dan hijau menyerupai selendang.",
    funFact: "Minuman ini dinilai kian langka dan kini masuk sebagai warisan budaya takbenda DKI Jakarta.",
    image: "https://cnc-magazine.oramiland.com/parenting/images/artikel_HERO_1_Wb7acus.width-800.format-webp.webp",
    imageAlt: "Mangkuk Es Selendang Mayang dengan potongan es serut",
  },
  {
    id: "lenggang-jakarta",
    category: "spot",
    name: "Lenggang Jakarta Monas",
    origin: "Gambir, Jakarta Pusat",
    description: "Pusat kuliner resmi terpadu di kawasan Monas yang menampung ratusan pedagang lokal menyajikan aneka kuliner otentik higienis berkualitas tinggi.",
    funFact: "Lokasi ini diresmikan untuk membina UMKM kuliner di Jakarta dengan pembayaran nontunai yang modern.",
    image: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    imageAlt: "Kawasan pusat jajanan kuliner Lenggang Jakarta",
  },
];

const CATEGORIES = [
  { id: "all", label: "Semua Kuliner" },
  { id: "food", label: "Makanan Utama" },
  { id: "drink", label: "Minuman Segar" },
  { id: "spot", label: "Pusat Kuliner" },
];

export default function KulinerPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [likedItems, setLikedItems] = useState<Record<string, boolean>>({});

  const handleLike = (id: string) => {
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredItems = CULINARY_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="flex-1 bg-slate-50">
      {/* Hero Header */}
      <section className="relative h-[380px] flex items-center justify-center overflow-hidden bg-slate-900" aria-labelledby="page-title">
        <img
          alt="Latar belakang hidangan soto betawi dan kerak telor khas jakarta"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-rose-500/20 text-rose-300 ring-1 ring-inset ring-rose-500/30 mb-4">
            Eksplorasi Rasa
          </span>
          <h1 id="page-title" className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight">
            {CULINARY_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            {CULINARY_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Interactive Controls Panel */}
      <section className="max-w-6xl mx-auto px-4 py-8 relative z-20 -mt-12" aria-label="Kontrol Pencarian dan Kategori">
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            <input
              type="text"
              placeholder="Cari makanan, minuman, atau spot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm text-slate-800 placeholder-slate-400 outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
            />
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2" role="tablist">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={selectedCategory === cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-semibold transition-all duration-200 outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 cursor-pointer ${
                  selectedCategory === cat.id
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/25"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-8" aria-labelledby="grid-title">
        <h2 id="grid-title" className="sr-only">Daftar Kuliner Terpilih</h2>
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <SparklesIcon className="size-12 text-slate-300 mx-auto mb-4" />
            <p className="text-slate-500 font-medium">Kuliner yang Anda cari belum ditemukan. Coba kata kunci lain!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => {
              const isLiked = !!likedItems[item.id];
              return (
                <article
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md border border-slate-100 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image area */}
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <button
                      onClick={() => handleLike(item.id)}
                      aria-label={isLiked ? "Hapus dari favorit" : "Tambah ke favorit"}
                      className="absolute top-4 right-4 p-2.5 bg-white/95 backdrop-blur-xs rounded-full shadow-sm text-slate-500 hover:text-rose-500 transition-colors duration-200 outline-none focus:ring-2 focus:ring-rose-500"
                    >
                      {isLiked ? (
                        <HeartSolidIcon className="size-5 text-rose-500" />
                      ) : (
                        <HeartIcon className="size-5" />
                      )}
                    </button>
                  </div>

                  {/* Text details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
                        <MapPinIcon className="size-4 shrink-0 text-slate-400" />
                        {item.origin}
                      </div>
                      <h3 className="text-xl font-bold text-slate-800 tracking-tight">{item.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>

                    {/* Interactive Info Alert */}
                    <div className="bg-amber-50/70 border border-amber-100 rounded-2xl p-4 flex gap-3 items-start">
                      <FireIcon className="size-5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="text-xs text-amber-800 leading-relaxed">
                        <strong className="font-semibold text-amber-900 block mb-0.5">Fun Fact:</strong>
                        {item.funFact}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
