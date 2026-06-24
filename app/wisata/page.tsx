"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const WISATA_TITLE = "Destinasi Wisata Jakarta";
const WISATA_SUBTITLE =
  "Jelajahi perpaduan cagar budaya bersejarah, pusat hiburan modern, dan wisata bahari eksotis";
const HERO_IMAGE =
  "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg";

const CATEGORIES = [
  { id: "all", label: "Semua Destinasi" },
  { id: "historical", label: "Sejarah & Edukasi" },
  { id: "nature", label: "Alam & Budaya" },
  { id: "modern", label: "Rekreasi Modern" },
];

const posts = [
  {
    id: 1,
    title: "Monumen Nasional (Monas)",
    href: "#",
    description: "Tugu peringatan setinggi 132 meter yang didirikan untuk mengenang perjuangan kemerdekaan. Di puncaknya terdapat lidah api berlapis emas murni seberat 50 kg.",
    imageUrl: "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg",
    date: "Gambir, Jakarta Pusat",
    datetime: "2026-06-24",
    category_id: "historical",
    category: { title: "Sejarah & Edukasi", href: "#" },
    author: {
      name: "Rating 4.8",
      role: "Pilihan Utama Pengunjung",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 2,
    title: "Kota Tua Jakarta",
    href: "#",
    description: "Kawasan bersejarah seluas 1,3 km persegi peninggalan era Batavia lama abad ke-17. Terkenal dengan arsitektur kolonial, Lapangan Fatahillah, dan sepeda ontel warna-warni.",
    imageUrl: "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    date: "Pinangsia, Jakarta Barat",
    datetime: "2026-06-24",
    category_id: "historical",
    category: { title: "Sejarah & Edukasi", href: "#" },
    author: {
      name: "Rating 4.7",
      role: "Populer untuk Rekreasi",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 3,
    title: "Taman Mini Indonesia Indah",
    href: "#",
    description: "Kawasan wisata budaya seluas 150 hektare yang merangkum kebudayaan bangsa Indonesia dalam miniatur kepulauan, aneka rumah adat, pakaian tradisional, hingga museum iptek.",
    imageUrl: "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    date: "Cipayung, Jakarta Timur",
    datetime: "2026-06-24",
    category_id: "nature",
    category: { title: "Alam & Budaya", href: "#" },
    author: {
      name: "Rating 4.7",
      role: "Wisata Budaya & Keluarga",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 4,
    title: "Kepulauan Seribu",
    href: "#",
    description: "Gugusan pulau tropis indah di Teluk Jakarta yang menawarkan wisata bahari mulai dari snorkeling, diving, hingga penginapan resort eksotis di Pulau Macan, Pramuka, dan Pari.",
    imageUrl: "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    date: "Kabupaten Kepulauan Seribu",
    datetime: "2026-06-24",
    category_id: "nature",
    category: { title: "Alam & Budaya", href: "#" },
    author: {
      name: "Rating 4.9",
      role: "Wisata Bahari",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 5,
    title: "Dunia Fantasi (Dufan) Ancol",
    href: "#",
    description: "Taman hiburan outdoor terbesar di Jakarta dengan puluhan wahana memicu adrenalin seperti Halilintar, Kora-kora, Niagara-gara, hingga Istana Boneka yang ramah anak.",
    imageUrl: "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/12/29/591e6cad-919d-4c23-95a5-0a7f6d2b866a-1735466532176-da6a7edce3a96e416b7f994f5bf87670.png",
    date: "Pademangan, Jakarta Utara",
    datetime: "2026-06-24",
    category_id: "modern",
    category: { title: "Rekreasi Modern", href: "#" },
    author: {
      name: "Rating 4.6",
      role: "Taman Hiburan Keluarga",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=100&auto=format&fit=crop"
    }
  },
  {
    id: 6,
    title: "Tebet Eco Park",
    href: "#",
    description: "Taman kota pintar seluas 8,5 hektare pemenang penghargaan yang memadukan fungsi ekologi, interaksi sosial, serta rekreasi edukatif berbasis teknologi di Jakarta Selatan.",
    imageUrl: "https://images.unsplash.com/photo-1588880331179-bc9b93a8c5c8?q=80&w=400&auto=format&fit=crop",
    date: "Tebet, Jakarta Selatan",
    datetime: "2026-06-24",
    category_id: "modern",
    category: { title: "Rekreasi Modern", href: "#" },
    author: {
      name: "Rating 4.8",
      role: "Taman Kota Pintar & Hijau",
      href: "#",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop"
    }
  }
];

export default function WisataPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category_id === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.date.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section
        className="relative h-[380px] flex items-center justify-center overflow-hidden bg-slate-900"
        aria-labelledby="page-title"
      >
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
          <h1
            id="page-title"
            className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight"
          >
            {WISATA_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light max-w-2xl mx-auto">
            {WISATA_SUBTITLE}
          </p>
        </div>
      </section>

      {/* Interactive Control Center */}
      <section
        className="max-w-6xl mx-auto px-4 py-8 relative z-20 -mt-12"
        aria-label="Filter Pencarian Destinasi"
      >
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

      <section className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-16 space-y-20 lg:mt-20">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-video sm:aspect-2/1 lg:aspect-square lg:w-64 lg:shrink-0">
                <img
                  alt=""
                  src={post.imageUrl}
                  className="absolute inset-0 size-full rounded-2xl bg-neutral-50 object-cover"
                />
                <div className="absolute inset-0 rounded-2xl inset-ring inset-ring-neutral-900/10" />
              </div>
              <div>
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-neutral-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-neutral-50 px-3 py-1.5 font-medium text-neutral-600 hover:bg-neutral-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative max-w-xl">
                  <h3 className="mt-3 text-lg/6 font-semibold text-neutral-900 group-hover:text-neutral-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 text-sm/6 text-neutral-600">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex border-t border-neutral-900/5 pt-6">
                  <div className="relative flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-neutral-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-neutral-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-neutral-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
