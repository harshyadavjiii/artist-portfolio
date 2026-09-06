import Image from "next/image";
import Link from "next/link";
import { getContent } from "../../lib/content";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const { about } = await getContent();
  return (
    <main className="theme-page page-shell about-page">
      <div className="theme-divider theme-topline page-topline border-b text-xs uppercase tracking-[0.35em]">
        {about.topline}
      </div>

      <section className="about-profile">
        <div className="about-avatar-wrap">
          <div className="about-avatar">
            <Image
              src="/images/avataar.jpeg"
              alt="Portrait of Swati Yadav"
              fill
              priority
              sizes="(max-width: 700px) 11rem, 15rem"
              className="object-cover"
            />
          </div>
          <span className="about-avatar-caption">Swati Yadav / 01</span>
        </div>
        <div className="about-profile-copy">
          <p className="theme-kicker text-xs uppercase tracking-[0.35em]">{about.kicker}</p>
          <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-[0.92] sm:text-8xl">{about.title}</h1>
          <p className="theme-body mt-8 max-w-2xl text-lg leading-8">{about.intro}</p>
          <p className="theme-body mt-5 max-w-2xl leading-8">{about.body}</p>
        </div>
      </section>

      <section className="about-values mt-20 grid gap-6 md:grid-cols-3">
        {about.values.map((value) => <div key={value.number} className="about-value"><span>{value.number}</span><h2>{value.title}</h2><p>{value.copy}</p></div>)}
      </section>

      <section className="about-journey mt-24">
        <div className="about-section-heading">
          <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Field notes</p>
          <h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-5xl sm:text-6xl">The many ways she grows.</h2>
        </div>
        <div className="about-story-list mt-12">
          {about.journey.map((story, index) => (
            <article key={story.title} className={`about-story about-story-${index % 2 === 0 ? "image-first" : "text-first"}`}>
              <div className={`about-story-image about-story-image-${index}`}>
                <Image src={story.image} alt={story.title} fill sizes="(max-width: 700px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="about-story-copy">
                <p className="theme-kicker text-xs uppercase tracking-[0.3em]">{story.eyebrow}</p>
                <h3 className="theme-heading mt-4 font-[family:var(--font-display)] text-4xl leading-tight">{story.title}</h3>
                <p className="theme-body mt-5 text-base leading-8">{story.copy}</p>
                <p className="about-story-detail mt-6">{story.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="about-closing mt-24">
        <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Keep in touch</p>
        <h2 className="theme-heading mt-4 max-w-3xl font-[family:var(--font-display)] text-5xl leading-tight sm:text-6xl">The best work begins with a thoughtful conversation.</h2>
        <Link href="/contact" className="theme-button-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">Say hello</Link>
      </section>
    </main>
  );
}
