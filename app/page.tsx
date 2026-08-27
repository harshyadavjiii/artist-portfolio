import ArtistAvatar from "./artist-avatar";
import Image from "next/image";
import Link from "next/link";
import { artworks } from "./portfolio-data";

const highlights = [
  "Agronomist working with exotic and domestic leafy vegetables",
  "Research assistant breeder at ORBI Seeds, Bengaluru",
  "Clear communicator, relationship builder, and lifelong learner",
];

export default function Home() {
  const scenerySlugs = ["scenery13", "scenery11", "scenery24"];
  const showcase = artworks.map((artwork, index) =>
    index === 0
      ? {
          ...artwork,
          image: "/images/scenery13.jpeg",
          aspectRatio: "3 / 4",
          type: "Photography" as const,
        }
      : index === 1
        ? {
            ...artwork,
            image: "/images/scenery11.jpeg",
            aspectRatio: "3 / 4",
            type: "Photography" as const,
          }
        : index === 2
          ? {
              ...artwork,
              image: "/images/scenery24.jpeg",
              type: "Photography" as const,
            }
        : artwork,
  );

  return (
    <main className="theme-page relative overflow-hidden">
      <div className="theme-orb theme-orb-one absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl" />
      <div className="theme-orb theme-orb-two absolute right-[-10rem] top-[20rem] h-80 w-80 rounded-full blur-3xl" />
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <div className="theme-divider theme-topline mb-14 border-b pb-5 text-xs uppercase tracking-[0.35em]">
          Artist Portfolio
        </div>

        <div className="grid flex-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="theme-kicker text-sm uppercase tracking-[0.4em]">
              Agronomy • Research • Visual Stories
            </p>
            <div className="space-y-5">
              <h1 className="theme-heading max-w-4xl font-[family:var(--font-display)] text-6xl leading-none sm:text-7xl lg:text-[7.8rem]">
                Swati
                <span className="theme-subheading ml-3 inline-block">Yadav</span>
              </h1>
              <p className="theme-body max-w-2xl text-lg leading-8 sm:text-xl">
                Swati Yadav is an agronomist, research assistant breeder, B2B
                relationship manager, and agri advisor who brings curiosity,
                creative thinking, and care to every growing system and human
                connection.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:swati@somewhere.com"
                className="theme-button-primary rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                Contact Swati
              </a>
              <a
                href="#showcase"
                className="theme-button-secondary rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                View Showcase
              </a>
            </div>

            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {highlights.map((item) => (
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
                      She works across crop science and communication, from
                      cocopeat substrate and lettuce NFT systems to practical
                      advice that helps people make confident decisions.
                    </p>
                  </div>
                  <div className="contact-card rounded-[1.75rem] px-5 py-4">
                    <p className="contact-kicker text-xs uppercase tracking-[0.3em]">
                      Contact
                    </p>
                    <a
                      href="mailto:swati@somewhere.com"
                      className="contact-link mt-3 block whitespace-nowrap font-[family:var(--font-display)] text-[1.2rem] leading-tight transition sm:text-[1.28rem] lg:text-[1.42rem]"
                    >
                      Swati Yadav
                    </a>
                    <p className="contact-copy mt-2 text-sm leading-6">
                      Driven by perseverance, small self-set challenges, and a
                      belief that thoughtful work can help people and plants
                      thrive.
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
              Showcase
            </p>
            <h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-5xl sm:text-6xl">
              Beautiful photographs and paintings
            </h2>
          </div>
          <p className="theme-body max-w-xl text-base leading-7">
            A gallery-style arrangement of featured works, balancing painterly
            warmth with crisp photographic storytelling.
          </p>
        </div>

        <div className="grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.map((piece, index) => (
            <article
              key={piece.title}
              className="showcase-card group relative overflow-hidden rounded-[2rem] border shadow-[0_18px_70px_rgba(61,33,17,0.12)]"
            >
              <Link
                href={
                  index < 3
                    ? `/scenery/${scenerySlugs[index]}`
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
                  {piece.type}
                </p>
                <Link
                  href={
                    index < 3
                      ? `/scenery/${scenerySlugs[index]}`
                      : `/paintings/${piece.slug}`
                  }
                >
                  <h3 className="theme-heading mt-2 font-[family:var(--font-display)] text-3xl leading-none">
                    {piece.title}
                  </h3>
                </Link>
                <p className="theme-body mt-3 text-sm leading-6">
                  {piece.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
