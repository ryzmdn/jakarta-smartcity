const collections = [
  {
    name: "Layanan Warga (JAKI)",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1562367072-fea5c7eb8748?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Dasbor analitik data dan aplikasi mobile untuk pelayanan warga kota.",
  },
  {
    name: "Data & Analitik (Satu Data)",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1635924201021-e8ae80c2bdc0?q=80&w=743&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Visualisasi data besar dan jaringan server infrastruktur digital pintar.",
  },
  {
    name: "Infrastruktur & IoT Kota",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1593012095939-e01118d1b6db?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Pemandangan gedung pencakar langit kota Jakarta dengan sistem transportasi terintegrasi.",
  },
];

const stats = [
  { label: "Transactions every 24 hours", value: "44 million" },
  { label: "Assets under holding", value: "$119 trillion" },
  { label: "New users annually", value: "46,000" },
];

const timeline = [
  {
    name: "Founded company",
    description:
      "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.",
    date: "Aug 2021",
    dateTime: "2021-08",
  },
  {
    name: "Secured $65m in funding",
    description:
      "Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.",
    date: "Dec 2021",
    dateTime: "2021-12",
  },
  {
    name: "Released beta",
    description:
      "Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.",
    date: "Feb 2022",
    dateTime: "2022-02",
  },
  {
    name: "Global launch of product",
    description:
      "Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.",
    date: "Dec 2022",
    dateTime: "2022-12",
  },
];

const categories = [
  {
    name: "Destinasi & Budaya Betawi",
    href: "#",
    imageSrc:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjq6E7iU9JEiHxtqGppOY-Sz_J8srw0tLHnTTqZnAbrgAjo7Ev29oWiqgAh1xaQ6AXxN02EVV0Fa-gIsUvv0inBaMuUf4OZREQql2M_1rrIrKth0m7MYvnIOX5tyrn-EvTygJb78B-7Uec/s1600/Ondel+Ondel.jpg",
    imageAlt:
      "Sepasang seni pertunjukan tradisional Ondel-ondel khas Betawi Jakarta.",
    description:
      "Jelajahi kekayaan warisan sejarah, festival seni, dan destinasi wisata ikonik di seluruh penjuru ibu kota.",
  },
  {
    name: "Komunitas & Ruang Publik",
    href: "#",
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Pencak_Silat_Betawi_2.jpg/960px-Pencak_Silat_Betawi_2.jpg",
    imageAlt:
      "Dua orang pesilat sedang memperagakan gerakan Pencak Silat khas Betawi.",
    description:
      "Wadah kolaborasi warga, kegiatan pemuda, serta pelestarian seni bela diri tradisional di ruang publik Jakarta.",
  },
  {
    name: "Portal Layanan Pintar (JAKI)",
    href: "#",
    imageSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdtahxmjBki9mmPic8ikOou6Vubr7qQRWdpw&s",
    imageAlt: "Ilustrasi ekosistem digital layanan publik Jakarta Smart City.",
    description:
      "Akses seluruh layanan kependudukan, laporan warga, transportasi, hingga bantuan sosial dalam satu pintu.",
  },
];

const features = [
  {
    name: "Adventure-ready",
    description:
      "The Drawstring Canister is water and tear resistant with durable canvas construction. This bag holds up to the demands of daily use while keeping your snacks secure.",
    imageSrc:
      "https://cnc-magazine.oramiland.com/parenting/images/artikel_HERO_1_Wb7acus.width-800.format-webp.webp",
    imageAlt: "Printed photo of bag being tossed into the sky on top of grass.",
  },
  {
    name: "Minimal and clean",
    description:
      "Everything you need, nothing you don't. This bag has the simple, contemporary design that enables you to tell everyone you know about how essentialism is the only rational way to live life.",
    imageSrc: "https://katafoto.id/wp-content/uploads/2025/07/Jkt-191A3123.jpg",
    imageAlt: "Double stitched black canvas hook loop.",
  },
  {
    name: "Organized",
    description:
      "Never lose your snacks again with our patent-pending snack stash pocket system. With dedicated pouches for each of your snacking needs, the Drawstring Canister unlocks new levels of efficiency and convenience.",
    imageSrc:
      "https://cdn0-production-images-kly.akamaized.net/MosRe9phwynaMY4KfLq7XTKAvQQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/1375036/original/010506800_1476592430-20161016--Serunya-Karnaval-Kebudayaan-Betawi-di-CFD-Jakarta--Faizal-Fanani-03.jpg",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
  },
];

const kuliner = [
  {
    name: "Minimal and thoughtful",
    description:
      'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
    imageSrc:
      "https://cdn1-production-images-kly.akamaized.net/jYNtAE2I8P04XtKahdHRpgFrysQ=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3085839/original/045051600_1585201940-wisata-kuliner-jakarta-2.jpg",
    imageAlt:
      "White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.",
  },
  {
    name: "Refined details",
    description:
      "We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.",
    imageSrc:
      "https://www.indonesia.travel/contentassets/f8c70bafb4a4400ea123fd2fd6e02da1/kuliner-jakarta-indonesia-travel.jpg",
    imageAlt: "Detail of zipper pull with tan leather and silver rivet.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const callouts = [
  {
    name: "Desk and Office",
    description: "Work from home accessories",
    imageSrc:
      "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,f_auto,q_auto:best,w_640/v1634025439/01gar37wem6q19q1smfzpqyx57.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    href: "#",
  },
  {
    name: "Self-Improvement",
    description: "Journals and note-taking",
    imageSrc:
      "https://www.cimbniaga.co.id/content/dam/cimb/inspirasi/wisata-kota-tua-museum-fatahillah.webp",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    href: "#",
  },
  {
    name: "Travel",
    description: "Daily commute essentials",
    imageSrc:
      "https://superlive.id/storage/superadventure/2020/10/04/6a759dfce85f.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    href: "#",
  },
];

const people = [
  {
    name: 'Emma Dorsey',
    role: 'Senior Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1505840717430-882ce147ef2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Praesentium iure error aliquam voluptas ut libero. Commodi placeat sit iure nulla officiis. Ut ex sit repellat tempora. Qui est accusamus exercitationem natus ut voluptas. Officiis velit eos ducimus.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Alicia Bell',
    role: 'Junior Copywriter',
    imageUrl:
      'https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Turpis lectus et amet elementum. Mi duis integer sed in vitae consequat. Nam vitae, in felis mi dui tempus. Porta at turpis eu odio. Et, sed duis in blandit bibendum accumsan. Purus viverra facilisi suspendisse quis est.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Jenny Wilson',
    role: 'Studio Artist',
    imageUrl:
      'https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Aliquet adipiscing lectus praesent cras sed quis lectus egestas erat. Bibendum curabitur eget habitant feugiat nec faucibus eu lorem suscipit. Vitae vitae tempor enim eget lacus nulla leo.',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Anna Roberts',
    role: 'Partner, Creative',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: 'Quis bibendum velit diam tellus sed ut. Faucibus posuere enim, vitae enim eget neque tortor. Metus lectus mattis id id. Tellus ornare etiam id velit ut enim lacinia congue ultrices. Sit morbi vel elit a maecenas mauris elit lectus magna.',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Home() {
  return (
    <>
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1718729362445-51d2da1ee7a7?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-950 opacity-80" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  src="https://tailwindui.com/plus-assets/img/ecommerce-images/home-page-04-hero-full-width.jpg"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-100 sm:text-7xl">
              Mewujudkan Jakarta Cerdas & Kolaboratif
            </h1>
            <p className="mt-8 leading-7 font-medium text-pretty text-gray-300 sm:text-lg/8">
              Mengintegrasikan teknologi informasi dan komunikasi untuk
              mengoptimalkan pelayanan publik, meningkatkan efisiensi, dan
              mewujudkan kehidupan warga Jakarta yang lebih berkualitas.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                Jelajahi Inovasi
              </a>
              <a
                href="#"
                className="text-sm/6 font-semibold text-gray-900 dark:text-white"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>

        <section
          aria-labelledby="collection-heading"
          className="relative -mt-96 sm:mt-0"
        >
          <h2 id="collection-heading" className="sr-only">
            Collections
          </h2>
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="group relative h-96 rounded-lg bg-white shadow-xl sm:aspect-4/5 sm:h-auto"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 overflow-hidden rounded-lg"
                >
                  <div className="absolute inset-0 overflow-hidden group-hover:opacity-75">
                    <img
                      alt={collection.imageAlt}
                      src={collection.imageSrc}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50" />
                </div>
                <div className="absolute inset-0 flex items-end rounded-lg p-6">
                  <div>
                    <p aria-hidden="true" className="text-sm text-white">
                      Section City
                    </p>
                    <h3 className="mt-1 font-semibold text-white">
                      <a href={collection.href}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="w-full">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our mission
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div className="lg:w-full lg:flex-auto">
              <p className="text-xl/8 text-gray-600">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas ac. Diam nulla orci at in viverra
                scelerisque eget. Eleifend egestas fringilla sapien.
              </p>
              <p className="mt-10 max-w-xl text-base/7 text-gray-700">
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>

        <div className="w-full py-20 space-y-16">
          <div>
            <div className="text-center mx-auto max-w-2xl">
              <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                We approach work as a place to make the world better
              </h2>
              <p className="mt-6 text-base/7 text-gray-600">
                Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est
                euismod lacus. Est non placerat nam arcu. Cras purus nibh cursus
                sit eu in id. Integer vel nibh.
              </p>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                  250k
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">
                    Users on the platform
                  </p>
                  <p className="mt-2 text-base/7 text-gray-600">
                    Vel labore deleniti veniam consequuntur sunt nobis.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  $8.9 billion
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    We’re proud that our customers have made over $8 billion in
                    total revenue.
                  </p>
                  <p className="mt-2 text-base/7 text-gray-400">
                    Eu duis porta aliquam ornare. Elementum eget magna egestas.
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-indigo-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  401,093
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Transactions this year
                  </p>
                  <p className="mt-2 text-base/7 text-indigo-200">
                    Eu duis porta aliquam ornare. Elementum eget magna egestas.
                    Eu duis porta aliquam ornare.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.name}>
                <time
                  dateTime={item.dateTime}
                  className="flex items-center text-sm/6 font-semibold text-indigo-600"
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
                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  />
                </time>
                <p className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                  {item.name}
                </p>
                <p className="mt-1 text-base/7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Shop by Collection
        </h2>
        <p className="mt-4 text-base text-gray-500">
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className="mt-10 space-y-12 lg:grid lg:grid-cols-3 lg:space-y-0 lg:gap-x-8">
          {categories.map((category) => (
            <a key={category.name} href={category.href} className="group block">
              <img
                alt={category.imageAlt}
                src={category.imageSrc}
                className="aspect-3/2 w-full rounded-lg object-cover group-hover:opacity-75 lg:aspect-5/6"
              />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {category.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {category.description}
              </p>
            </a>
          ))}
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="max-w-3xl">
            <h2 className="font-semibold text-gray-500">Drawstring Canister</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Use it your way
            </p>
            <p className="mt-4 text-gray-500">
              The Drawstring Canister comes with multiple strap and handle
              options to adapt throughout your day. Shoulder sling it, backpack
              it, or handy carry it.
            </p>
          </div>

          <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-auto lg:col-span-7 xl:col-span-8">
                  <img
                    alt={feature.imageAlt}
                    src={feature.imageSrc}
                    className="aspect-5/2 w-full rounded-lg bg-gray-100 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Protect your device
          </h2>
          <p className="mt-4 text-gray-500">
            As a digital creative, your laptop or tablet is at the center of
            your work. Keep your device safe with a fabric sleeve that matches
            in quality and looks.
          </p>
        </div>

        <div className="mt-16 space-y-16">
          {kuliner.map((feature, featureIdx) => (
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
                <h3 className="text-lg font-medium text-gray-900">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
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
                  className="aspect-5/2 w-full rounded-lg bg-gray-100 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-8">
        <div>
          <div className="sm:flex sm:items-baseline sm:justify-between">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Shop by Category
            </h2>
            <a
              href="#"
              className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:row-span-2 sm:aspect-square">
              <img
                alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
                src="https://www.nowjakarta.co.id/wp-content/uploads/2023/01/Taman-Mini-Indonesia-Jakarta-1.jpg"
                className="absolute size-full object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      New Arrivals
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
              <img
                alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
                src="https://www.iwarebatik.org/wp-content/uploads/2019/11/monas.jpg"
                className="absolute size-full object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Accessories
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
            <div className="group relative aspect-2/1 overflow-hidden rounded-lg sm:aspect-auto">
              <img
                alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
                src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/rsfit19201280gsm/events/2024/12/29/591e6cad-919d-4c23-95a5-0a7f6d2b866a-1735466532176-da6a7edce3a96e416b7f994f5bf87670.png"
                className="absolute size-full object-cover group-hover:opacity-75"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-b from-transparent to-black opacity-50"
              />
              <div className="absolute inset-0 flex items-end p-6">
                <div>
                  <h3 className="font-semibold text-white">
                    <a href="#">
                      <span className="absolute inset-0" />
                      Workspace
                    </a>
                  </h3>
                  <p aria-hidden="true" className="mt-1 text-sm text-white">
                    Shop now
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:hidden">
            <a
              href="#"
              className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Browse all categories
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>

        <div className="mx-auto max-w-7xl w-full">
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
                  <p className="text-base font-semibold text-gray-900">
                    {callout.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl w-full space-y-16 px-4 sm:px-6 lg:px-8">
        <div>
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Everything you need
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
              No server? No problem.
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis.
            </p>
          </div>
          <div className="relative overflow-hidden pt-16">
            <div className="mx-auto max-w-7xl">
              <img
                alt="App screenshot"
                src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Jakarta_Skyline_Part_2.jpg"
                width={2432}
                height={1442}
                className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
              />
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-24">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900">
                    <div className="absolute top-1 left-1 size-5 text-indigo-600">
                      1
                    </div>
                    {feature.name}
                  </dt>{" "}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div>
          <ul
            role="list"
            className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:grid-cols-3"
          >
            {people.map((person) => (
              <li key={person.name}>
                <img
                  alt=""
                  src={person.imageUrl}
                  className="aspect-3/2 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
                />
                <h3 className="mt-6 text-lg/8 font-semibold text-gray-900">
                  {person.name}
                </h3>
                <p className="text-base/7 text-gray-600">{person.role}</p>
                <p className="mt-4 text-base/7 text-gray-600">{person.bio}</p>
                <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a
                      href={person.xUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">X</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href={person.linkedinUrl}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">LinkedIn</span>
                      <svg
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                        className="size-5"
                      >
                        <path
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                          fillRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
