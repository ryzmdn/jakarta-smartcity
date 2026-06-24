import Link from "next/link";

export function AppCallToAction() {
  return (
    <div className="overflow-hidden bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Masa Depan Kota Cerdas</h2>
            <p className="mt-6 text-xl/8 text-gray-700">
              Jadilah bagian aktif dari transformasi digital DKI Jakarta. Dengan kolaborasi warga dan pemanfaatan teknologi, kita wujudkan Jakarta yang aman, nyaman, transparan, dan berkelanjutan.
            </p>
            <p className="mt-6 text-base/7 text-gray-600">
              Laporkan masalah fasilitas publik secara langsung, pantau perkembangan pembangunan kota, dan akses ratusan layanan digital terintegrasi melalui ekosistem Jakarta Smart City.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/laporan"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Laporkan Masalah Kota
              </Link>
              <Link
                href="/digitalisasi"
                className="text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
              >
                Layanan Digital <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                alt="Command Center Jakarta Smart City"
                src="https://res.cloudinary.com/dhaonb1vn/image/upload/v1782231372/pexels-photo-6268951_kuabv0.jpg"
                className="aspect-7/5 w-148 max-w-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                <img
                  alt="Aplikasi Mobile JAKI"
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
              <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                <img
                  alt="Monitoring Lalu Lintas"
                  src="https://res.cloudinary.com/dhaonb1vn/image/upload/v1782231291/photo-1555043722-4523972f07ee_tyl07r.jpg"
                  className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                />
              </div>
              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  alt="Ruang Terbuka Hijau Cerdas"
                  src="https://res.cloudinary.com/dhaonb1vn/image/upload/v1782231915/pexels-photo-35239459_igdi3o.jpg"
                  className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
