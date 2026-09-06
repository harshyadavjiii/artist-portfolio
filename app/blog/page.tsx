import Image from "next/image";
import Link from "next/link";
import { getContent } from "../../lib/content";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const { blog, journal } = await getContent();
  return (
    <main className="theme-page page-shell journal-page">
      <div className="theme-divider theme-topline page-topline border-b text-xs uppercase tracking-[0.35em]">
        {blog.topline}
      </div>
      <div className="page-intro journal-intro">
        <p className="theme-kicker text-xs uppercase tracking-[0.35em]">{blog.kicker}</p>
        <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-none sm:text-8xl">{blog.title}</h1>
        <p className="theme-body mt-8 max-w-2xl text-lg leading-8">{blog.intro}</p>
      </div>
      <div className="journal-grid mt-16">
        {journal.map((entry, index) => (
          <article key={entry.slug} className={`journal-card journal-card-${index % 6}`}>
            <Link href={`/scenery/${entry.slug}`} className="journal-card-image">
              <Image
                src={entry.image}
                alt={entry.title}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw"
                className="object-cover"
              />
              <span className="journal-frame-number">{String(index + 1).padStart(2, "0")}</span>
            </Link>
            <div className="journal-card-copy">
              <p className="theme-kicker text-xs uppercase tracking-[0.3em]">{index < 6 ? "Opening sequence" : "Field note"} / {String(index + 1).padStart(2, "0")}</p>
              <Link href={`/scenery/${entry.slug}`}><h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-3xl leading-tight">{entry.title}</h2></Link>
              <p className="theme-body mt-3 leading-7">{entry.intro}</p>
              <span className="journal-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
