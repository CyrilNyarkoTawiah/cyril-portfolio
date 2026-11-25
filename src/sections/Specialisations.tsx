import { Box, Braces, PenTool } from 'lucide-react'
import Reveal from '../components/Reveal'

const cards = [
  {
    n: '01',
    icon: PenTool,
    title: 'Creative Design',
    desc: 'Branding, print, editorial and digital design.',
  },
  {
    n: '02',
    icon: Box,
    title: '3D Visualisation',
    desc: '3D modelling, rendering and animation.',
  },
  {
    n: '03',
    icon: Braces,
    title: 'Software Development',
    desc: 'Android applications, web solutions and information systems.',
  },
]

export default function Specialisations() {
  return (
    <section aria-label="Specialisations" className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
      <div className="grid gap-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-white/10">
        {cards.map((c, i) => (
          <Reveal key={c.n} delay={i * 0.08} className="md:px-8 md:first:pl-0 md:last:pr-0">
            <div className="flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-pale text-brand">
                <c.icon size={22} />
              </span>
              <div>
                <p className="font-display text-lg font-bold text-ink">{c.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-steel">{c.desc}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
