import Image from "next/image";
import Link from "next/link";

const sceneryOrder = [
  1, 15, 16, 6, 32, 10, 19, 23, 24, 11, 27, 4, 18, 30, 7, 21, 3,
  14, 26, 9, 31, 12, 20, 5, 28, 17, 2, 22, 29, 8, 13, 25, 33,
];

const diaryTitles = [
  "The first light finds us",
  "A road with no hurry",
  "Where the air turns quiet",
  "The colour of leaving",
  "A little farther than planned",
  "The sky keeps its promise",
  "Postcard from a patient morning",
  "The world in soft focus",
  "A pause between places",
  "Notes from the blue hour",
  "The landscape remembers",
  "A window open to weather",
  "Walking toward the warm side",
  "The long way home",
  "A small miracle of distance",
  "When the clouds come lower",
  "A view worth missing the train for",
  "The road begins again",
  "Borrowed light",
  "A quiet kind of brave",
  "Where the green deepens",
  "A day held in amber",
  "The shape of an afternoon",
  "Somewhere past the familiar",
  "The view after the turn",
  "A memory still becoming",
  "The gentle work of wandering",
  "A horizon to carry home",
  "Before the last light",
  "The earth says stay",
  "A place that changes you",
  "The distance between two breaths",
  "A final note from the road",
];

const diaryExcerpts = [
  "I kept walking until the ordinary became luminous. There was no need to arrive quickly; the day was already giving me enough.",
  "Some journeys ask for a map, and some ask only for an open window. This one taught me to notice the silence between landmarks.",
  "I carried a small challenge with me: look again, stay curious, and let the view be different from what I expected.",
  "The farther I went, the more familiar the feeling became. Perhaps travel is less about escape and more about meeting yourself in new light.",
  "Nothing dramatic happened here. That was the gift. A quiet sky, a patient road, and a memory making itself without permission.",
];

export default function BlogPage() {
  return (
    <main className="theme-page page-shell journal-page">
      <div className="theme-divider theme-topline page-topline border-b text-xs uppercase tracking-[0.35em]">
        Journal
      </div>
      <div className="page-intro journal-intro">
        <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Travel diary / 33 frames</p>
        <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-none sm:text-8xl">Notes from the road.</h1>
        <p className="theme-body mt-8 max-w-2xl text-lg leading-8">A collage of passing landscapes, soft arrivals, and the small emotions that stay long after the journey has moved on.</p>
      </div>
      <div className="journal-grid mt-16">
        {sceneryOrder.map((number, index) => (
          <article key={number} className={`journal-card journal-card-${index % 6}`}>
            <Link href={`/scenery/scenery${String(number).padStart(2, "0")}`} className="journal-card-image">
              <Image
                src={`/images/scenery${String(number).padStart(2, "0")}.jpeg`}
                alt={diaryTitles[index]}
                fill
                sizes="(max-width: 700px) 100vw, (max-width: 1100px) 33vw"
                className="object-cover"
              />
              <span className="journal-frame-number">{String(index + 1).padStart(2, "0")}</span>
            </Link>
            <div className="journal-card-copy">
              <p className="theme-kicker text-xs uppercase tracking-[0.3em]">{index < 6 ? "Opening sequence" : "Field note"} / {String(index + 1).padStart(2, "0")}</p>
              <Link href={`/scenery/scenery${String(number).padStart(2, "0")}`}><h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-3xl leading-tight">{diaryTitles[index]}</h2></Link>
              <p className="theme-body mt-3 leading-7">{diaryExcerpts[index % diaryExcerpts.length]}</p>
              <span className="journal-arrow" aria-hidden="true">↗</span>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
