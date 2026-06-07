const collections = [
  {
    name: "Women's",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Woman wearing an off-white cotton t-shirt.",
  },
  {
    name: "Men's",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Man wearing a charcoal gray cotton t-shirt.",
  },
  {
    name: "Desk Accessories",
    href: "#",
    imageSrc:
      "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt:
      "Person sitting at a wooden desk with paper note organizer, pencil and tablet.",
  },
];

const incentives = [
  {
    name: "Free Shipping",
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-delivery-light.svg",
  },
  {
    name: "24/7 Customer Support",
    description:
      "Our AI chat widget is powered by a naive series of if/else statements. Guaranteed to irritate.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-chat-light.svg",
  },
  {
    name: "Fast Shopping Cart",
    description:
      "Look how fast that cart is going. What does this mean for the actual experience? I don't know.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-fast-checkout-light.svg",
  },
  {
    name: "Gift Cards",
    description:
      "Buy them for your friends, especially if they don't like our store. Free money for us, it's great.",
    imageSrc:
      "https://tailwindui.com/plus-assets/img/ecommerce/icons/icon-gift-card-light.svg",
  },
];

const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  {
    name: "Michael Foster",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Glasgow, Scotland",
  },
  {
    name: "Dries Vincent",
    role: "Business Relations",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Niagara Falls, Canada",
  },
  {
    name: "Lindsay Walton",
    role: "Front-end Developer",
    imageUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "London, England",
  },
  {
    name: "Courtney Henry",
    role: "Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  {
    name: "Tom Cook",
    role: "Director of Product",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  {
    name: "Whitney Francis",
    role: "Copywriter",
    imageUrl:
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
  {
    name: "Leonard Krasner",
    role: "Senior Designer",
    imageUrl:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
    location: "Toronto, Canada",
  },
];

export default function WisataPage() {
  return (
    <>
      <div className="relative bg-white">
        {/* Background image and overlap */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div className="relative w-full flex-1 bg-gray-800">
            <div className="absolute inset-0 overflow-hidden">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="size-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gray-900 opacity-50" />
          </div>
          <div className="h-32 w-full bg-white md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          {/* Background image and overlap */}
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="relative w-full flex-1 bg-gray-800">
              <div className="absolute inset-0 overflow-hidden">
                <img
                  alt=""
                  src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="size-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gray-900 opacity-50" />
            </div>
            <div className="h-48 w-full bg-white" />
          </div>
          <div className="relative py-32">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Mid-Season Sale
            </h1>
            <div className="mt-4 sm:mt-6">
              <a
                href="#"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 font-medium text-white hover:bg-indigo-700"
              >
                Shop Collection
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
                      Shop the collection
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

      <div className="mx-auto max-w-7xl w-full px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-12">
            {incentives.map((incentive) => (
              <div key={incentive.name} className="text-center">
                <img
                  alt=""
                  src={incentive.imageSrc}
                  className="h-24 w-auto mx-auto"
                />
                <h3 className="mt-6 text-sm font-medium text-gray-900">
                  {incentive.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {incentive.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Our team
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
        </div>

        <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {people.map((person) => (
            <li key={person.name}>
              <img
                alt=""
                src={person.imageUrl}
                className="aspect-14/13 w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
              />
              <h3 className="mt-6 text-lg/8 font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-base/7 text-gray-600">{person.role}</p>
              <p className="text-sm/6 text-gray-500">{person.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
