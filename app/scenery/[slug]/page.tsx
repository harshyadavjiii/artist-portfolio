import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getContent } from "../../../lib/content";

export const dynamic = "force-dynamic";

export default async function SceneryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { journal } = await getContent();
  const entry = journal.find((item) => item.slug === slug);

  if (!entry) notFound();

  return (
    <main className="theme-page scenery-diary-page relative min-h-screen overflow-hidden">
      <div className="theme-orb theme-orb-one absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full blur-3xl" />
      <div className="mx-auto w-full max-w-7xl px-6 pb-24 pt-28 sm:px-10 lg:px-12">
        <Link href="/#showcase" className="back-link">
          <span aria-hidden="true">←</span> Back to showcase
        </Link>
        <div className="scenery-diary-header mt-10">
          <p className="theme-kicker text-xs uppercase tracking-[0.35em]">{entry.location}</p>
          <h1 className="theme-heading mt-5 max-w-4xl font-[family:var(--font-display)] text-6xl leading-[0.92] sm:text-8xl">{entry.title}</h1>
          <p className="theme-body mt-7 max-w-2xl text-lg leading-8">{entry.intro}</p>
        </div>
        <div className="scenery-diary-layout mt-14 grid gap-10 lg:grid-cols-[minmax(18rem,0.7fr)_minmax(0,1.3fr)] lg:items-start">
          <div className="scenery-diary-image relative w-full overflow-hidden rounded-[2rem] border" style={{ aspectRatio: entry.aspectRatio }}>
            <Image src={entry.image} alt={entry.title} fill priority sizes="(max-width: 1024px) 100vw, 42vw" className="object-contain" />
          </div>
          <div className="scenery-diary-copy">
            <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Four notes from the way</p>
            <div className="mt-6">
              {entry.paragraphs.map((paragraph, index) => (
                <p key={paragraph} className="diary-paragraph">
                  <span className="diary-number">0{index + 1}</span>
                  {paragraph}
                </p>
              ))}
            </div>
            <Link href="/blog" className="theme-button-primary mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5">Read the travel journal</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
