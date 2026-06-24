"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const CULINARY_TITLE = "Cita Rasa Kuliner Betawi";
const CULINARY_SUBTITLE =
  "Jelajahi petualangan rasa legendaris dari sudut-sudut kota Jakarta";
const HERO_IMAGE =
  "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg";

const CATEGORIES = [
  { id: "all", label: "Semua Kuliner" },
  { id: "food", label: "Makanan Utama" },
  { id: "drink", label: "Minuman Segar" },
  { id: "spot", label: "Pusat Kuliner" },
];

const posts = [
  {
    id: 1,
    title: "Soto Betawi H. Ma'ruf",
    href: "#",
    description: "Kuliner legendaris Jakarta dengan kuah campuran santan dan susu yang gurih, dipadukan daging sapi rempah pilihan.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2021/04/20/soto-betawi-h-maruf-4.jpeg?w=600&q=90",
    location: "Taman Ismail Marzuki, Jakarta Pusat",
    category: "food"
  },
  {
    id: 2,
    title: "Kerak Telor Kemayoran",
    href: "#",
    description: "Makanan khas Betawi berbahan ketan, telur bebek/ayam, disajikan dengan serundeng kelapa, ebi, dan bawang goreng.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2023/06/17/kerak-telor-jakarta-1.jpeg?w=600&q=90",
    location: "Kawasan PRJ Kemayoran, Jakarta Pusat",
    category: "food"
  },
  {
    id: 3,
    title: "Nasi Uduk Kebon Kacang",
    href: "#",
    description: "Nasi uduk harum dibungkus daun pisang berbentuk kerucut, disajikan dengan ayam goreng khas dan sambal kacang.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2022/10/24/nasi-uduk-kebon-kacang_43.jpeg?w=600&q=90",
    location: "Kebon Kacang, Jakarta Pusat",
    category: "food"
  },
  {
    id: 4,
    title: "Bir Pletok Rempah Betawi",
    href: "#",
    description: "Minuman herbal khas Betawi kaya rempah seperti jahe, serai, dan kayu secang. Menghangatkan dan tanpa alkohol.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2021/02/19/bir-pletok.jpeg?w=600&q=90",
    location: "Setu Babakan, Jakarta Selatan",
    category: "drink"
  },
  {
    id: 5,
    title: "Es Selendang Mayang",
    href: "#",
    description: "Minuman tradisional penyegar dahaga berisi puding sagu kenyal warna-warni, disiram santan gurih dan sirup gula merah.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2023/04/11/es-selendang-mayang_43.jpeg?w=600&q=90",
    location: "Kota Tua, Jakarta Barat",
    category: "drink"
  },
  {
    id: 6,
    title: "Es Campur & Doger Tradisional",
    href: "#",
    description: "Minuman dingin legendaris bercita rasa manis legit dengan isian kelapa muda, ketan hitam, alpukat, dan tapai.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2022/04/05/es-campur-oyen_43.jpeg?w=600&q=90",
    location: "Pusat Kuliner Melawai, Jakarta Selatan",
    category: "drink"
  },
  {
    id: 7,
    title: "Jalan Sabang Street Food",
    href: "#",
    description: "Pusat jajanan malam legendaris di jantung Jakarta yang menawarkan aneka pilihan sate, nasi goreng, hingga martabak.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2019/07/26/d2836261-ebcf-42ad-8419-f5c71d6cc47c_169.jpeg?w=600&q=90",
    location: "Jl. H. Agus Salim, Gambir, Jakarta Pusat",
    category: "spot"
  },
  {
    id: 8,
    title: "Pusat Kuliner Malam Pecenongan",
    href: "#",
    description: "Destinasi kuliner legendaris Jakarta yang sangat populer dengan hidangan seafood segar dan martabak manis premium.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2016/09/20/86fa2e8a-e9fa-47cb-9c16-cf4c7d0577a7_169.jpg?w=600&q=90",
    location: "Jl. Pecenongan, Gambir, Jakarta Pusat",
    category: "spot"
  },
  {
    id: 9,
    title: "Food Court Lenggang Jakarta",
    href: "#",
    description: "Pusat kuliner tertata binaan pemprov di kawasan Monas yang menyajikan ratusan hidangan khas Nusantara dengan higienis.",
    imageUrl: "https://awsimages.detik.net.id/community/media/visual/2015/05/22/a3c94ec4-51cb-4029-bbdf-5f72cfda6e9b_169.jpg?w=600&q=90",
    location: "Kawasan IRTI Monas, Jakarta Pusat",
    category: "spot"
  }
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

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <section
        className="relative h-150 flex items-center justify-center overflow-hidden bg-neutral-900"
        aria-labelledby="page-title"
      >
        <img
          alt="Latar belakang hidangan soto betawi dan kerak telor khas jakarta"
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h1
            id="page-title"
            className="text-4xl font-extrabold sm:text-5xl lg:text-6xl tracking-tight"
          >
            {CULINARY_TITLE}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-200 font-light max-w-2xl mx-auto">
            {CULINARY_SUBTITLE}
          </p>
        </div>
      </section>

      <section
        className="max-w-6xl mx-auto px-4 py-8 relative z-20 -mt-12"
        aria-label="Kontrol Pencarian dan Kategori"
      >
        <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="relative flex-1 max-w-md">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Cari makanan, minuman, atau spot..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-2xl pl-12 pr-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-all duration-200"
            />
          </div>

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
                    : "bg-neutral-50 text-neutral-600 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200/60"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section
        className="max-w-7xl mx-auto px-4 py-8"
        aria-labelledby="grid-title"
      >
        <h2 id="grid-title" className="sr-only">
          Daftar Kuliner Terpilih
        </h2>
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl">
              Rekomendasi Kuliner Terpilih
            </h2>
            <p className="mt-2 text-lg/8 text-neutral-600">
              Cari dan temukan hidangan legendaris serta pusat kuliner terpopuler di Jakarta.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl bg-neutral-900 px-8 pt-80 pb-8 sm:pt-48 lg:pt-80"
              >
                <img
                  alt={post.title}
                  src={post.imageUrl}
                  className="absolute inset-0 -z-10 size-full object-cover"
                />
                <div className="absolute inset-0 -z-10 bg-linear-to-t from-neutral-900 via-neutral-900/40" />
                <div className="absolute inset-0 -z-10 rounded-2xl inset-ring inset-ring-neutral-900/10" />

                <div className="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm/6 text-neutral-300">
                  <p>{post.location}</p>
                </div>
                <h3 className="mt-3 text-lg/6 font-semibold text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl">
        <div className="relative overflow-hidden rounded-lg lg:h-96">
          <div className="absolute inset-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126922.39578672027!2d106.7833604!3d-6.2217828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1skuliner%20jakarta!5e0!3m2!1sid!2sid!4v1718500000001!5m2!1sid!2sid"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="size-full border-0"
            />
          </div>
          <div aria-hidden="true" className="relative h-96 w-full lg:hidden" />
          <div aria-hidden="true" className="relative h-32 w-full lg:hidden" />
          <div className="absolute inset-x-0 bottom-0 rounded-br-lg rounded-bl-lg bg-black/75 p-6 backdrop-blur-sm backdrop-filter sm:flex sm:items-center sm:justify-between lg:inset-x-auto lg:inset-y-0 lg:w-96 lg:flex-col lg:items-start lg:rounded-tl-lg lg:rounded-br-none">
            <div>
              <h2 className="text-xl font-bold text-white">
                Peta Destinasi Kuliner Jakarta
              </h2>
              <p className="mt-1 text-sm text-neutral-300">
                Temukan lokasi pusat jajanan malam, restoran legendaris, dan area kuliner terdekat di sekitar Jakarta.
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/kuliner+jakarta/@-6.2217828,106.7833604,12z?entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex shrink-0 items-center justify-center rounded-md border border-white/25 px-4 py-3 text-base font-medium text-white hover:bg-white/10 sm:mt-0 sm:ml-8 lg:ml-0 lg:w-full"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
