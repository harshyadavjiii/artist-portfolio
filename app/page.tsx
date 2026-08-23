import ThemeToggle from "./theme-toggle";
import ArtistAvatar from "./artist-avatar";

const showcase = [
  {
    type: "Photography",
    title: "Golden Silence",
    description:
      "Soft morning light, quiet architecture, and a stillness that turns a fleeting scene into memory.",
    accent: "from-[#f4d6a0] via-[#d98652] to-[#4b2a22]",
    size: "md:col-span-2 md:row-span-2",
    frame: "rotate-[-2deg]",
  },
  {
    type: "Painting",
    title: "Monsoon Bloom",
    description:
      "Layered color fields inspired by rain-soaked gardens and petals holding the last of the storm.",
    accent: "from-[#f3c0b6] via-[#b45c7b] to-[#402033]",
    size: "",
    frame: "rotate-[1.5deg]",
  },
  {
    type: "Photography",
    title: "City After Rain",
    description:
      "Reflective streets and neon mist, balancing documentary detail with cinematic atmosphere.",
    accent: "from-[#9ed4d8] via-[#3b6f8f] to-[#1f2339]",
    size: "",
    frame: "rotate-[-1deg]",
  },
  {
    type: "Painting",
    title: "Earthsong",
    description:
      "A textured composition of sienna, clay, and ash, echoing handmade pigments and intimate gestures.",
    accent: "from-[#ecd7b4] via-[#b97a49] to-[#5a3020]",
    size: "",
    frame: "rotate-[2deg]",
  },
  {
    type: "Photography",
    title: "Window Light Study",
    description:
      "Portrait-like still life work that explores shadow edges, fabric folds, and gentle human presence.",
    accent: "from-[#f5ead7] via-[#c7a789] to-[#6d4b3e]",
    size: "md:col-span-2",
    frame: "rotate-[-1.5deg]",
  },
];

const highlights = [
  "Fine art photography with a poetic, human eye",
  "Expressive paintings shaped by texture, light, and memory",
  "Available for commissions, exhibitions, and creative collaborations",
];

export default function Home() {
  return (
    <main className="theme-page relative overflow-hidden">
      <ThemeToggle />
      <div className="theme-orb theme-orb-one absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl" />
      <div className="theme-orb theme-orb-two absolute right-[-10rem] top-[20rem] h-80 w-80 rounded-full blur-3xl" />
      <section className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 pb-16 pt-8 sm:px-10 lg:px-12">
        <div className="theme-divider theme-topline mb-14 flex items-center justify-between gap-4 border-b pb-5 text-xs uppercase tracking-[0.35em]">
          <span>Artist Portfolio</span>
          <a
            className="theme-link transition"
            href="mailto:swati@somewhere.com"
          >
            swati@somewhere.com
          </a>
        </div>

        <div className="grid flex-1 gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div className="space-y-8">
            <p className="theme-kicker text-sm uppercase tracking-[0.4em]">
              Photography • Paintings • Visual Stories
            </p>
            <div className="space-y-5">
              <h1 className="theme-heading max-w-4xl font-[family:var(--font-display)] text-6xl leading-none sm:text-7xl lg:text-[7.8rem]">
                Swati
                <span className="theme-subheading ml-3 inline-block">Yadav</span>
              </h1>
              <p className="theme-body max-w-2xl text-lg leading-8 sm:text-xl">
                A luminous front page for an artist who moves between the lens
                and the canvas, creating photographs and paintings rich with
                atmosphere, emotion, and quiet drama.
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
                      Swati Yadav builds visual narratives around tenderness,
                      color, and memory, letting both camera and brush explore
                      the same emotional landscape.
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
                      swati@somewhere.com
                    </a>
                    <p className="contact-copy mt-2 text-sm leading-6">
                      Open for commissions, gallery features, and curated
                      collaborations.
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

        <div className="grid auto-rows-[260px] gap-6 md:grid-cols-3">
          {showcase.map((piece) => (
            <article
              key={piece.title}
              className={`showcase-card group relative overflow-hidden rounded-[2rem] border p-4 shadow-[0_18px_70px_rgba(61,33,17,0.12)] backdrop-blur ${piece.size}`}
            >
              <div
                className={`relative flex h-full w-full ${piece.frame} flex-col justify-end overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${piece.accent} p-6 text-white transition duration-500 group-hover:rotate-0 group-hover:scale-[1.02]`}
              >
                <div className="showcase-image-overlay absolute inset-0" />
                <div className="showcase-image-accent absolute right-5 top-5 h-20 w-16 rounded-full blur-[2px]" />
                <div className="relative">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {piece.type}
                  </p>
                  <h3 className="mt-3 font-[family:var(--font-display)] text-4xl leading-none">
                    {piece.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/82">
                    {piece.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
