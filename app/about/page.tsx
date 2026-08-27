import Image from "next/image";
import Link from "next/link";

const journey = [
  {
    image: "/images/scenery19.jpeg",
    eyebrow: "The philosophical side",
    title: "Perseverance as a practice",
    copy: "Swati believes progress is made in the small decisions that are repeated with care. She gives herself small challenges, asks better questions, and keeps returning to the work until the person she is becoming feels a little more precise than the person she was yesterday.",
    detail: "A personal philosophy of patience, curiosity, and purposeful effort.",
  },
  {
    image: "/images/scenery23.jpeg",
    eyebrow: "The traveller side",
    title: "Learning from every landscape",
    copy: "Travel gives Swati a different kind of classroom. New roads, local food systems, changing weather, and unfamiliar conversations sharpen her attention and remind her that every place has its own rhythm. She returns with photographs, notes, and a wider way of seeing.",
    detail: "Moving through the world slowly enough to notice what it is teaching.",
  },
  {
    image: "/images/scientific05.jpeg",
    eyebrow: "Agronomy / 01",
    title: "Growing better from the root",
    copy: "As an agronomist, Swati works across exotic and domestic leafy vegetables, cocopeat substrate systems, and lettuce production on NFT. Her work brings together observation, crop care, and practical problem-solving to help plants perform in controlled and changing environments.",
    detail: "Exotic and domestic leafy vegetables · Cocopeat substrate · Lettuce NFT systems",
  },
  {
    image: "/images/scientific06.jpeg",
    eyebrow: "Research / 02",
    title: "Curiosity in the field and the lab",
    copy: "As a research assistant breeder at ORBI Seeds, a Bengaluru-based company, Swati supports the patient work of understanding, selecting, and improving crops. She approaches research with strong communication and interpersonal skills, connecting careful observation with the people and decisions that move a project forward.",
    detail: "Research assistant breeder at ORBI Seeds · Bengaluru",
  },
];

export default function AboutPage() {
  return (
    <main className="theme-page page-shell about-page">
      <div className="theme-divider theme-topline page-topline border-b text-xs uppercase tracking-[0.35em]">
        About Swati
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
          <p className="theme-kicker text-xs uppercase tracking-[0.35em]">A life in cultivation</p>
          <h1 className="theme-heading mt-5 font-[family:var(--font-display)] text-6xl leading-[0.92] sm:text-8xl">A curious mind with dirt under her fingernails.</h1>
          <p className="theme-body mt-8 max-w-2xl text-lg leading-8">Swati Yadav is a research assistant breeder, agronomist, relationship manager, and agri advisor who believes that meaningful growth is built through patience, attention, and daily practice.</p>
          <p className="theme-body mt-5 max-w-2xl leading-8">Her work moves between the precision of crop science and the human work of communication. She enjoys understanding a system deeply, making it more useful for others, and staying open to the lessons that arrive along the way.</p>
        </div>
      </section>

      <section className="about-values mt-20 grid gap-6 md:grid-cols-3">
        <div className="about-value"><span>01</span><h2>Keep learning</h2><p>Every crop, conversation, and challenge is an invitation to become more capable.</p></div>
        <div className="about-value"><span>02</span><h2>Stay connected</h2><p>Good work grows through clear communication, trust, and shared responsibility.</p></div>
        <div className="about-value"><span>03</span><h2>Begin again</h2><p>Perseverance means returning to the work with a little more understanding each time.</p></div>
      </section>

      <section className="about-journey mt-24">
        <div className="about-section-heading">
          <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Field notes</p>
          <h2 className="theme-heading mt-3 font-[family:var(--font-display)] text-5xl sm:text-6xl">The many ways she grows.</h2>
        </div>
        <div className="about-story-list mt-12">
          {journey.map((story, index) => (
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
