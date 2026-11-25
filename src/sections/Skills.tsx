import { Box, Braces, Layers, PenTool } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

const icons = [PenTool, Box, Braces, Layers]

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading eyebrow="Skills" title="What I work with" align="center" className="items-center" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g, i) => {
            const Icon = icons[i % icons.length]
            return (
              <Reveal key={g.title} delay={i * 0.07}>
                <article className="flex h-full flex-col rounded-2xl border border-white/8 bg-surface p-6 shadow-[0_2px_12px_-6px_rgba(23,32,51,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-24px_rgba(79,138,59,0.35)]">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-pale text-brand">
                    <Icon size={22} />
                  </span>
                  <h3 className="font-display mt-4 text-lg font-bold text-ink">{g.title}</h3>
                  <p className="mt-1 text-sm text-steel">{g.description}</p>
                  <ul className="mt-4 flex flex-col gap-2 border-t border-white/8 pt-4">
                    {g.skills.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-ink/80">
                        <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
