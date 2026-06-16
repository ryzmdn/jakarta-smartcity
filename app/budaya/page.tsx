"use client";

import { useState } from "react";
import { ArrowUpIcon, ChevronRightIcon, UsersIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

const CULTURE_TITLE = "Warisan Budaya Betawi";
const CULTURE_SUBTITLE =
  "Melestarikan nilai luhur tradisi di tengah pusaran modernitas Jakarta";
const HERO_IMAGE =
  "https://cdn0-production-images-kly.akamaized.net/MosRe9phwynaMY4KfLq7XTKAvQQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1375036/original/010506800_1476592430-20161016--Serunya-Karnaval-Kebudayaan-Betawi-di-CFD-Jakarta--Faizal-Fanani-03.jpg";

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
    description:
      "Boneka raksasa ikonik setinggi 2,5 meter yang dihias dengan pakaian adat Betawi. Awalnya berfungsi sebagai penolak bala, kini Ondel-ondel menjadi ikon kegembiraan dalam festival dan pesta rakyat.",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq6E7iU9JEiHxtqGppOY-Sz_J8srw0tLHnTTqZnAbrgAjo7Ev29oWiqgAh1xaQ6AXxN02EVV0Fa-gIsUvv0inBaMuUf4OZREQql2M_1rrIrKth0m7MYvnIOX5tyrn-EvTygJb78B-7Uec/s1600/Ondel+Ondel.jpg",
    imageAlt: "Sepasang boneka raksasa tradisional Ondel-ondel Betawi",
  },
  {
    id: "palang-pintu",
    category: "traditions",
    title: "Palang Pintu",
    description:
      "Tradisi menyambut tamu atau mempelai laki-laki dalam pernikahan adat Betawi. Tradisi ini menggabungkan seni bela diri Pencak Silat, berbalas pantun jenaka, dan pembacaan ayat suci Al-Qur'an.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pencak_Silat_Betawi_2.jpg/960px-Pencak_Silat_Betawi_2.jpg",
    imageAlt: "Dua pesilat Betawi sedang bertarung dalam prosesi Palang Pintu",
  },
  {
    id: "lenong",
    category: "arts",
    title: "Lenong Betawi",
    description:
      "Teater rakyat Betawi yang diiringi musik Gambang Kromong. Pertunjukan sarat dengan humor spontan, kritik sosial yang dikemas santai, serta pesan-pesan moral kehidupan sehari-hari.",
    image:
      "https://cnc-magazine.oramiland.com/parenting/images/artikel_HERO_1_Wb7acus.width-800.format-webp.webp",
    imageAlt: "Pertunjukan teater tradisional Lenong Betawi",
  },
  {
    id: "rumah-kebaya",
    category: "clothing",
    title: "Rumah Kebaya",
    description:
      "Rumah adat Betawi yang memiliki atap berbentuk seperti lipatan kebaya jika dilihat dari samping. Karakteristik utamanya adalah teras luas (bale) untuk menyambut tamu dengan kehangatan.",
    image:
      "https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg",
    imageAlt: "Rumah adat Kebaya khas Betawi di TMII",
  },
  {
    id: "gambang-kromong",
    category: "traditions",
    title: "Gambang Kromong",
    description:
      "Orkes musik khas Betawi yang memadukan unsur musik gamelan tradisional dengan alat musik tiup dan gesek khas Tionghoa, menciptakan harmoni akulturasi budaya yang unik.",
    image:
      "https://superlive.id/storage/superadventure/2020/10/04/6a759dfce85f.jpg",
    imageAlt: "Kelompok pemusik memainkan alat musik Gambang Kromong",
  },
  {
    id: "kebaya-encim",
    category: "clothing",
    title: "Kebaya Encim",
    description:
      "Busana tradisional wanita Betawi dengan akulturasi budaya Tionghoa. Terbuat dari bahan katun tipis berhiaskan bordir indah di bagian ujungnya, mencerminkan keanggunan yang bersahaja.",
    image:
      "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg",
    imageAlt: "Peragaan busana Kebaya Encim khas Betawi",
  },
];

const PRESERVATION_STATS = [
  { label: "Cagar Budaya Teregistrasi", value: "120+", icon: UsersIcon },
  { label: "Sanggar Seni Aktif", value: "350+", icon: UsersIcon },
  { label: "Festival Budaya / Tahun", value: "24+", icon: UsersIcon },
];

const features = [
  {
    name: "Three card types",
    description:
      "Today, Next, and Someday cards allow you to defer your dreams into the future.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-08-detail-01.jpg",
    imageAlt: "Green cardstock box containing white, beige, and brown cards.",
  },
  {
    name: "The perfect mix",
    description:
      "Each refill pack contains plenty of cards to last you a month of procrastination.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-08-detail-02.jpg",
    imageAlt: "Green cardstock box open with 50 cards inside.",
  },
  {
    name: "Dot grid backs",
    description:
      "Flip a card over to doodle during meetings when you should be listening.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-08-detail-03.jpg",
    imageAlt:
      "Detail of white today card, beige next card, and brown someday card with dot grid.",
  },
  {
    name: "Refill packs",
    description:
      "Subscribe and save on routine refill packs to keep you productive all year long.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/product-feature-08-detail-04.jpg",
    imageAlt:
      "Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.",
  },
];

export default function BudayaPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? CULTURE_ITEMS
      : CULTURE_ITEMS.filter((item) => item.category === selectedCategory);

  const handleToggleExpand = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <>
      <section
        className="relative h-150 flex items-center justify-center overflow-hidden bg-neutral-900"
        aria-labelledby="hero-title"
      >
        <img
          alt={`Latar belakang pemandangan kota`}
          src={HERO_IMAGE}
          className="absolute inset-0 w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-900/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center text-white z-10">
          <h1
            id="hero-title"
            className="text-4xl font-semibold sm:text-5xl lg:text-6xl tracking-tight"
          >
            Kenalan Lebih Dekat Tentang Kota Jakarta
          </h1>
        </div>
      </section>

      <section
        className="relative z-20 -mt-16 max-w-6xl mx-auto px-4"
        aria-label="Statistik Kota"
      >
        <div className="mx-auto max-w-7xl bg-neutral-50 rounded-2xl shadow-md border border-neutral-300 lg:py-8">
          <div className="lg:flex lg:justify-center divide-y divide-neutral-300 lg:divide-x lg:divide-y-0">
            {PRESERVATION_STATS.map((perk, perkIdx) => (
              <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <perk.icon
                    aria-hidden="true"
                    className="size-8 shrink-0 text-neutral-900"
                  />
                  <div className="ml-4 flex flex-auto flex-col-reverse">
                    <h3 className="font-medium text-neutral-900">
                      {perk.label}
                    </h3>
                    <p className="text-sm text-neutral-500">{perk.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-3xl">
          <h2 id="features-heading" className="font-medium text-gray-500">
            Focus
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple productivity
          </p>
          <p className="mt-4 text-gray-500">
            Focus allows you to plan 10 daily tasks, while also thinking ahead
            about what&apos;s next. Forget distracting digital apps and embrace
            these small, sturdy pieces of paper.
          </p>
        </div>

        <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col-reverse">
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </p>
              </div>
              <img
                alt={feature.imageAlt}
                src={feature.imageSrc}
                className="aspect-square w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col gap-y-5 divide-y divide-neutral-300">
          {[1, 2, 3].map((_) => (
            <div key={_} className="relative flex items-center gap-x-8 pb-5">
              <div className="relative flex items-center aspect-video h-28 rounded-lg overflow-hidden">
                <Image
                  src="https://lh3.googleusercontent.com/gps-cs-s/APNQkAEIxuteYNnbiFgvoHEhFgNpX0YM_fyEQyk5MZKTQLfMyfOPhvrzdtjIx8k1V4T7ItRHXiLabHlbeROoMR7YTXBqgOcGwTWBNhTGgQ6bA1p2keml7lmB2MEuCn7zZVVDcBvDV5SP=w138-h138-n-k-no"
                  alt=""
                  fill
                  className="object-cover size-full"
                />
              </div>
              <div className="space-y-px text-sm/6 text-neutral-600">
                <h3 className="text-lg font-semibold text-neutral-900">
                  National Museum of Indonesia
                </h3>
                <div className="flex items-center gap-x-2">
                  <span>4,3</span>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((_) => (
                      <StarIcon key={_} className="size-4 text-yellow-500" />
                    ))}
                  </div>
                  <span>(10K)</span>
                  <span className="text-[0.5rem]">&bull;</span>
                  <span>Museum</span>
                </div>
                <p>Jl. Medan Merdeka Barat No.12, RT.2/RW.3</p>
                <div className="flex items-center gap-x-2">
                  <p>Closed</p>
                  <span className="text-[0.5rem]">&bull;</span>
                  <p>Buka 09.00 AM</p>
                </div>
              </div>

              <ArrowUpIcon className="absolute top-0 right-0 size-2.5 rotate-45 text-neutral-500" />
            </div>
          ))}
        </div>

        <div className="relative -order-1 rounded-2xl overflow-hidden border border-neutral-300 shadow-sm lg:order-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d126915.22271816999!2d106.7579658!3d-6.2471919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smuseum%20budaya%20di%20jakarta!5e0!3m2!1sid!2sid!4v1718500000000!5m2!1sid!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="size-full"
          />
        </div>
      </section>
    </>
  );
}
