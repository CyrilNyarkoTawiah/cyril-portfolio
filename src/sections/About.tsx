import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { aboutIntro, education, roles } from '../data/experience'

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="About Me" title="Design, 3D and code, one practice" />
        <div className="mt-10 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: bio */}
          <Reveal className="flex flex-col gap-5">
            <p className="text-lg leading-relaxed text-ink/90">{aboutIntro}</p>
            <p className="leading-relaxed text-steel">
              I live a dual practice: giving institutions and brands their visual voice through
              annual reports, publications and exhibitions, while building the software I wish
              existed, from first concept to shipped release. The thread running through it all is
              the same: solve the problem properly, then make it beautiful.
            </p>
            <div className="mt-2">
              <h3 className="font-display text-base font-bold uppercase tracking-wider text-steel">
                Education
              </h3>
              <ul className="mt-4 flex flex-col gap-4">
                {education.map((e) => (
                  <li key={e.award} className="border-l-2 border-pale pl-4">
                    <p className="font-semibold text-ink">{e.award}</p>
                    <p className="text-sm text-steel">
                      {e.school} · {e.period}
                    </p>
                    {e.note && <p className="mt-0.5 text-sm text-steel/90">{e.note}</p>}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right: experience */}
          <div className="flex flex-col gap-8">
            {roles.map((r, i) => (
              <Reveal key={r.title + r.period} delay={i * 0.06}>
                <article className="rounded-2xl border border-white/8 bg-surface p-6 shadow-[0_2px_12px_-6px_rgba(23,32,51,0.08)] md:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-bold text-ink">{r.title}</h3>
                    <span
                      className={
                        'rounded-full px-3 py-1 text-xs font-semibold ' +
                        (r.current ? 'bg-brand text-white' : 'bg-paper text-steel')
                      }
                    >
                      {r.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand">
                    {r.organisation}
                    {r.location ? `, ${r.location}` : ''}
                  </p>
                  <ul className="mt-4 flex flex-col gap-1.5">
                    {r.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-steel">
                        <span aria-hidden="true" className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
