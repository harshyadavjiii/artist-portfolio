import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { artworks } from "../../portfolio-data";

export function generateStaticParams() {
  return artworks.map((artwork) => ({ slug: artwork.slug }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const artwork = artworks.find((item) => item.slug === slug);

  if (!artwork) notFound();

  return (
    <main className="theme-page relative min-h-screen overflow-hidden">
      <div className="theme-orb theme-orb-one absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <Link href="/#showcase" className="back-link">
          <span aria-hidden="true">←</span> Back to showcase
        </Link>
        <div className="artwork-detail mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.7fr)] lg:items-center">
          <div
            className="artwork-detail-image relative w-full overflow-hidden rounded-[2rem] border bg-black/5"
            style={{ aspectRatio: artwork.aspectRatio }}
          >
            <Image
              src={artwork.image}
              alt={artwork.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 65vw"
              className="object-contain"
            />
          </div>
          <div className="max-w-xl">
            <p className="theme-kicker text-xs uppercase tracking-[0.35em]">
              {artwork.type} / Featured work
            </p>
            <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-[0.92] sm:text-7xl">
              {artwork.title}
            </h1>
            <p className="theme-body mt-8 text-lg leading-8">
              {artwork.description}
            </p>
            <div className="detail-note mt-10 border-l-2 pl-5">
              <p className="theme-kicker text-xs uppercase tracking-[0.3em]">
                About the work
              </p>
              <p className="theme-body mt-3 leading-7">{artwork.details}</p>
            </div>
            <Link
              href="/contact"
              className="theme-button-primary mt-10 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              Enquire about this work
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
