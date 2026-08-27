export default function ContactPage() {
  return (
    <main className="theme-page page-shell">
      <div className="theme-divider theme-topline page-topline border-b text-xs uppercase tracking-[0.35em]">
        Contact
      </div>
      <div className="page-intro">
        <p className="theme-kicker text-xs uppercase tracking-[0.35em]">Contact</p>
        <h1 className="theme-heading mt-5 max-w-4xl font-[family:var(--font-display)] text-6xl leading-none sm:text-8xl">Let’s make something with feeling.</h1>
        <p className="theme-body mt-8 max-w-2xl text-lg leading-8">For commissions, exhibitions, editorial work, or a thoughtful collaboration, send a note and tell me what you are imagining.</p>
      </div>
      <div className="contact-grid mt-16 grid gap-6 md:grid-cols-2">
        <a className="contact-card rounded-[1.75rem] p-7" href="mailto:swati@somewhere.com"><span className="contact-kicker text-xs uppercase tracking-[0.3em]">Email</span><strong className="contact-link mt-5 block font-[family:var(--font-display)] text-3xl">swati@somewhere.com</strong></a>
        <div className="note-card rounded-[1.75rem] border p-7"><p className="theme-kicker text-xs uppercase tracking-[0.3em]">Availability</p><p className="theme-body mt-5 leading-7">Currently welcoming select commissions, gallery features, and creative collaborations.</p></div>
      </div>
    </main>
  );
}
