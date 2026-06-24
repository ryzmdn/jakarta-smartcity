"use client";

import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { AppHeading } from "@/components/app-heading";
import Image from "next/image";

const HERO_TITLE = "Selamat Datang di Masa Depan Jakarta";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1200&auto=format&fit=crop";

const METRICS_DATA = [
  { label: "JakWifi Gratis", value: "10,500+ Titik" },
  { label: "Laporan CRM Selesai", value: "98.7% Tuntas" },
  { label: "Pengguna Transportasi Harian", value: "1.3 Juta+" },
  { label: "Pengguna Transportasi", value: "1.3 Juta+" },
];

const spaces = [
  {
    name: "Ruang Terbuka Hijau & Eco Park",
    total: 150,
    imageUrl:
      "https://images.unsplash.com/photo-1588880331179-bc9b93a8c5c8?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Hub Transportasi Terintegrasi",
    total: 12,
    imageUrl:
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Command Center & Tanggap Cepat",
    total: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Co-working Space & Creative Hub",
    total: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=256&h=256&auto=format&fit=crop",
  },
  {
    name: "Pusat Pelayanan Publik Digital",
    total: 45,
    imageUrl:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=256&h=256&auto=format&fit=crop",
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

const posts = [
  {
    id: 1,
    title: "Laporan Cepat Tanggap (CRM)",
    description: "Sistem integrasi laporan warga untuk penanganan masalah kota yang cepat, efisien, dan transparan.",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?q=80&w=600&auto=format&fit=crop",
    features: [
      "13 kanal pengaduan resmi terintegrasi.",
      "Penanganan langsung oleh OPD terkait.",
      "Pelacakan status laporan secara real-time."
    ]
  },
  {
    id: 2,
    title: "JakWifi - Internet untuk Semua",
    description: "Penyediaan akses internet gratis di ribuan titik ruang publik guna mendukung produktivitas digital warga.",
    imageUrl:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600&auto=format&fit=crop",
    features: [
      "Lebih dari 10.500 titik akses aktif.",
      "Akses gratis tanpa batasan waktu.",
      "Mendukung pembelajaran jarak jauh & UMKM."
    ]
  },
  {
    id: 3,
    title: "Sistem Transportasi Cerdas",
    description: "Integrasi moda transportasi publik modern untuk mobilitas warga yang lebih lancar dan terjadwal.",
    imageUrl:
      "https://images.unsplash.com/photo-1557223562-6c77ef16210f?q=80&w=600&auto=format&fit=crop",
    features: [
      "Pembayaran terpadu dengan satu kartu.",
      "Rute terintegrasi MRT, LRT, & TransJakarta.",
      "Informasi kedatangan armada secara real-time."
    ]
  }
];

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

export default function Home() {
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
          <div className="mt-6 flex flex-col gap-x-10 gap-y-20 lg:flex-row">
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
            <div className="relative lg:flex lg:flex-auto lg:justify-center">
              <div className="absolute top-0 left-0 aspect-video h-36 rounded-lg overflow-hidden">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwgqMD0KT8l3slbHqK9-fe3AQ_JvMbOoUuw&s"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 aspect-video h-36 rounded-lg overflow-hidden">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcwgqMD0KT8l3slbHqK9-fe3AQ_JvMbOoUuw&s"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-12 gap-y-16 text-center lg:grid-cols-4">
          {METRICS_DATA.map((stat) => (
            <li
              key={stat.label}
              className="flex flex-col gap-y-4 max-w-xs text-left border-b border-neutral-300 pb-6"
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

      <section className="mx-auto max-w-7xl my-20 px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-neutral-900 sm:text-5xl">
          Inovasi & Layanan Digital Unggulan
        </h2>
        <p className="mt-3 text-lg/8 text-neutral-600">
          Pelajari berbagai inovasi dan layanan publik berbasis teknologi yang dikembangkan untuk mempermudah kehidupan warga Jakarta.
        </p>
        <div className="grid mt-16 gap-10 lg:grid-cols-2 lg:mt-20">
          {posts.map((post) => (
            <article
              key={post.id}
              className="relative isolate flex flex-col gap-8 lg:flex-row"
            >
              <div className="relative aspect-3/2 w-full max-w-50 rounded-lg overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full">
                <div className="relative max-w-xl">
                  <h3 className="mt-2 text-lg/6 font-medium text-neutral-900">
                    {post.title}
                  </h3>
                  <p className="mt-1.5 text-sm/6 text-neutral-600">
                    {post.description}
                  </p>
                  <ul className="text-sm/6 text-neutral-800 space-y-2 mt-5 list-disc list-inside">
                    {post.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative aspect-5/2 w-full h-180 overflow-hidden xl:mx-auto xl:max-w-7xl xl:px-8 xl:rounded-3xl">
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
                Temukan Layanan & Ruang Publik Terintegrasi
              </h2>
              <p className="mt-6 text-sm/6 text-pretty text-neutral-600">
                Jakarta kini bertransformasi dengan menghadirkan fasilitas publik pintar yang mudah diakses guna mendukung produktivitas, kenyamanan, dan kualitas hidup seluruh warga.
              </p>

              <div className="flex flex-col gap-y-6 w-full my-5 py-5">
                {spaces.map((space) => (
                  <div
                    key={space.name}
                    className="relative flex items-center gap-x-10"
                  >
                    <div className="relative size-10 shrink-0">
                      <CheckCircleIcon />
                    </div>
                    <div className="min-w-0 flex-1">
                      <Link href="#" className="focus:outline-hidden">
                        <span aria-hidden="true" className="absolute inset-0" />
                        <p className="font-medium text-neutral-900 leading-7">
                          {space.name}
                        </p>
                        <p className="truncate text-sm text-neutral-500">
                          {space.total} Tempat
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
                alt="Jakarta Smart City Facility"
                fill
                className="object-cover size-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-neutral-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div
                key={callout.name}
                className="group relative w-full bg-white"
              >
                <div className="relative group-hover:opacity-75 rounded-lg max-sm:h-80 sm:aspect-2/1 lg:aspect-square">
                  <Image
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-6 text-sm text-neutral-500">
                  <Link href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </Link>
                </h3>
                <p className="text-base font-semibold text-neutral-900">
                  {callout.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
