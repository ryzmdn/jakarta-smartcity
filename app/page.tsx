"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDownIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import { AppHeading } from "@/components/app-heading";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
  { label: "Pengguna Transportasi", value: "1.3 Juta+" },
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

const people = [
  {
    name: "Open Space",
    role: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kesehatan & Olahraga",
    role: 121,
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kamp Musim Panas",
    role: 62,
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Grup Komunitas",
    role: 89,
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Kreasi dan Acara",
    role: 20,
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
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

      <section className="space-y-28 mx-auto max-w-7xl my-20 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-3xl lg:flex-auto">
              <p className="text-xl/8 text-neutral-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className="mt-10 max-w-2xl text-base/7 text-neutral-700">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwgqMD0KT8l3slbHqK9-fe3AQ_JvMbOoUuw&s"
                  alt=""
                  className="aspect-video"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 text-center lg:grid-cols-4">
          {METRICS_DATA.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col gap-y-4 max-w-xs text-left"
            >
              <h3 className="text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
                {stat.value}
              </h3>
              <p className="text-base/7 text-neutral-600">{stat.label}</p>

              <div className="text-sm/6 text-neutral-600 mt-7">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Provident similique nulla adipisci distinctio aut alias
                  consectetur natus. Numquam earum cupiditate at impedit
                  voluptatum sapiente, ullam neque iste provident obcaecati
                  blanditiis!
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="relative aspect-5/2 w-full h-180 overflow-hidden xl:mx-auto xl:max-w-7xl xl:px-8 xl:rounded-3xl">
        <div className="flex justify-center items-center size-full">
          <Image
            src="https://gbk.id/upload/1650345887-Hutan%20Kota%201.jpg"
            alt=""
            fill
            className="size-full object-cover pointer-events-none outline-1 -outline-offset-1 outline-black/5"
          />

          <div className="relative z-2 mx-auto flex max-w-2xl flex-col gap-16 bg-neutral-50 p-6 shadow-sm sm:rounded-3xl lg:mx-0 lg:min-w-4xl lg:flex-row lg:items-center xl:gap-x-8">
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-neutral-950 sm:text-4xl">
                Cari Tempat Healing
              </h2>
              <p className="mt-6 text-sm/6 text-pretty text-neutral-600">
                Lorem ipsum dolor sit amet consect adipisicing elit. Possimus
                magnam voluptatum cupiditate veritatis in accusamus quisquam.
              </p>

              <div className="flex flex-col gap-y-6 w-full my-5 py-5">
                {people.map((person) => (
                  <div
                    key={person.name}
                    className="relative flex items-center gap-x-10"
                  >
                    <div className="relative size-10 shrink-0">
                      <CheckCircleIcon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link href="#" className="focus:outline-hidden">
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="font-medium text-gray-900 leading-7">
                          {person.name}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {person.role} Tempat
                        </p>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-3/4 max-w-sm size-full rounded-2xl overflow-hidden">
              <Image
                src="https://wisatamilenial.com/wp-content/uploads/2021/11/Suasana-Pengunjung-Hutan-Kota-GBK-Image-From-@aaboy19.jpg"
                alt=""
                fill
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </div>

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
            <div
              key={link.title}
              className={cn(index === 4 && "col-span-2", "group relative")}
            >
              <img
                alt={link.image}
                src={link.image}
                className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
              />
              <h3 className="mt-6 text-sm text-neutral-500">
                <a href={link.href}>
                  <span className="absolute inset-0" />
                  {link.title}
                </a>
              </h3>
              <p className="text-base font-semibold text-neutral-900">
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
