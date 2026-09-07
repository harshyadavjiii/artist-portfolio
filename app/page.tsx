import ArtistAvatar from "./artist-avatar";
import Image from "next/image";
import Link from "next/link";
import { getContent } from "../lib/content";

export const dynamic = "force-dynamic";

export default async function Home() {
  const content = await getContent();
  const { home, settings, artworks, journal } = content;
  const scenerySlugs = home.showcaseScenery;
  const sceneryShowcase = scenerySlugs.map((slug) => journal.find((entry) => entry.slug === slug)).filter((entry) => entry !== undefined);
  const showcase = [
    ...sceneryShowcase.map((entry) => ({
      ...entry,
      aspectRatio: "3 / 4",
      type: "Photography" as const,
    })),
    ...artworks,
  ].slice(0, 6);

  return (
    <main className="theme-page relative overflow-hidden">
      <div className="theme-orb theme-orb-one absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl" />
      <div className="theme-orb theme-orb-two absolute right-[-10rem] top-[20rem] h-80 w-80 rounded-full blur-3xl" />
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <div className="theme-divider theme-topline mb-14 border-b pb-5 text-xs uppercase tracking-[0.35em]">
          {home.topline}
        </div>

        <div className="grid flex-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="theme-kicker text-sm uppercase tracking-[0.4em]">
              {home.kicker}
            </p>
            <div className="space-y-5">
              <h1 className="theme-heading max-w-4xl font-[family:var(--font-display)] text-6xl leading-none sm:text-7xl lg:text-[7.8rem]">
                {home.firstName}
                <span className="theme-subheading ml-3 inline-block">{home.lastName}</span>
              </h1>
              <p className="theme-body max-w-2xl text-lg leading-8 sm:text-xl">
                {home.intro}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                  href={`mailto:${settings.email}`}
                className="theme-button-primary rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Contact {home.firstName}
              </a>
              <a
                href="#showcase"
                className="theme-button-secondary rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                View Showcase
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {home.highlights.map((item) => (
                <div
                  key={item}
                  className="theme-chip rounded-[1.75rem] border p-5 shadow-[0_18px_60px_rgba(74,45,22,0.08)] backdrop-blur"
                >
                  <p className="theme-body text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="hero-glow absolute inset-0 -z-10 rounded-[2rem]" />
            <div className="theme-panel rounded-[2rem] border p-5 shadow-[0_25px_80px_rgba(76,45,24,0.14)] backdrop-blur">
              <div className="grid gap-5">
                <ArtistAvatar />
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="note-card rounded-[1.75rem] border p-5">
                    <p className="theme-kicker text-xs uppercase tracking-[0.3em]">
                      Artist Note
                    </p>
                    <p className="theme-body mt-4 text-sm leading-7">
                      {home.artistNote}
                    </p>
                  </div>
                  <div className="contact-card rounded-[1.75rem] px-5 py-4">
                    <p className="contact-kicker text-xs uppercase tracking-[0.3em]">
                      Contact
                    </p>
                    <a
                      href={`mailto:${settings.email}`}
                      className="contact-link mt-3 block whitespace-nowrap font-[family:var(--font-display)] text-[1.2rem] leading-tight transition sm:text-[1.28rem] lg:text-[1.42rem]"
                    >
                      {home.firstName} {home.lastName}
                    </a>
                    <p className="contact-copy mt-2 text-sm leading-6">
                      {home.contactCopy}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="showcase"
        className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-12"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="theme-kicker text-sm uppercase tracking-[0.35em]">
              {home.showcaseKicker}
            </p>
            <h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-5xl sm:text-6xl">
              {home.showcaseTitle}
            </h2>
          </div>
          <p className="theme-body max-w-xl text-base leading-7">
            {home.showcaseCopy}
          </p>
        </div>

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((piece, index) => {
            const isScenery = "location" in piece;
            const pieceSlug = piece.slug;
            return (
            <article
              key={pieceSlug}
              className="showcase-card group relative overflow-hidden rounded-[2rem] border shadow-[0_18px_70px_rgba(61,33,17,0.12)]"
            >
              <Link
                href={
                  isScenery
                    ? `/scenery/${pieceSlug}`
                    : `/paintings/${piece.slug}`
                }
                className="block"
              >
                <div
                  className="relative w-full overflow-hidden bg-black/5"
                  style={{ aspectRatio: piece.aspectRatio }}
                >
                  <Image
                    src={piece.image}
                    alt={piece.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={`${index < 3 ? "object-cover" : "object-contain"} transition duration-500 group-hover:scale-[1.02]`}
                  />
                </div>
              </Link>
              <div className="showcase-caption p-5 sm:p-6">
                <p className="theme-kicker text-xs uppercase tracking-[0.3em]">
                  {isScenery ? "Photography" : piece.type}
                </p>
                <Link
                  href={
                    isScenery
                      ? `/scenery/${pieceSlug}`
                      : `/paintings/${piece.slug}`
                  }
                >
                  <h3 className="theme-heading mt-2 font-[family:var(--font-display)] text-3xl leading-none">
                    {piece.title}
                  </h3>
                </Link>
                <p className="theme-body mt-3 text-sm leading-6">
                  {isScenery ? piece.intro : piece.description}
                </p>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
