import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowUpRight, Award, CheckCircle2, Wrench } from 'lucide-react'
import { getProject, projects } from '../data/projects'
import Reveal from '../components/Reveal'
import { Car, Route } from 'lucide-react'
import { useEffect } from 'react'

function BrandCover({ icon, title, coverIcon }: { icon?: string; title: string; coverIcon?: 'car' | 'route' }) {
  if (icon) {
    return (
      <img
        src={icon}
        alt={`${title} app icon`}
        className="h-36 w-36 rounded-[28px] object-cover shadow-xl md:h-44 md:w-44"
      />
    )
  }
  return (
    <span className="inline-flex h-36 w-36 items-center justify-center rounded-[28px] bg-white/10 text-pale md:h-44 md:w-44">
      {coverIcon === 'route' ? <Route size={64} /> : <Car size={64} />}
    </span>
  )
}

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  useEffect(() => {
    if (project) document.title = `${project.title} — Cyril Nyarko Tawiah`
    return () => {
      document.title = 'Cyril Nyarko Tawiah — Designer · 3D Visualizer · Developer'
    }
  }, [project])

  if (!project) {
    return (
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-5 pb-24 pt-40 text-center">
        <h1 className="font-display text-3xl font-bold text-navy">Project not found</h1>
        <Link to="/" className="inline-flex items-center gap-2 font-semibold text-brand">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </div>
    )
  }

  const cs = project.caseStudy
  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <article className="pb-20 pt-24 md:pt-32">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="inline-flex items-center gap-2 text-sm font-semibold text-steel transition-colors hover:text-brand"
        >
          <ArrowLeft size={16} /> All projects
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-pale px-3 py-1 text-xs font-semibold text-brand-deep">
            {project.category}
          </span>
          <span className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-steel">
            {project.year}
          </span>
          {project.tools.map((t) => (
            <span key={t} className="rounded-full bg-paper px-3 py-1 text-xs font-medium text-steel">
              {t}
            </span>
          ))}
        </div>
        <h1 className="font-display mt-5 max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-navy md:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel">{project.description}</p>
        {project.recognition && (
          <div className="mt-7 flex items-start gap-4 rounded-2xl border border-brand/25 bg-pale p-5 md:items-center">
            <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-white">
              <Award size={24} />
            </span>
            <p className="text-[15px] font-medium leading-relaxed text-navy">{project.recognition}</p>
          </div>
        )}
        {project.links?.map((l) => (
          <a
            key={l.url}
            href={l.url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy/90"
          >
            {l.label} <ArrowUpRight size={15} />
          </a>
        ))}
      </header>

      {/* Visual */}
      <div className="mx-auto mt-10 max-w-7xl px-5 md:px-8">
        {project.images ? (
          <div className={`grid gap-5 ${project.images.length > 1 ? 'md:grid-cols-3' : ''}`}>
            {project.images.map((img, i) => (
              <Reveal key={img + i} delay={i * 0.06}>
                <img
                  src={img}
                  alt={`${project.title} — visual ${i + 1}`}
                  className="aspect-[16/10] w-full rounded-2xl border border-navy/8 object-cover"
                />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-navy py-20 md:py-28">
              <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand/25 blur-3xl" />
              <div aria-hidden="true" className="absolute -bottom-20 -left-12 h-64 w-64 rounded-full bg-pale/10 blur-3xl" />
              <div className="relative z-10 flex flex-col items-center gap-6">
                <BrandCover
                  icon={project.icon}
                  title={project.title}
                  coverIcon={project.coverIcon}
                />
                <p className="font-display text-xl font-bold text-white md:text-2xl">{project.title}</p>
                <p className="text-sm text-white/60">
                  Phone screenshots coming soon — see the repository for the app itself.
                </p>
              </div>
            </div>
          </Reveal>
        )}
      </div>

      {/* Case study */}
      <div className="mx-auto mt-14 grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="flex flex-col gap-10">
          {[
            { label: 'Overview', text: cs.overview },
            { label: 'Objective', text: cs.objective },
            { label: 'Final outcome', text: cs.outcome },
          ].map((block) => (
            <Reveal key={block.label}>
              <section>
                <h2 className="font-display text-2xl font-bold text-navy">{block.label}</h2>
                <p className="mt-3 leading-relaxed text-steel">{block.text}</p>
              </section>
            </Reveal>
          ))}
          <Reveal>
            <section>
              <h2 className="font-display text-2xl font-bold text-navy">Process</h2>
              <ol className="mt-4 flex flex-col gap-3">
                {cs.process.map((step, i) => (
                  <li key={i} className="flex gap-3.5 leading-relaxed text-steel">
                    <span className="font-display inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-pale text-xs font-bold text-brand-deep">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
        </div>

        <aside className="flex flex-col gap-6">
          <Reveal delay={0.06}>
            <div className="rounded-2xl border border-navy/8 bg-white p-6">
              <h3 className="flex items-center gap-2 font-display text-base font-bold text-navy">
                <Wrench size={16} className="text-brand" /> Tools & technologies
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tools.map((t) => (
                  <li key={t} className="rounded-full bg-paper px-3 py-1.5 text-sm text-navy/80">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          {cs.note && (
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-navy/8 bg-paper p-6">
                <h3 className="font-display text-base font-bold text-navy">Contribution</h3>
                <p className="mt-2 flex gap-2 text-sm leading-relaxed text-steel">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand" />
                  {cs.note}
                </p>
              </div>
            </Reveal>
          )}
          <Reveal delay={0.14}>
            <Link
              to={`/project/${next.slug}`}
              className="group flex items-center justify-between gap-4 rounded-2xl bg-navy p-6 text-white transition-colors hover:bg-navy/95"
            >
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-wider text-white/50">Next project</span>
                <span className="font-display text-lg font-bold">{next.title}</span>
              </span>
              <ArrowUpRight size={20} className="text-pale transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </aside>
      </div>
    </article>
  )
}
