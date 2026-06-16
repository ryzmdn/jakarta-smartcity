import Image from "next/image";
import Link from "next/link";

export interface CollectionItem {
  name: string;
  eyebrow?: string;
  href?: string;
  imageSrc: string
  imageAlt: string;
}

export interface AppHeadingProps {
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  heroImageSrc?: string;
  collections: CollectionItem[];
}

export function AppHeading({
  title = "Mid-Season Sale",
  heroImageSrc = "https://lh7-us.googleusercontent.com/4Rhy3KzwKo4sbMg1EQQEVH_5VAKfc-GEclFqhw6kIdO0ukUGVa6QVv-iaOtGwbgo-1MraVXSHaJv0ZBuCZIavoaXQM_AiGaH1oxp6HFljmV2MfWszfvVtJIYbvz3XiUJ_0gGjC_jzNo9mNq2RY-YPNM",
  collections,
}: AppHeadingProps) {
  return (
    <div className="relative bg-neutral-50">
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden sm:flex sm:flex-col"
      >
        <div className="relative w-full flex-1 bg-neutral-800">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={heroImageSrc}
              alt={heroImageSrc}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-neutral-900 opacity-50" />
        </div>
        <div className="h-32 w-full bg-neutral-50 md:h-40 lg:h-48" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 flex flex-col sm:hidden"
        >
          <div className="relative w-full flex-1 bg-neutral-800">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src={heroImageSrc}
                alt={heroImageSrc}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-900 opacity-50" />
          </div>
          <div className="h-48 w-full bg-neutral-50" />
        </div>

        <div className="relative py-40">
          <h1 className="text-4xl font-bold tracking-tight text-neutral-50 sm:text-5xl md:text-6xl">
            {title}
          </h1>
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
              className="group relative h-96 rounded-2xl bg-neutral-50 shadow-xl sm:aspect-4/5 sm:h-auto"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 overflow-hidden rounded-2xl"
              >
                <div className="absolute inset-0 overflow-hidden">
                  <Image
                    alt={collection.imageAlt}
                    src={collection.imageSrc}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-transparent to-neutral-950 opacity-50" />
              </div>
              <div className="absolute inset-0 flex items-end rounded-lg p-6">
                <div>
                  <p aria-hidden="true" className="text-xs tracking-widest text-neutral-50">
                    AKSES PUBLIK
                  </p>
                  <h3 className="text-lg mt-1 font-semibold text-neutral-50">
                    {collection.href ? (
                      <Link href={collection.href}>
                        <span className="absolute inset-0" />
                        {collection.name}
                      </Link>
                    ) : (
                      <span>{collection.name}</span>
                    )}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
