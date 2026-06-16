"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDownIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";
import { AppHeading } from "@/components/app-heading";
import { cn } from "@/lib/utils";

const HERO_TITLE = "Selamat Datang di Masa Depan Jakarta";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop";

const PORTAL_LINKS = [
  {
    title: "Tentang Kota",
    desc: "Kenali lebih dekat profil, sejarah panjang, dan visi Jakarta menjadi Kota Global masa depan.",
    href: "/tentang-kota",
    image:
      "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kebudayaan Betawi",
    desc: "Telusuri eksotisme ondel-ondel, tradisi palang pintu, hingga musik legendaris khas Betawi.",
    href: "/budaya",
    image:
      "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kuliner Nusantara",
    desc: "Manjakan lidah dengan kerak telor, soto Betawi gurih, serta minuman pletok yang menghangatkan.",
    href: "/kuliner",
    image:
      "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Destinasi Wisata",
    desc: "Cari inspirasi liburan seru ke cagar sejarah Kota Tua hingga keindahan tropis Kepulauan Seribu.",
    href: "/wisata",
    image:
      "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Transformasi Digital",
    desc: "Eksplorasi ekosistem Jakarta Smart City, pilar kota cerdas, dan super-app inovatif JAKI.",
    href: "/digitalisasi",
    image:
      "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop",
  },
];

const METRICS_DATA = [
  { label: "JakWifi Gratis", value: "10,500+ Titik" },
  { label: "Laporan CRM Selesai", value: "98.7% Tuntas" },
  { label: "Pengguna Transportasi Harian", value: "1.3 Juta+" },
];

const FAQS = [
  {
    q: "Apa itu Nusantara Digital City?",
    a: "Sebuah inisiatif terpadu untuk mempromosikan digitalisasi identitas, pariwisata, sejarah, budaya, dan pelayanan publik kota-kota di Indonesia agar ramah aksesibilitas dan berkelanjutan bagi seluruh kalangan.",
  },
  {
    q: "Bagaimana cara warga ikut serta dalam Smart City?",
    a: "Warga dapat berpartisipasi aktif dengan memantau kota dan melaporkan fasilitas publik yang rusak lewat aplikasi JAKI, menggunakan transportasi umum terintegrasi, serta melestarikan produk budaya secara digital.",
  },
];

const dataKoleksi = [
  {
    name: "Kuliner Khas Betawi",
    imageSrc:
      "https://awsimages.detik.net.id/community/media/visual/2020/11/30/kuliner-malam-3.jpeg?w=600&q=90",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Perpustakaan Kota",
    imageSrc:
      "https://www.gramedia.com/blog/content/images/2022/07/293484507_1120981402183693_7091681015909269910_n.jpg",
    imageAlt: "Man wearing a charcoal neutral cotton t-shirt.",
  },
  {
    name: "Open Space",
    imageSrc:
      "https://www.dbl.id/thumbs/extra-large/uploads/post/2025/06/21/9%20Public%20Space%20di%20Jakarta.png",
    imageAlt: "Person sitting at a wooden desk with paper note organizer.",
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <AppHeading
        title={HERO_TITLE}
        heroImageSrc={HERO_IMAGE}
        collections={dataKoleksi}
      />

      <section className="mx-auto max-w-7xl my-10 px-4 py-8 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-neutral-900 sm:text-5xl">
            Trusted by creators worldwide
          </h2>
          <p className="mt-4 text-lg/8 text-neutral-600">
            Lorem ipsum dolor sit amet consect adipisicing possimus.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center my-20 lg:grid-cols-3">
          {METRICS_DATA.map((stat) => (
            <div
              key={stat.label}
              className="mx-auto flex max-w-xs flex-col gap-y-4"
            >
              <dt className="text-base/7 text-neutral-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="max-w-6xl mx-auto px-4 py-20"
        aria-labelledby="grid-title"
      >
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2
            id="grid-title"
            className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl"
          >
            Layanan & Eksplorasi Pintar
          </h2>
          <p className="mt-4 text-slate-600">
            Akses langsung ke seluruh pilar informasi utama pembangunan dan
            pelestarian identitas digital Jakarta.
          </p>
        </div>

        <div className="grid mt-6 space-y-12 lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
          {PORTAL_LINKS.map((link, index) => (
            <div key={link.title} className={cn(index === 4 && "col-span-2", "group relative")}>
              <img
                alt={link.image}
                src={link.image}
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={link.href}>
                  <span className="absolute inset-0" />
                  {link.title}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">
                {link.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="bg-slate-100/60 border-y border-slate-200/50 py-20"
        aria-labelledby="faq-title"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              id="faq-title"
              className="text-3xl font-bold tracking-tight text-slate-800"
            >
              Pertanyaan Umum (FAQ)
            </h2>
            <p className="mt-3 text-slate-600">
              Ketahui segala informasi esensial seputar ekosistem Nusantara
              Digital City.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-xs overflow-hidden transition-all duration-250"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-6 text-left outline-none focus:bg-slate-50 cursor-pointer"
                  >
                    <span className="font-bold text-slate-800 text-sm sm:text-base flex items-center gap-2">
                      <CheckBadgeIcon className="size-5 text-sky-600 shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDownIcon
                      className={`size-5 text-slate-400 shrink-0 transition-transform duration-250 ${isOpen ? "rotate-180 text-sky-600" : ""}`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "max-h-[300px] border-t border-slate-100"
                        : "max-h-0"
                    } overflow-hidden`}
                  >
                    <div className="p-6 text-sm text-slate-600 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
