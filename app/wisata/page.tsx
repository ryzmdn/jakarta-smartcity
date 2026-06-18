"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const WISATA_TITLE = "Destinasi Wisata Jakarta";
const WISATA_SUBTITLE =
  "Jelajahi perpaduan cagar budaya bersejarah, pusat hiburan modern, dan wisata bahari eksotis";
const HERO_IMAGE =
  "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg";

const DESTINATIONS = [
  {
    id: "monas",
    category: "historical",
    name: "Monumen Nasional (Monas)",
    location: "Gambir, Jakarta Pusat",
    description:
      "Tugu peringatan setinggi 132 meter yang didirikan untuk mengenang perjuangan kemerdekaan. Di puncaknya terdapat cawan berlapis lembaran emas murni seberat 50 kg berbentuk lidah api.",
    rating: "4.8",
    image: "https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg",
    imageAlt: "Tugu Monumen Nasional tegak berdiri di bawah langit biru",
  },
  {
    id: "kota-tua",
    category: "historical",
    name: "Kota Tua Jakarta",
    location: "Pinangsia, Jakarta Barat",
    description:
      "Kawasan bersejarah seluas 1,3 km persegi yang menampilkan gedung-gedung kolonial Belanda abad ke-17. Sangat ikonik dengan Lapangan Fatahillah, Museum Sejarah Jakarta, dan persewaan sepeda ontel.",
    rating: "4.7",
    image:
      "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    imageAlt:
      "Museum Fatahillah dengan sepeda ontel warna-warni di halaman depan",
  },
  {
    id: "tmii",
    category: "nature",
    name: "Taman Mini Indonesia Indah",
    location: "Cipayung, Jakarta Timur",
    description:
      "Kawasan taman wisata budaya seluas 150 hektare yang merangkum kebudayaan bangsa Indonesia dalam miniatur kepulauan, aneka rumah adat (anjungan), pakaian tradisional, hingga museum iptek.",
    rating: "4.7",
    image:
      "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    imageAlt: "Danau kepulauan Indonesia di tengah kompleks TMII",
  },
  {
    id: "kepulauan-seribu",
    category: "nature",
    name: "Kepulauan Seribu",
    location: "Kabupaten Kepulauan Seribu",
    description:
      "Gugusan pulau tropis indah di Teluk Jakarta yang menawarkan wisata bahari mulai dari snorkeling, diving, hingga penginapan resort eksotis di Pulau Macan, Pulau Pramuka, dan Pulau Pari.",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Dermaga kayu dan air laut bening kehijauan di Kepulauan Seribu",
  },
  {
    id: "ancol",
    category: "modern",
    name: "Dunia Fantasi (Dufan) Ancol",
    location: "Pademangan, Jakarta Utara",
    description:
      "Taman hiburan outdoor terbesar di Jakarta dengan puluhan wahana memicu adrenalin seperti Halilintar, Kora-kora, Niagara-gara, hingga Istana Boneka yang ramah anak.",
    rating: "4.6",
    image:
      "https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/12/29/591e6cad-919d-4c23-95a5-0a7f6d2b866a-1735466532176-da6a7edce3a96e416b7f994f5bf87670.png",
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
      {
        time: "08:00 - 11:00",
        activity:
          "Mengeksplorasi Museum Sejarah Jakarta (Fatahillah) dan bersepeda ontel di Kota Tua.",
      },
      {
        time: "11:30 - 13:00",
        activity:
          "Makan siang kuliner legendaris Betawi di sekitar area Kota Tua.",
      },
      {
        time: "14:00 - 17:00",
        activity:
          "Mengunjungi Monumen Nasional (Monas) hingga naik ke cawan pelataran puncak.",
      },
    ],
  },
  {
    id: "one-day-nature",
    title: "Rute Alam 1 Hari",
    steps: [
      {
        time: "07:00 - 08:30",
        activity:
          "Menyeberang dari dermaga Marina Ancol menuju gugusan Kepulauan Seribu.",
      },
      {
        time: "09:00 - 12:00",
        activity:
          "Snorkeling dan foto underwater di sekitar terumbu karang Pulau Pari.",
      },
      {
        time: "13:00 - 16:00",
        activity:
          "Menikmati seafood bakar segar dan bersantai di hamparan pasir putih Pulau Macan.",
      },
    ],
  },
];

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    href: "#",
    description:
      "Optio sit exercitation et ex ullamco aliquid explicabo. Dolore do ut officia anim non ad eu. Magna laboris incididunt commodo elit ipsum.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    href: "#",
    description:
      "Dolore commodo in nulla do nulla esse consectetur. Adipisicing voluptate velit sint adipisicing ex duis elit deserunt sint ipsum. Culpa in exercitation magna adipisicing id reprehenderit consectetur culpa eu cillum.",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function WisataPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeItinerary, setActiveItinerary] = useState("one-day-heritage");

  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesCategory =
      selectedCategory === "all" || dest.category === selectedCategory;
    const matchesSearch =
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const selectedItinerary =
    ITINERARIES.find((i) => i.id === activeItinerary) || ITINERARIES[0];

  return (
    <>
      {/* Hero Section */}
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
          {posts.map((post) => (
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
