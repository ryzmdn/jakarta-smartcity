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

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    description: "Boost your conversion rate",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Marketing", href: "#" },
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      description: "Boost your conversion rate",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "How to use search engine optimization to drive sales",
    description: "Boost your conversion rate",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Mar 10, 2020",
    datetime: "2020-03-10",
    category: { title: "Sales", href: "#" },
    author: {
      name: "Lindsay Walton",
      role: "Front-end Developer",
      description: "Boost your conversion rate",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 3,
    title: "Improve your customer experience",
    description: "Boost your conversion rate",
    href: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80",
    date: "Feb 12, 2020",
    datetime: "2020-02-12",
    category: { title: "Business", href: "#" },
    author: {
      name: "Tom Cook",
      role: "Director of Product",
      description: "Boost your conversion rate",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const callouts = [
  {
    name: 'Desk and Office',
    description: 'Work from home accessories',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-01.jpg',
    imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
    href: '#',
  },
  {
    name: 'Self-Improvement',
    description: 'Journals and note-taking',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-02.jpg',
    imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
    href: '#',
  },
  {
    name: 'Travel',
    description: 'Daily commute essentials',
    imageSrc: 'https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-02-edition-03.jpg',
    imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
    href: '#',
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
          Lihat Halaman Lain Yang Menarik
        </h2>
        <p className="mt-3 text-lg/8 text-neutral-600">
          Learn how to grow your business with our expert advice.
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
                  alt=""
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
                  <ul className="text-sm/6 text-neutral-800 space-y-2 mt-5">
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
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
                        <p className="font-medium text-neutral-900 leading-7">
                          {person.name}
                        </p>
                        <p className="truncate text-sm text-neutral-500">
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
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                />
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={callout.href}>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
