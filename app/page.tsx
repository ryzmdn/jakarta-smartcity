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
                  Eu duis porta aliquam ornare. Elementum eget magna egestas. Eu
                  duis porta aliquam ornare.
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
    </>
  );
}
