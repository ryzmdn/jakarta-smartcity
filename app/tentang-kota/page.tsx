"use client";

import { useState } from "react";
import {
  BuildingOfficeIcon,
  MapIcon,
  ClockIcon,
  CpuChipIcon,
  CheckIcon,
  UsersIcon,
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/24/outline";
import { Fragment } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'

const tabs = [
  {
    name: 'Transjakarta',
    features: [
      {
        
        name: 'Jaringan BRT Terpanjang di Dunia',
        description:
          'Transjakarta melayani rute bus rapid transit terintegrasi yang menghubungkan seluruh koridor utama di Jakarta demi efisiensi perjalanan harian Anda.',
        imageSrc: 'https://www.jakarta.go.id/uploads/contents/content--20230406021851.jpeg',
        imageAlt: 'Bus Transjakarta berwarna biru oranye sedang melintas di jalur khusus BRT.',
      },
    ],
  },
  {
    name: 'LRT Jakarta',
    features: [
      {
        name: 'Konektivitas Cepat & Ramah Lingkungan',
        description:
          'LRT Jakarta hadir sebagai moda transportasi berbasis rel modern dengan efisiensi tinggi, menghubungkan area strategis perkotaan dengan waktu tempuh yang andal.',
        imageSrc: 'https://asset.kompas.com/crops/exmdHqy6wXmVgRnS-aSWCoTbhAw=/115x75:1274x847/1200x800/data/photo/2023/09/16/6504f38939e78.jpeg',
        imageAlt:
          'Kereta LRT Jakarta modern yang melintasi jalur layang perkotaan.',
      },
    ],
  },
  {
    name: 'KAI Commuter',
    features: [
      {
        name: 'Penyambung Wilayah Metropolitan Jabodetabek',
        description:
          'KRL Commuter Line menghubungkan wilayah penyangga sekitar Jakarta (Bogor, Depok, Tangerang, Bekasi) untuk mobilitas komuter harian berskala besar.',
        imageSrc: 'https://kci.id/app/sam/assets/about_us/c8b78de448ca4223c258358a4db09cce.jpeg',
        imageAlt: 'Suasana peron stasiun KRL Commuter Line yang bersih dan tertib.',
      },
    ],
  },
  {
    name: 'MRT Jakarta',
    features: [
      {
        name: 'Transportasi Cepat Terpadu Bawah Tanah',
        description:
          'Moda Raya Terpadu (MRT) Jakarta memadukan kecepatan waktu tempuh dengan fasilitas berkelas internasional untuk kenyamanan bepergian di jantung kota.',
        imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/3/34/MRTset3.jpg',
        imageAlt: 'Stasiun bawah tanah MRT Jakarta yang modern, luas, dan ramah disabilitas.',
      },
    ],
  },
]

const CITY_NAME = "DKI Jakarta";
const CITY_SUBTITLE = "Pusat Kolaborasi, Inovasi, dan Budaya Nusantara";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop";

const ADVANTAGES_DATA = [
  {
    title: "Aksesibilitas Terbaik",
    description:
      "Sistem transportasi publik terintegrasi penuh seperti MRT, LRT, TransJakarta, dan Commuter Line memudahkan mobilitas warga dan turis.",
  },
  {
    title: "Kota Pintar & Digital",
    description:
      "Segala urusan birokrasi, laporan fasilitas umum, hingga pantauan banjir terintegrasi secara cerdas lewat platform super-app JAKI.",
  },
  {
    title: "Pusat Ekonomi & Kreatif",
    description:
      "Jakarta menawarkan peluang tanpa batas dengan dukungan infrastruktur bisnis dan fasilitas publik ramah komunitas digital.",
  },
];

const SECTIONS_DATA = [
  {
    id: "geography",
    title: "Geografi & Administratif",
    icon: MapIcon,
    image:
      "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Kepulauan Seribu dengan keindahan alam laut tropis",
    heading: "Bentang Alam dari Darat hingga Laut",
    content:
      "Dengan luas daratan sekitar 661,5 km², DKI Jakarta terbagi menjadi 5 Kota Administrasi (Pusat, Utara, Barat, Selatan, Timur) serta 1 Kabupaten Administrasi, yaitu Kepulauan Seribu yang menyuguhkan keindahan wisata bahari eksotis.",
  },
  {
    id: "smartcity",
    title: "Visi Smart City",
    icon: CpuChipIcon,
    image:
      "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Layar monitor pusat komando kendali data Jakarta Smart City",
    heading: "Efisiensi Melalui Teknologi Cerdas",
    content:
      "Melalui inisiatif Jakarta Smart City (JSC), pemerintah menghadirkan solusi digital berbasis data untuk mengatasi tantangan perkotaan. Integrasi IoT, sensor lalu lintas, serta pelaporan warga secara real-time mewujudkan tata kelola kota yang responsif dan transparan.",
  },
];

const perks = [
  {
    name: "Estimasi Populasi",
    description: "10.6 Juta+",
    icon: UsersIcon,
  },
  {
    name: "Transportasi Terintegrasi",
    description: "4 Sistem Utama",
    icon: MapIcon,
  },
  {
    name: "Wilayah Administratif",
    description: "5 Kota & 1 Kabupaten",
    icon: GlobeAsiaAustraliaIcon,
  },
];

const features = [
  {
    name: "Menuju Gerbang Kota Global",
    description:
      "Jakarta kini bertransformasi menjadi Kota Global yang inklusif, tangguh, dan berkelanjutan. Meskipun mengalami transisi administratif, Jakarta tetap menjadi episentrum ekonomi nasional, pusat diplomasi regional, serta magnet kreativitas dan inovasi yang tak pernah padam.",
    imageSrc:
      "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Gedung pencakar langit modern di pusat bisnis Jakarta.",
  },
  {
    name: "Rentang Waktu Peradaban",
    description:
      "Bermula dari pelabuhan Sunda Kelapa yang ramai pada abad ke-14, wilayah ini berkembang menjadi Jayakarta, Batavia, hingga akhirnya ditetapkan sebagai ibu kota negara dengan nama Jakarta. Setiap era meninggalkan jejak sejarah yang kini mewarnai budaya dan arsitektur kota.",
    imageSrc:
      "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Kawasan bersejarah Kota Tua Batavia yang sarat cerita sejarah.",
  },
];

const timeline = [
  {
    name: "Inisiasi Smart City",
    description:
      "Peluncuran perdana inisiatif Jakarta Smart City untuk mengintegrasikan data pelayanan publik.",
    date: "Dec 2014",
    dateTime: "2014-12",
  },
  {
    name: "Super-App JAKI Lahir",
    description:
      "Perilisan Jakarta Kini (JAKI) sebagai aplikasi satu pintu untuk akses semua informasi perkotaan.",
    date: "Dec 2019",
    dateTime: "2019-12",
  },
  {
    name: "Integrasi Transportasi",
    description:
      "Peresmian sistem JakLingko yang mengintegrasikan tarif dan operasional antarmoda transportasi umum.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Menuju Kota Global",
    description:
      "Akselerasi teknologi IoT dan kecerdasan buatan (AI) guna mendukung visi Jakarta sebagai hub kota global.",
    date: "Mar 2024",
    dateTime: "2024-03",
  },
];

const people = [
  {
    name: "Jakarta Barat",
    role: "West Jakarta, Kebonjeruk, West Jakarta City, Jakarta",
    imageUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126937.01276221518!2d106.67485684302311!3d-6.159991597165707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f7c9d110d719%3A0x300c5e82dd4b8a0!2sWest%20Jakarta%2C%20Kebonjeruk%2C%20West%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1781622538056!5m2!1sen!2sid",
  },
  {
    name: "Jakarta Pusat",
    role: "Central Jakarta, Central Jakarta City, Jakarta",
    imageUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63465.84333880962!2d106.79526462411086!3d-6.182226079822502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f436b8c94b07%3A0x6ea6d5398b7c82f6!2sCentral%20Jakarta%2C%20Central%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1781622749348!5m2!1sen!2sid",
  },
  {
    name: "Jakarta Timur",
    role: "East Jakarta, East Jakarta City, Jakarta",
    imageUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253825.43284071618!2d106.74020433755702!3d-6.260781083248743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f2d148fbe713%3A0x6e667d52ebedf5a9!2sEast%20Jakarta%2C%20East%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1781622899090!5m2!1sen!2sid",
  },
  {
    name: "Jakarta Selatan",
    role: "South Jakarta, South Jakarta City, Jakarta",
    imageUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08080611257!2d106.71967679481901!3d-6.283929462250564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1ec2422b0b3%3A0x39a0d0fe47404d02!2sSouth%20Jakarta%2C%20South%20Jakarta%20City%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1781622950499!5m2!1sen!2sid",
  },
  {
    name: "Kepulauan Seribu",
    role: "Kepulauan Seribu Regency, Jakarta",
    imageUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d737576.199694813!2d106.17911345442984!3d-5.5418494800391285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41d68cd396621f%3A0xa06e871c66df72b3!2sKepulauan%20Seribu%20Regency%2C%20Jakarta!5e0!3m2!1sen!2sid!4v1781622991994!5m2!1sen!2sid",
  },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TentangKotaPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const activeSection =
    SECTIONS_DATA.find((s) => s.id === activeTab) || SECTIONS_DATA[0];

  return (
    <>
      <section
        className="relative h-150 flex items-center justify-center overflow-hidden bg-neutral-900"
        aria-labelledby="hero-title"
      >
        <img
          alt={`Latar belakang pemandangan kota ${CITY_NAME}`}
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
            {perks.map((perk, perkIdx) => (
              <div key={perkIdx} className="py-8 lg:w-1/3 lg:flex-none lg:py-0">
                <div className="mx-auto flex max-w-xs items-center px-4 lg:max-w-none lg:px-8">
                  <perk.icon
                    aria-hidden="true"
                    className="size-8 shrink-0 text-neutral-900"
                  />
                  <div className="ml-4 flex flex-auto flex-col-reverse">
                    <h3 className="font-medium text-neutral-900">
                      {perk.name}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {perk.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Visi & Misi Kota Pintar</h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:max-w-4xl lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Jakarta terus melangkah maju dengan visi mewujudkan kota pintar berkelanjutan. Kami memanfaatkan teknologi untuk mempermudah hidup warga, meningkatkan ketangguhan infrastruktur, dan mewujudkan transparansi tata kelola pemerintahan kota.
              </p>
              <p className="mt-10 max-w-3xl text-base/7 text-gray-700">
                Melalui kolaborasi lintas sektor antara pemerintah, swasta, akademisi, dan partisipasi aktif seluruh elemen masyarakat, Jakarta bertransformasi menjadi kota global yang tidak hanya cerdas teknologinya tetapi juga berdaya saing tinggi dan ramah bagi setiap warga.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Teknologi untuk Meningkatkan Kualitas Hidup Warga
          </h2>
          <p className="mt-6 text-base/7 text-gray-600">
            Dampak nyata teknologi cerdas dirasakan langsung dalam peningkatan transparansi layanan publik, efisiensi mobilitas, dan integrasi penanggulangan masalah perkotaan.
          </p>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
            <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">4 Juta+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-gray-900">Pengguna Aktif JAKI</p>
              <p className="mt-2 text-base/7 text-gray-600">Masyarakat Jakarta mengandalkan aplikasi super untuk kebutuhan pelaporan dan informasi publik.</p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">98.7%</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">
                Respons Cepat Aduan
              </p>
              <p className="mt-2 text-base/7 text-gray-400">
                Tingkat penyelesaian laporan pengaduan masyarakat secara berkala oleh tim cepat tanggap kota.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
            <p className="flex-none text-3xl font-bold tracking-tight text-white">10.500+</p>
            <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
              <p className="text-lg font-semibold tracking-tight text-white">Titik Wifi Gratis</p>
              <p className="mt-2 text-base/7 text-indigo-200">
                Titik internet gratis (JakWifi) yang dipasang merata di seluruh kelurahan di Jakarta.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-16 space-y-16">
          {features.map((feature, featureIdx) => (
            <div
              key={feature.name}
              className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
            >
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-1"
                    : "lg:col-start-8 xl:col-start-9",
                  "mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4",
                )}
              >
                <h3 className="text-xl font-semibold text-neutral-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-neutral-500 leading-7">
                  {feature.description}
                </p>
              </div>
              <div
                className={classNames(
                  featureIdx % 2 === 0
                    ? "lg:col-start-6 xl:col-start-5"
                    : "lg:col-start-1",
                  "flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8",
                )}
              >
                <img
                  alt={feature.imageAlt}
                  src={feature.imageSrc}
                  className="aspect-5/2 w-full rounded-lg bg-neutral-100 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl bg-blue-600 px-4 py-24 sm:px-6 lg:px-8 xl:rounded-4xl">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm/6 font-semibold text-neutral-200"
              >
                <svg
                  viewBox="0 0 4 4"
                  aria-hidden="true"
                  className="mr-4 size-1 flex-none"
                >
                  <circle r={2} cx={2} cy={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  aria-hidden="true"
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-neutral-100/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                />
              </time>
              <p className="mt-6 text-lg/8 font-semibold tracking-tight text-neutral-100">
                {item.name}
              </p>
              <p className="mt-1 text-base/7 text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-neutral-900">
                Bentang Alam dari Darat hingga Laut
              </h2>
              <p className="mt-4 text-neutral-500">
                Dengan luas daratan sekitar 661,5 km², DKI Jakarta terbagi
                menjadi 5 Kota Administrasi (Pusat, Utara, Barat, Selatan,
                Timur) serta 1 Kabupaten Administrasi, yaitu Kepulauan Seribu
                yang menyuguhkan keindahan wisata bahari eksotis.
              </p>
            </div>
            <img
              alt=""
              src="https://tailwindui.com/plus-assets/img/ecommerce-images/incentives-07-hero.jpg"
              className="aspect-3/2 w-full rounded-2xl bg-neutral-100 object-cover"
            />
          </div>

          <ul
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <iframe
                  src={person.imageUrl}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5 shadow-sm"
                />
                <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-neutral-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-neutral-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="features-heading" className="mx-auto max-w-7xl py-32 sm:px-2 lg:px-8">
        <div className="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
          <div className="max-w-3xl">
            <h2 id="features-heading" className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Moda Transportasi Jakarta
            </h2>
            <p className="mt-4 text-neutral-500">
              Jakarta terus memperkuat integrasi antarmoda transportasi guna memberikan kemudahan perjalanan, kepastian waktu, dan kenyamanan mobilitas harian bagi seluruh warga kota.
            </p>
          </div>

          <TabGroup className="mt-4">
            <div className="-mx-4 flex overflow-x-auto sm:mx-0">
              <div className="flex-auto border-b border-neutral-200 px-4 sm:px-0">
                <TabList className="-mb-px flex space-x-10">
                  {tabs.map((tab) => (
                    <Tab
                      key={tab.name}
                      className="border-b-2 border-transparent py-3 text-sm font-medium whitespace-nowrap text-neutral-500 hover:border-neutral-300 hover:text-neutral-700 data-selected:border-indigo-500 data-selected:text-indigo-600"
                    >
                      {tab.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
            </div>

            <TabPanels as={Fragment}>
              {tabs.map((tab) => (
                <TabPanel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                  {tab.features.map((feature) => (
                    <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                      <div className="mt-6 lg:col-span-5 lg:mt-0">
                        <h3 className="text-lg font-medium text-neutral-900">{feature.name}</h3>
                        <p className="mt-2 text-sm text-neutral-500">{feature.description}</p>
                      </div>
                      <div className="lg:col-span-7">
                        <img
                          alt={feature.imageAlt}
                          src={feature.imageSrc}
                          loading="lazy"
                          className="aspect-2/1 w-full rounded-lg bg-neutral-100 object-cover sm:aspect-5/2"
                        />
                      </div>
                    </div>
                  ))}
                </TabPanel>
              ))}
            </TabPanels>
          </TabGroup>
        </div>
      </section>
    </>
  );
}
